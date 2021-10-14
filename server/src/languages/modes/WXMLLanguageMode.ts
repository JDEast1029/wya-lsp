import { ILanguageMode } from './ILanguageMode';
import { CompletionItem, CompletionItemKind, InsertTextFormat } from 'vscode-languageserver-types';
import { CompletionContext, CompletionParams, Range, TextEdit } from 'vscode-languageserver/node';
import { Position, TextDocument } from 'vscode-languageserver-textdocument';
import { IWXMLDocument } from '../../parser/wxml/WXMLParser';
import { LanguageModeCache } from '../LanguageModeCache';
import { WXML_TAGS, CONDITION_GRAMMARS, LIST_GRAMMARS } from '../config/wxml';
import { MC_TAGS_MAP, MC_COMMON_PROPS } from '../config/mc-tags';
import { Scanner } from '../../parser/scanner/Scanner';
import { TokenType, ScannerState } from '../../parser/scanner/constants';

export class WXMLLanguageMode implements ILanguageMode {
	languageModeCache: LanguageModeCache<IWXMLDocument>;
	wxmlDocument!: IWXMLDocument;
	currentTag = '';

	constructor(languageModeCache: LanguageModeCache<IWXMLDocument>) {
		this.languageModeCache = languageModeCache;
	}

	doComplete(document: TextDocument, position: Position, context: CompletionContext | undefined): CompletionItem[] {
		const offset = document.offsetAt(position);

		this.wxmlDocument = this.languageModeCache.refreshAndGetMode(document);
		const node = this.wxmlDocument.findNodeBefore(offset);
		const text = document.getText();
		const scanner = new Scanner(text, node.start);
		let token =scanner.scan();

		const getReplaceRange = (start: number, end: number): Range => {
			return Range.create(
				document.positionAt(start),
				document.positionAt(end),
			);
		};

		const collectSuggestOpenTags = (startPos: number, endPos: number): CompletionItem[] => {
			return WXML_TAGS.map((tag) => {
				const insertText = tag;
				const range = getReplaceRange(startPos, endPos);
				return {
					label: insertText,
					kind: CompletionItemKind.Text,
					filterText: insertText,
					insertTextFormat: InsertTextFormat.Snippet,
					textEdit: TextEdit.replace(range, insertText)
				};
			});
		};

		const collectSuggestCloseTags = (startPos: number, endPos: number): CompletionItem[] => {
			const tags = [];
			let currentNode = node;
			if (currentNode.tag) {
				tags.push(currentNode.tag);
			}
			while (currentNode.parent && currentNode.parent.tag !== 'template') {
				tags.push(currentNode.parent.tag);
				currentNode = currentNode.parent;
			}
			return tags.map((tag, index) => {
				const insertText = '/' + tag;
				const range = getReplaceRange(startPos, endPos);
				return {
					label: insertText,
					kind: CompletionItemKind.Text,
					insertTextFormat: InsertTextFormat.Snippet,
					sortText: index + insertText,
					textEdit: TextEdit.replace(range, insertText + '>')
				};
			});
		};

		const collectSuggestTags = (startPos: number, endPos: number): CompletionItem[] => {
			return [
				...collectSuggestOpenTags(startPos, endPos), 
				...collectSuggestCloseTags(startPos, endPos)
			];
		};

		const collectSuggestAttributeName = (startPos: number, endPos: number): CompletionItem [] => {
			const currentTag = scanner.lastTag;
			const props = [...(MC_TAGS_MAP.get(currentTag)?.props ?? []), ...MC_COMMON_PROPS];
			const events = MC_TAGS_MAP.get(currentTag)?.event ?? [];
			const attributeName = scanner.lastAttributeName;
			const execArray = /^(wx:|bind:?)/.exec(attributeName || '');
			const filterPrefix = execArray ? execArray[0] : '';

			const value = this.isFollowedBy(text, endPos, ScannerState.AfterAttributeName, TokenType.DelimiterAssign)
			? ''
			: '="$1"';

			let items = [...props, ...CONDITION_GRAMMARS, ...LIST_GRAMMARS];
			let start = startPos;

			if (filterPrefix === 'wx:') {
				// 条件和列表语法的提示
				items = [...CONDITION_GRAMMARS, ...LIST_GRAMMARS];
			} else if (filterPrefix.includes('bind')) {
				// 方法的提示
				items = [...events];
				start = startPos + filterPrefix.length;
			}

			return items.map((prop) => {
				const insertText = prop;
				const range = getReplaceRange(start, endPos);
				return {
					label: insertText,
					kind: CompletionItemKind.Text,
					filterText: insertText,
					insertTextFormat: InsertTextFormat.Snippet,
					textEdit: TextEdit.replace(range, insertText + value)
				};
			});
		};

		const scanNextForEndPos = (nextToken: TokenType): number => {
			if (offset === scanner.getTokenEnd()) {
				token = scanner.scan();
				if (token === nextToken && scanner.tokenOffset === offset) {
				return scanner.getTokenEnd();
				}
			}
			return offset;
		};

		let currentTag: string;
		let currentAttributeName: string;

		while (token !== TokenType.EOS && scanner.tokenOffset <= offset) {
			switch (token) {
				case TokenType.StartTagOpen:
					if (offset === scanner.getTokenEnd()) {
						const endPos = scanNextForEndPos(TokenType.StartTag);
						return collectSuggestTags(offset, endPos); 
					}
					break;
				case TokenType.StartTag: 
				case TokenType.EndTag:
					if (scanner.tokenOffset <= offset && offset <= scanner.getTokenEnd()) {
						return collectSuggestOpenTags(scanner.tokenOffset, scanner.getTokenEnd());
					}
					currentTag = scanner.getTokenText();
					break;
				case TokenType.EndTagOpen:
					if (offset <= scanner.getTokenEnd()) {
						const endPos = scanNextForEndPos(TokenType.EndTag);
						return collectSuggestCloseTags(offset - 1, endPos);
					}
					break;
				case TokenType.Whitespace:
					if (offset <= scanner.getTokenEnd()) {
						switch (scanner.state) {
							case ScannerState.WithinTag:
							case ScannerState.AfterAttributeName:
								return collectSuggestAttributeName(offset, offset);
							default:
								break;
						}
					}
					break;
				case TokenType.AttributeName:
					if (scanner.tokenOffset <= offset && offset <= scanner.getTokenEnd()) {
						return collectSuggestAttributeName(scanner.tokenOffset, scanner.getTokenEnd());
					}
					currentAttributeName = scanner.getTokenText();
					break;
				default:
					break;
			}
			token = scanner.scan();
		}
		return [];
	}

	private isFollowedBy(s: string, offset: number, initialState: ScannerState, expectedToken: TokenType) {
		const scanner = new Scanner(s, offset, initialState);
		let token = scanner.scan();
		while (token === TokenType.Whitespace) {
			token = scanner.scan();
		}
		return token === expectedToken;
	}
}