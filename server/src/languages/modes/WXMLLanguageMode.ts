import { ILanguageMode } from './ILanguageMode';
import { CompletionItem, CompletionItemKind, InsertTextFormat } from 'vscode-languageserver-types';
import { CompletionContext, CompletionParams, Range, TextEdit } from 'vscode-languageserver/node';
import { Position, TextDocument } from 'vscode-languageserver-textdocument';
import * as emmet from 'vscode-emmet-helper';
import { IWXMLDocument } from '../../parser/wxml/WXMLParser';
import { LanguageModeCache } from '../LanguageModeCache';
import { WXML_TAGS_MAP, WXML_COMMON_PROPS, CONDITION_GRAMMARS, LIST_GRAMMARS, COMMON_EVENT_GRAMMARS, EVENT_PREFIX_LIST } from '../config/wxml';
import { MC_TAGS_MAP, MC_COMMON_PROPS } from '../config/mc-tags';
import { Scanner } from '../../parser/scanner/Scanner';
import { TokenType, ScannerState } from '../../parser/scanner/constants';

const enum Priority {
	UserCode,
	Library,
	LibraryProp,
	LibraryEvent,
	Framework,
	FrameworkProp,
	FrameworkEvent,
	FrameworkGrammar,
	Platform
}
interface PropItem {
	prop: string, 
	priority: Priority
}
interface EventItem {
	event: string, 
	priority: Priority
}

export class WXMLLanguageMode implements ILanguageMode {
	languageModeCache: LanguageModeCache<IWXMLDocument>;
	wxmlDocument!: IWXMLDocument;
	currentTag = '';

	constructor(languageModeCache: LanguageModeCache<IWXMLDocument>) {
		this.languageModeCache = languageModeCache;
	}

	doComplete(document: TextDocument, position: Position, context: CompletionContext | undefined): CompletionItem[] {
		const offset =  document.offsetAt(position);

		this.wxmlDocument = this.languageModeCache.refreshAndGetMode(document);
		const node = this.wxmlDocument.findNodeBefore(offset);
		const text = document.getText();
		const scanner = new Scanner(text, node.start);
		let token = scanner.scan();

		const getReplaceRange = (startPos: number, endPos: number): Range => {
			if (startPos > offset) { startPos = offset; }
			return Range.create(
				document.positionAt(startPos),
				document.positionAt(endPos),
			);
		};

		const getUsedAttributes = (offset: number): Set<string> => {
			const node = this.wxmlDocument.findNodeBefore(offset);
			return new Set(node.attributeNames.map(this.normalizeAttributeName));
		};

		const collectSuggestOpenTags = (startPos: number, endPos: number): CompletionItem[] => {
			const creator = (priority: Priority) => (tag: string) => {
				const insertText = tag;
				const range = getReplaceRange(startPos, endPos);
				return {
					label: insertText,
					kind: CompletionItemKind.Text,
					filterText: insertText,
					insertTextFormat: InsertTextFormat.Snippet,
					sortText: priority + insertText,
					textEdit: TextEdit.replace(range, insertText)
				};
			};
			let items: CompletionItem[] = [...WXML_TAGS_MAP.keys()].map(creator(Priority.Framework));
			items = items.concat([...MC_TAGS_MAP.keys()].map(creator(Priority.Library)));
			return items;
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
			const usedAttributes = getUsedAttributes(startPos);
			const currentTag = scanner.lastTag;
			const isMc = MC_TAGS_MAP.has(currentTag);
			let props: string[] = [];
			let events: string[] = [];
			let propPriority: Priority;
			let eventPriority: Priority;
			if (isMc) {
				props = MC_TAGS_MAP.get(currentTag)?.props ?? [];
				props = props.concat(MC_COMMON_PROPS);
				events = MC_TAGS_MAP.get(currentTag)?.events ?? [];
				propPriority = Priority.LibraryProp;
				eventPriority = Priority.LibraryEvent;
			} else {
				props = WXML_TAGS_MAP.get(currentTag)?.props ?? [];
				props = props.concat(WXML_COMMON_PROPS);
				events = WXML_TAGS_MAP.get(currentTag)?.events ?? [];
				events = events.concat(COMMON_EVENT_GRAMMARS);
				propPriority = Priority.FrameworkProp;
				eventPriority = Priority.FrameworkEvent;
			}
			const attributeName = scanner.getTokenText();
			const execRegExp = new RegExp(`^(wx:|(${EVENT_PREFIX_LIST.join('|')}):?)`);
			const execArray = execRegExp.exec(attributeName || '');
			const filterPrefix = execArray ? execArray[0] : '';

			const value = this.isFollowedBy(text, endPos, ScannerState.AfterAttributeName, TokenType.DelimiterAssign) ? '' : '="$1"';

			const eventPrefixResult = EVENT_PREFIX_LIST.map((event) => {
				const insertText = event + ':';
				const range = getReplaceRange(startPos, endPos);
				return {
					label: insertText,
					kind: CompletionItemKind.Event,
					filterText: insertText,
					insertTextFormat: InsertTextFormat.Snippet,
					sortText: Priority.FrameworkGrammar + insertText,
					textEdit: TextEdit.replace(range, insertText),
				};
			});

			const creator = (priority: Priority, eventPrefix?: string) => (text: string) => {
				const insertText = `${eventPrefix ? eventPrefix + ':' : ''}${text}`;
				const range = getReplaceRange(start, endPos);
				return {
					label: insertText,
					kind: itemKind || CompletionItemKind.Property,
					filterText: insertText,
					insertTextFormat: InsertTextFormat.Snippet,
					sortText: priority + insertText,
					textEdit: TextEdit.replace(range, insertText + value)
				};
			};

			let items: CompletionItem[] = [];
			let start = startPos;
			let itemKind: CompletionItemKind;
			const propsItems: CompletionItem[] = props.filter((prop) => ![...usedAttributes].includes(prop)).map(creator(propPriority));
			const wxmlGrammarItems: CompletionItem[] = [...CONDITION_GRAMMARS, ...LIST_GRAMMARS].filter((grammar) => ![...usedAttributes].includes(grammar)).map(creator(Priority.FrameworkGrammar));
			const eventItems: CompletionItem[] = events.filter((event) => ![...usedAttributes].includes(event)).map(creator(eventPriority, 'bind'));
			items = [...propsItems, ...eventItems, ...wxmlGrammarItems];
			const eventPrefix = EVENT_PREFIX_LIST.find((event) => filterPrefix.startsWith(event)); // 事件的前缀

			if (filterPrefix === 'wx:') {
				// 条件和列表语法的提示
				items = wxmlGrammarItems;
				itemKind = CompletionItemKind.Keyword;
			} else if (eventPrefix) {
				// 方法的提示
				items = filterPrefix.startsWith('bind') 
					? events.filter((event) => ![...usedAttributes].includes(event)).map(creator(eventPriority, eventPrefix)) 
					: COMMON_EVENT_GRAMMARS.filter((event) => ![...usedAttributes].includes(event)).map(creator(Priority.FrameworkEvent, eventPrefix));
				start = startPos + filterPrefix.length;
				itemKind = CompletionItemKind.Function;
			}

			return [...items, ...eventPrefixResult];
		};

		const collectSuggestAttributeValue = (attributeName: string, startPos: number, endPos: number = offset): CompletionItem [] => {
			if (/^wx:/.test(attributeName)) return [];

			const currentTag = scanner.lastTag;
			const isMc = MC_TAGS_MAP.has(currentTag);
			let attrOptional: string[] = [];
			if (isMc) {
				const comp = MC_TAGS_MAP.get(currentTag);
				attrOptional = comp?.propsOptional.get(attributeName) ?? [];
			} else {
				const comp = WXML_TAGS_MAP.get(currentTag);
				attrOptional = comp?.propsOptional.get(attributeName) ?? [];
			}

			let range: Range;
			let addQuotes: boolean;
			if (endPos && offset > startPos && offset <= endPos && text[startPos] === '"') {
				// inside attribute
				if (endPos > offset && text[endPos - 1] === '"') {
					endPos--;
				}
				const wsBefore = this.getWordStart(text, offset, startPos + 1);
				const wsAfter = this.getWordEnd(text, offset, endPos);
				range = getReplaceRange(wsBefore, wsAfter);
				addQuotes = false;
			} 
			else {
				range = getReplaceRange(startPos, endPos);
				addQuotes = true;
			}

			return attrOptional.map((value) => {
				const insertText = addQuotes ? '"' + value + '"' : value;
				return {
					label: insertText,
					kind: CompletionItemKind.Value,
					filterText: insertText,
					insertTextFormat: InsertTextFormat.Snippet,
					textEdit: TextEdit.replace(range, insertText)
				};
			});
		};

		const getLineIndent = (offset: number) => {
			let start = offset;
			while (start > 0) {
				const ch = text.charAt(start - 1);
				if ('\n\r'.indexOf(ch) >= 0) {
					return text.substring(start, offset);
				}
				if (!this.isWhiteSpace(ch)) {
					return null;
				}
				start--;
			}
			return text.substring(0, offset);
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
		let currentAttributeName = '';

		while (token !== TokenType.EOS && scanner.tokenOffset <= offset) {
			switch (token) {
				case TokenType.StartTagOpen:
					if (offset === scanner.getTokenEnd()) {
						const endPos = scanNextForEndPos(TokenType.StartTag);
						return collectSuggestTags(offset, endPos); 
					}
					break;
				case TokenType.StartTag:
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
				case TokenType.EndTag:
					if (offset <= scanner.getTokenEnd()) {
						let start = scanner.tokenOffset - 1;
						while (start >= 0) {
							const ch = text.charAt(start);
							if (ch === '/') {
								return collectSuggestCloseTags(start, scanner.getTokenEnd());
							} else if (!this.isWhiteSpace(ch)) {
								break;
							}
							start--;
						}
					}
					break;
				case TokenType.Whitespace:
					if (offset <= scanner.getTokenEnd()) {
						switch (scanner.state) {
							case ScannerState.WithinTag:
							case ScannerState.AfterAttributeName:
								return collectSuggestAttributeName(offset, offset);
							case ScannerState.BeforeAttributeValue:
								return collectSuggestAttributeValue(currentAttributeName, scanner.getTokenEnd());
						}
					}
					break;
				case TokenType.AttributeName:
					if (scanner.tokenOffset <= offset && offset <= scanner.getTokenEnd()) {
						return collectSuggestAttributeName(scanner.tokenOffset, scanner.getTokenEnd());
					}
					currentAttributeName = scanner.getTokenText();
					break;
				case TokenType.AttributeValue:
					if (scanner.tokenOffset <= offset && offset <= scanner.getTokenEnd()) {
						if (currentAttributeName === 'style') {
							// TODO: {} => VSCodeEmmetConfig
							const emmetCompletions = emmet.doComplete(document, position, 'css', {});
							return emmetCompletions?.items ?? [];
						} else {
							return collectSuggestAttributeValue(
								currentAttributeName,
								scanner.tokenOffset,
								scanner.getTokenEnd()
							);
						}
					}
					break;
				case TokenType.DelimiterAssign:
					if (scanner.getTokenEnd() === offset) {
						return collectSuggestAttributeValue(currentAttributeName, scanner.getTokenEnd());
					}
					break;
				case TokenType.Content:
					if (offset <= scanner.getTokenEnd()) {
						// TODO: {} => VSCodeEmmetConfig
						const emmetCompletions = emmet.doComplete(document, position, 'html', {});
						return emmetCompletions?.items ?? [];
					}
					break;
				default:
					if (offset <= scanner.getTokenEnd()) {
						return [];
					}
					break;
			}
			token = scanner.scan();
		}
		return [];
	}

	private isWhiteSpace(s: string): boolean {
		return /^\s*$/.test(s);
	}

	private isFollowedBy(s: string, offset: number, initialState: ScannerState, expectedToken: TokenType) {
		const scanner = new Scanner(s, offset, initialState);
		let token = scanner.scan();
		while (token === TokenType.Whitespace) {
			token = scanner.scan();
		}
		return token === expectedToken;
	}

	private getWordStart(s: string, offset: number, limit: number): number {
		while (offset > limit && !this.isWhiteSpace(s[offset - 1])) {
			offset--;
		}
		return offset;
	}

	private getWordEnd(s: string, offset: number, limit: number): number {
		while (offset < limit && !this.isWhiteSpace(s[offset])) {
			offset++;
		}
		return offset;
	}

	private normalizeAttributeName(attr: string): string {
		let result = attr;

		const eventPrefix = EVENT_PREFIX_LIST.find((prefix) => attr.startsWith(prefix));
		if (eventPrefix) {
			const execArray = new RegExp(`^${eventPrefix}:?`).exec(attr);
			const eventName = execArray ? execArray[0] : '';
			result = attr.slice(eventName.length);
		}

		return result;
	}
}