import { Hover, MarkupKind, Position, Range } from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { IWXMLDocument } from '../../../parser/wxml/WXMLParser';
import { WXMLDataManager } from '../../completion/WXMLDataManager';
import { generateDocumentation } from '../../completion/WXMLDataProvider';
import { NULL_HOVER } from '../../../constants';
import { TokenType } from '../../../parser/scanner/constants';
import { Scanner } from '../../../parser/scanner/Scanner';
import { EVENT_PREFIX_LIST } from '../../completion/data/wxmlData';
import { IAttributeData } from './IWXMLLanguageTypes';

const TRIVIAL_TOKEN = [TokenType.StartTagOpen, TokenType.EndTagOpen, TokenType.Whitespace];
const trimQuotes = (s: string) => {
	if (s.length <= 1) {
		return s.replace(/['"]/, '');
	}

	if (s[0] === `'` || s[0] === `"`) {
		s = s.slice(1);
	}

	if (s[s.length - 1] === `'` || s[s.length - 1] === `"`) {
		s = s.slice(0, -1);
	}

	return s;
};

export const doHover =  (document: TextDocument, wxmlDocument: IWXMLDocument, position: Position, dataManager: WXMLDataManager): Hover => {
	const dataProviders = dataManager.getDataProviders();
	const offset =  document.offsetAt(position);
	const node = wxmlDocument.findNodeBefore(offset);
	const text = document.getText();
	if (!node || !node.tag) {
		return NULL_HOVER;
	}

	const inEndTag = node.endTagStart && offset >= node.endTagStart; // <html></ht|ml>
	const startOffset = inEndTag ? node.endTagStart : node.start;
	const scanner = new Scanner(text, startOffset);
	let token = scanner.scan();

	const getTagHover = (currTag: string, range: Range, open: boolean): Hover => {
		for (const provider of dataProviders) {
			let hover: Hover | null = null;

			provider.provideTags().forEach(tag => {
				if (tag.name.toLowerCase() === currTag.toLowerCase()) {
					let markupContent = generateDocumentation(tag, undefined, true);
					if (!markupContent) {
						markupContent = {
							kind: 'plaintext',
							value: ''
						};
					}
					hover = { contents: markupContent, range };
				}
			});

			if (hover) return hover;
		}
		return NULL_HOVER;
	};

	const getAttrHover = (currTag: string, currAttr: string, range: Range): Hover => {
		for (const provider of dataProviders) {
			let hover: Hover | null = null;
			const fn = (attr: IAttributeData) => {
				if (currAttr === attr.name && attr.description) {
					const contentsDoc = generateDocumentation(attr, undefined, true);
					if (contentsDoc) {
						hover = { contents: contentsDoc, range };
					} else {
						hover = null;
					}
				}
			};
			provider.provideAttributes(currTag).forEach(fn);
			provider.provideEvents(currTag).forEach(fn);

			if (hover) return hover;
		}
		return NULL_HOVER;
	};
	const shouldAdvance = () => {
		if (token === TokenType.EOS) {
			return false;
		}
		const tokenEnd = scanner.getTokenEnd();
		if (tokenEnd < offset) {
			return true;
		}

		if (tokenEnd === offset) {
			return TRIVIAL_TOKEN.includes(token);
		}
		return false;
	};

	while (shouldAdvance()) {
		token = scanner.scan();
	}

	if (offset > scanner.getTokenEnd()) {
		return NULL_HOVER;
	}
	const tagRange = {
		start: document.positionAt(scanner.tokenOffset),
		end: document.positionAt(scanner.getTokenEnd())
	};
	switch (token) {
		case TokenType.StartTag:
			return getTagHover(node.tag, tagRange, true);
		case TokenType.EndTag:
			return getTagHover(node.tag, tagRange, false);
		case TokenType.AttributeName:
			// eslint-disable-next-line no-case-declarations
			const attribute = scanner.getTokenText().replace(new RegExp(`^(${EVENT_PREFIX_LIST.join('|')}):?`), '');
			return getAttrHover(node.tag, attribute, tagRange);
	}

	return NULL_HOVER;
};