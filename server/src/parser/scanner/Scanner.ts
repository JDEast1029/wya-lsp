import { MultiLineStream } from './MultiLineStream';
import {
	BNG, MIN, LAN, RAN, FSL, EQS, DQO,
	SQO, LCR, RCR, ScannerState, TokenType,
} from './constants';

export class Scanner {
	public stream: MultiLineStream;
	public state: ScannerState;
	public tokenOffset: number;
	public tokenType = 0;
	public tokenError = '';
	public hasSpaceAfterTag = false;
	public lastTag = '';
	public lastAttributeName: string | null = null;
	public lastTypeValue: string | null = null;
	
	private htmlScriptContents: { [lang: string]: boolean } = {
		'text/x-handlebars-template': true
	}

	constructor(
		input: string, 
		initialOffset = 0, 
		initialState: ScannerState = ScannerState.WithinContent
	) {
		this.stream = new MultiLineStream(input, initialOffset);
		this.state = initialState;
		this.tokenOffset = 0;
	}

	public scan(): TokenType {
		const offset = this.stream.pos();
		const oldState = this.state;
		const token = this.internalScan();
		if (token !== TokenType.EOS && offset === this.stream.pos()) {
			console.log(
				'Scanner.scan has not advanced at offset ' + offset + ', state before: ' + oldState + ' after: ' + this.state
			);
			this.stream.advance(1);
			return this.finishToken(offset, TokenType.Unknown);
		}
		return token;
	}

	public scanForRegexp(regexp: RegExp): TokenType {
		const offset = this.stream.pos();
		this.state = ScannerState.WithinContent;
		if (this.stream.advanceUntilRegExp(regexp)) {
			return this.finishToken(offset, TokenType.Unknown);
		}
		return this.finishToken(offset, TokenType.EOS);
	}

	public getTokenLength(): number {
		return this.stream.pos() - this.tokenOffset;
	}
	public getTokenEnd(): number {
		return this.stream.pos();
	}

	public getTokenText(): string {
		return this.stream.getSource().substring(this.tokenOffset, this.stream.pos());
	}

	/* private */
	private finishToken(offset: number, type: TokenType, errorMessage?: string): TokenType {
		this.tokenType = type;
		this.tokenOffset = offset;
		this.tokenError = errorMessage || '';
		return type;
	}

	private nextElementName(): string {
		return this.stream.advanceIfRegExp(/^[_:\w][_:\w-.\d]*/).toLowerCase();
	}

	private nextAttributeName(): string {
		// eslint-disable-next-line no-control-regex
		return this.stream.advanceIfRegExp(/^[^\s"'<>/=\x00-\x0F\x7F\x80-\x9F]*/).toLowerCase();
	}

	private internalScan(): TokenType {
		const offset = this.stream.pos();
		if (this.stream.eos()) {
			return this.finishToken(offset, TokenType.EOS);
		}
		let errorMessage;

		switch (this.state) {
			case ScannerState.WithinComment:
				if (this.stream.advanceIfChars([MIN, MIN, RAN])) {
					// -->
					this.state = ScannerState.WithinContent;
					return this.finishToken(offset, TokenType.EndCommentTag);
				}
				this.stream.advanceUntilChars([MIN, MIN, RAN]); // -->
				return this.finishToken(offset, TokenType.Comment);
			case ScannerState.WithinDoctype:
				if (this.stream.advanceIfChar(RAN)) {
					this.state = ScannerState.WithinContent;
					return this.finishToken(offset, TokenType.EndDoctypeTag);
				}
				this.stream.advanceUntilChar(RAN); // >
				return this.finishToken(offset, TokenType.Doctype);
			case ScannerState.WithinContent:
				if (this.stream.advanceIfChar(LAN)) {
					// <
					if (!this.stream.eos() && this.stream.peekChar() === BNG) {
						// !
						if (this.stream.advanceIfChars([BNG, MIN, MIN])) {
							// <!--
							this.state = ScannerState.WithinComment;
							return this.finishToken(offset, TokenType.StartCommentTag);
						}
						if (this.stream.advanceIfRegExp(/^!doctype/i)) {
							this.state = ScannerState.WithinDoctype;
							return this.finishToken(offset, TokenType.StartDoctypeTag);
						}
					}
					if (this.stream.advanceIfChar(FSL)) {
						// /
						this.state = ScannerState.AfterOpeningEndTag;
						return this.finishToken(offset, TokenType.EndTagOpen);
					}
					this.state = ScannerState.AfterOpeningStartTag;
					return this.finishToken(offset, TokenType.StartTagOpen);
				}
				if (this.stream.advanceIfChars([LCR, LCR])) {
					this.state = ScannerState.WithinInterpolation;
					return this.finishToken(offset, TokenType.StartInterpolation);
				}
				this.stream.advanceUntilRegExp(/<|{{/);
				return this.finishToken(offset, TokenType.Content);
			case ScannerState.WithinInterpolation:
				if (this.stream.advanceIfChars([RCR, RCR])) {
					this.state = ScannerState.WithinContent;
					return this.finishToken(offset, TokenType.EndInterpolation);
				}
				this.stream.advanceUntilChars([RCR, RCR]);
				return this.finishToken(offset, TokenType.InterpolationContent);
			case ScannerState.AfterOpeningEndTag:
				// eslint-disable-next-line no-case-declarations
				const tagName = this.nextElementName();
				if (tagName.length > 0) {
					this.state = ScannerState.WithinEndTag;
					return this.finishToken(offset, TokenType.EndTag);
				}
				if (this.stream.skipWhitespace()) {
					// white space is not valid here
					return this.finishToken(offset, TokenType.Whitespace, 'Tag name must directly follow the open bracket.');
				}
				this.state = ScannerState.WithinEndTag;
				this.stream.advanceUntilChar(RAN);
				if (offset < this.stream.pos()) {
					return this.finishToken(offset, TokenType.Unknown, 'End tag name expected.');
				}
				return this.internalScan();
			case ScannerState.WithinEndTag:
				if (this.stream.skipWhitespace()) {
					// white space is valid here
					return this.finishToken(offset, TokenType.Whitespace);
				}
				if (this.stream.advanceIfChar(RAN)) {
					// >
					this.state = ScannerState.WithinContent;
					return this.finishToken(offset, TokenType.EndTagClose);
				}
				errorMessage = 'Closing bracket expected.';
				break;
			case ScannerState.AfterOpeningStartTag:
				this.lastTag = this.nextElementName();
				this.lastTypeValue = null;
				this.lastAttributeName = null;
				if (this.lastTag.length > 0) {
					this.hasSpaceAfterTag = false;
					this.state = ScannerState.WithinTag;
					return this.finishToken(offset, TokenType.StartTag);
				}
				if (this.stream.skipWhitespace()) {
					// white space is not valid here
					return this.finishToken(offset, TokenType.Whitespace, 'Tag name must directly follow the open bracket.');
				}
				this.state = ScannerState.WithinTag;
				this.stream.advanceUntilChar(RAN);
				if (offset < this.stream.pos()) {
					return this.finishToken(offset, TokenType.Unknown, 'Start tag name expected.');
				}
				return this.internalScan();
			case ScannerState.WithinTag:
				if (this.stream.skipWhitespace()) {
					this.hasSpaceAfterTag = true; // remember that we have seen a whitespace
					return this.finishToken(offset, TokenType.Whitespace);
				}
				if (this.hasSpaceAfterTag) {
					this.lastAttributeName = this.nextAttributeName();
					if (this.lastAttributeName.length > 0) {
						this.state = ScannerState.AfterAttributeName;
						this.hasSpaceAfterTag = false;
						return this.finishToken(offset, TokenType.AttributeName);
					}
				}
				if (this.stream.advanceIfChars([FSL, RAN])) {
					// />
					this.state = ScannerState.WithinContent;
					return this.finishToken(offset, TokenType.StartTagSelfClose);
				}
				if (this.stream.advanceIfChar(RAN)) {
					// >
					if (this.lastTag === 'script') {
						if (this.lastTypeValue && this.htmlScriptContents[this.lastTypeValue]) {
							// stay in html
							this.state = ScannerState.WithinContent;
						} else {
							this.state = ScannerState.WithinScriptContent;
						}
					} else if (this.lastTag === 'style') {
						this.state = ScannerState.WithinStyleContent;
					} else if (this.lastTag === 'config') {
						this.state = ScannerState.WithinConfigContent;
					} else {
						this.state = ScannerState.WithinContent;
					}
					return this.finishToken(offset, TokenType.StartTagClose);
				}
				this.stream.advance(1);
				return this.finishToken(offset, TokenType.Unknown, 'Unexpected character in tag.');
			case ScannerState.AfterAttributeName:
				if (this.stream.skipWhitespace()) {
					this.hasSpaceAfterTag = true;
					return this.finishToken(offset, TokenType.Whitespace);
				}

				if (this.stream.advanceIfChar(EQS)) {
					this.state = ScannerState.BeforeAttributeValue;
					return this.finishToken(offset, TokenType.DelimiterAssign);
				}
				this.state = ScannerState.WithinTag;
				return this.internalScan(); // no advance yet - jump to WithinTag
			case ScannerState.BeforeAttributeValue:
				if (this.stream.skipWhitespace()) {
					return this.finishToken(offset, TokenType.Whitespace);
				}
				/* eslint-disable-next-line */
				const attributeValue = this.stream.advanceIfRegExp(/^[^\s"'`=<>\/]+/);
				if (attributeValue.length > 0) {
					if (this.lastAttributeName === 'type') {
						this.lastTypeValue = attributeValue;
					}
					this.state = ScannerState.WithinTag;
					this.hasSpaceAfterTag = false;
					return this.finishToken(offset, TokenType.AttributeValue);
				}
				// eslint-disable-next-line no-case-declarations
				const ch = this.stream.peekChar();
				if (ch === SQO || ch === DQO) {
					this.stream.advance(1); // consume quote
					if (this.stream.advanceUntilChar(ch)) {
						this.stream.advance(1); // consume quote
					}
					if (this.lastAttributeName === 'type') {
						this.lastTypeValue = this.stream.getSource().substring(offset + 1, this.stream.pos() - 1);
					}
					this.state = ScannerState.WithinTag;
					this.hasSpaceAfterTag = false;
					return this.finishToken(offset, TokenType.AttributeValue);
				}
				this.state = ScannerState.WithinTag;
				this.hasSpaceAfterTag = false;
				return this.internalScan(); // no advance yet - jump to WithinTag
			case ScannerState.WithinScriptContent:
				// see http://stackoverflow.com/questions/14574471/how-do-browsers-parse-a-script-tag-exactly
				// eslint-disable-next-line no-case-declarations
				let scriptState = 1;
				while (!this.stream.eos()) {
					const match = this.stream.advanceIfRegExp(/<!--|-->|<\/?script\s*\/?>?/i);
					if (match.length === 0) {
						this.stream.goToEnd();
						return this.finishToken(offset, TokenType.Script);
					} else if (match === '<!--') {
						if (scriptState === 1) {
							scriptState = 2;
						}
					} else if (match === '-->') {
						scriptState = 1;
					} else if (match[1] !== '/') {
						// <script
						if (scriptState === 2) {
							scriptState = 3;
						}
					} else {
						// </script
						if (scriptState === 3) {
							scriptState = 2;
						} else {
							this.stream.goBack(match.length); // to the beginning of the closing tag
							break;
						}
					}
				}
				this.state = ScannerState.WithinContent;
				if (offset < this.stream.pos()) {
					return this.finishToken(offset, TokenType.Script);
				}
				return this.internalScan(); // no advance yet - jump to content
			case ScannerState.WithinStyleContent:
				this.stream.advanceUntilRegExp(/<\/style/i);
				this.state = ScannerState.WithinContent;
				if (offset < this.stream.pos()) {
					return this.finishToken(offset, TokenType.Styles);
				}
				return this.internalScan(); // no advance yet - jump to content
			case ScannerState.WithinConfigContent:
				this.stream.advanceUntilRegExp(/<\/config/i);
				this.state = ScannerState.WithinContent;
				if (offset < this.stream.pos()) {
					return this.finishToken(offset, TokenType.Config);
				}
				return this.internalScan(); // no advance yet - jump to content
			default:
				break;
		}
		
		this.stream.advance(1);
		this.state = ScannerState.WithinContent;
		return this.finishToken(offset, TokenType.Unknown, errorMessage);
	}
}