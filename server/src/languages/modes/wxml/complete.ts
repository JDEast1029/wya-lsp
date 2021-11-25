import { CompletionItem, CompletionItemKind, InsertTextFormat, Position, Range, TextEdit } from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';
import * as emmet from 'vscode-emmet-helper';
import { ScannerState, TokenType } from '../../../parser/scanner/constants';
import { Scanner } from '../../../parser/scanner/Scanner';
import { IWXMLDocument } from '../../../parser/wxml/WXMLParser';
import { WXMLDataManager } from '../../completion/WXMLDataManager';
import { generateDocumentation } from '../../completion/WXMLDataProvider';
import { EVENT_PREFIX_LIST, WXML_GRAMMARS } from '../../completion/data/wxmlData';

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

const isWhiteSpace = (s: string): boolean => {
	return /^\s*$/.test(s);
};

const isFollowedBy = (s: string, offset: number, initialState: ScannerState, expectedToken: TokenType) => {
	const scanner = new Scanner(s, offset, initialState);
	let token = scanner.scan();
	while (token === TokenType.Whitespace) {
		token = scanner.scan();
	}
	return token === expectedToken;
};

const getWordStart = (s: string, offset: number, limit: number): number => {
	while (offset > limit && !isWhiteSpace(s[offset - 1])) {
		offset--;
	}
	return offset;
};

const getWordEnd = (s: string, offset: number, limit: number): number => {
	while (offset < limit && !isWhiteSpace(s[offset])) {
		offset++;
	}
	return offset;
};

const normalizeAttributeName = (attr: string): string => {
	let result = attr;

	const eventPrefix = EVENT_PREFIX_LIST.find((prefix) => attr.startsWith(prefix));
	if (eventPrefix) {
		const execArray = new RegExp(`^${eventPrefix}:?`).exec(attr);
		const eventName = execArray ? execArray[0] : '';
		result = attr.slice(eventName.length);
	}

	return result;
};
export const doComplete = (document: TextDocument, wxmlDocument: IWXMLDocument, position: Position, dataManager: WXMLDataManager): CompletionItem[] => {
	const dataProviders = dataManager.getDataProviders();
	const offset =  document.offsetAt(position);
	const node = wxmlDocument.findNodeBefore(offset);
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
		const node = wxmlDocument.findNodeBefore(offset);
		return new Set(node.attributeNames.map(normalizeAttributeName));
	};

	const collectOpenTagSuggestions = (startPos: number, endPos: number): CompletionItem[] => {
		const items: CompletionItem[] = [];
		dataProviders.forEach((provider) => {
			provider.provideTags().forEach(tag => {
				const insertText = tag.name;
				const range = getReplaceRange(startPos, endPos);
				const priority = provider.getId() === 'mc' ? Priority.Library : Priority.Framework;
				items.push({
					label: insertText,
					kind: CompletionItemKind.Property,
					filterText: insertText,
					documentation: generateDocumentation(tag, undefined, true),
					insertTextFormat: InsertTextFormat.PlainText,
					sortText: priority + insertText,
					textEdit: TextEdit.replace(range, insertText),
				});
			});
		});
		return items;
	};

	const collectCloseTagSuggestions = (startPos: number, endPos: number): CompletionItem[] => {
		const range = getReplaceRange(startPos, endPos);
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
			return {
				label: insertText,
				kind: CompletionItemKind.Text,
				insertTextFormat: InsertTextFormat.Snippet,
				sortText: index + insertText,
				textEdit: TextEdit.replace(range, insertText + '>')
			};
		});
	};

	const collectTagSuggestions = (tagStart: number, tagEnd: number): CompletionItem[] => {
		return [
			...collectOpenTagSuggestions(tagStart, tagEnd), 
			...collectCloseTagSuggestions(tagStart, tagEnd)
		];
	};

	const collectSuggestAttributeName = (startPos: number, endPos: number): CompletionItem [] => {
		const usedAttributes = getUsedAttributes(startPos);
		const currentTag = scanner.lastTag;
		const attributeName = scanner.getTokenText();
		const execRegExp = new RegExp(`^(${EVENT_PREFIX_LIST.join('|')}):?`);
		const execArray = execRegExp.exec(attributeName || '');
		const filterPrefix = execArray ? execArray[0] : 'bind:';
		const value = isFollowedBy(text, endPos, ScannerState.AfterAttributeName, TokenType.DelimiterAssign) ? '' : '="$1"';

		const items: CompletionItem[] = [];

		EVENT_PREFIX_LIST.forEach(eventPrefix => {
			const insertText = eventPrefix + ':';
			const range = getReplaceRange(startPos, endPos);
			items.push({
				label: insertText,
				kind: CompletionItemKind.Value,
				filterText: insertText,
				insertTextFormat: InsertTextFormat.Snippet,
				sortText: Priority.FrameworkGrammar + insertText,
				textEdit: TextEdit.replace(range, insertText),
			});
		});
		WXML_GRAMMARS.forEach(wxmlGrammar => {
			let grammarValue = value;
			if (value && wxmlGrammar.valueSet === 'block') {
				grammarValue = value.replace(/\$1/, '{{ $1 }}');
			}
			const range = getReplaceRange(startPos, endPos);
			items.push({
				label: wxmlGrammar.name,
				kind: CompletionItemKind.Value,
				filterText: wxmlGrammar.name,
				insertTextFormat: InsertTextFormat.Snippet,
				sortText: Priority.FrameworkGrammar + wxmlGrammar.name,
				textEdit: TextEdit.replace(range, wxmlGrammar.name + grammarValue),
			});
		});
		dataProviders.forEach(provider => {
			const isMc = provider.getId() === 'mc';
			const propPriority: Priority = isMc ? Priority.LibraryProp : Priority.FrameworkProp;
			const eventPriority: Priority = isMc ? Priority.LibraryEvent : Priority.FrameworkEvent;
			
			provider.provideAttributes(currentTag).forEach(attr => {
				if ([...usedAttributes].includes(attr.name)) return;
				const range = getReplaceRange(startPos, endPos);
				let attrValue = value;
				const attrValues = provider.provideValues(currentTag, attr.name);
				if (attrValue && attrValues.length) {
					const valueSchema = '$' + `{1|${attrValues.map(({name}) => name).join(',')}|}`; // 初始提供可选值
					attrValue = attrValue.replace(/\$1/, attr.valueSet === "boolean" ? `{{ ${valueSchema} }}` : `${valueSchema}`);
				}
				
				items.push({
					label: attr.name,
					kind: CompletionItemKind.Value,
					filterText: attr.name,
					insertTextFormat: InsertTextFormat.Snippet,
					documentation: generateDocumentation(attr, undefined, true),
					sortText: propPriority + attr.name,
					textEdit: TextEdit.replace(range, attr.name + attrValue)
				});
			});
			provider.provideEvents(currentTag).forEach(event => {
				if ([...usedAttributes].includes(event.name)) return;
				const insertText = filterPrefix + event.name;
				const range = getReplaceRange(startPos, endPos);
				items.push({
					label: insertText,
					kind: CompletionItemKind.Function,
					filterText: insertText,
					insertTextFormat: InsertTextFormat.Snippet,
					documentation: generateDocumentation(event, undefined, true),
					sortText: eventPriority + insertText,
					textEdit: TextEdit.replace(range, insertText + value)
				});
			});
		});
		return items;
	};

	const collectAttributeValueSuggestions = (attributeName: string, startPos: number, endPos: number = offset): CompletionItem [] => {
		if (/^wx:/.test(attributeName)) return [];

		const currentTag = scanner.lastTag;
		let range: Range;
		let addQuotes: boolean;
		if (endPos && offset > startPos && offset <= endPos && text[startPos] === '"') {
			// inside attribute
			if (endPos > offset && text[endPos - 1] === '"') {
				endPos--;
			}
			const wsBefore = getWordStart(text, offset, startPos + 1);
			const wsAfter = getWordEnd(text, offset, endPos);
			range = getReplaceRange(wsBefore, wsAfter);
			addQuotes = false;
		} 
		else {
			range = getReplaceRange(startPos, endPos);
			addQuotes = true;
		}

		const items: CompletionItem[] = [];
		dataProviders.forEach(provider => {
			provider.provideValues(currentTag, attributeName).forEach(value => {
				const insertText = addQuotes ? '"' + value.name + '"' : value.name;
				items.push({
					label: value.name,
					kind: CompletionItemKind.Unit,
					filterText: insertText,
					documentation: generateDocumentation(value, undefined, true),
					insertTextFormat: InsertTextFormat.Snippet,
					textEdit: TextEdit.replace(range, insertText)
				});
			});
		});

		return items;
	};

	const collectAutoCloseTagSuggestion = (endPos: number, tag: string): CompletionItem[] => {
		const pos = document.positionAt(endPos);
		return [{
			label: '</' + tag + '>',
			kind: CompletionItemKind.Property,
			filterText: '</' + tag + '>',
			textEdit: TextEdit.insert(pos, '$0</' + tag + '>'),
			insertTextFormat: InsertTextFormat.Snippet
		}];
	};

	const getLineIndent = (offset: number) => {
		let start = offset;
		while (start > 0) {
			const ch = text.charAt(start - 1);
			if ('\n\r'.indexOf(ch) >= 0) {
				return text.substring(start, offset);
			}
			if (!isWhiteSpace(ch)) {
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

	let currentTag = '';
	let currentAttributeName = '';

	while (token !== TokenType.EOS && scanner.tokenOffset <= offset) {
		switch (token) {
			case TokenType.StartTagOpen:
				if (offset === scanner.getTokenEnd()) {
					const endPos = scanNextForEndPos(TokenType.StartTag);
					return collectTagSuggestions(offset, endPos); 
				}
				break;
			case TokenType.StartTag:
				if (scanner.tokenOffset <= offset && offset <= scanner.getTokenEnd()) {
					return collectOpenTagSuggestions(scanner.tokenOffset, scanner.getTokenEnd());
				}
				currentTag = scanner.getTokenText();
				break; 
			case TokenType.StartTagClose:
				if (offset <= scanner.getTokenEnd()) {
					if (currentTag) {
						return collectAutoCloseTagSuggestion(scanner.getTokenEnd(), currentTag);
					}
				}
				break;
			case TokenType.AttributeName:
				if (scanner.tokenOffset <= offset && offset <= scanner.getTokenEnd()) {
					return collectSuggestAttributeName(scanner.tokenOffset, scanner.getTokenEnd());
				}
				currentAttributeName = scanner.getTokenText();
				break;
			case TokenType.DelimiterAssign:
				if (scanner.getTokenEnd() === offset) {
					return collectAttributeValueSuggestions(currentAttributeName, scanner.getTokenEnd());
				}
				break;
			case TokenType.AttributeValue:
				if (scanner.tokenOffset <= offset && offset <= scanner.getTokenEnd()) {
					if (currentAttributeName === 'style') {
						// TODO: {} => VSCodeEmmetConfig
						const emmetCompletions = emmet.doComplete(document, position, 'css', {});
						return emmetCompletions?.items ?? [];
					} else {
						return collectAttributeValueSuggestions(
							currentAttributeName,
							scanner.tokenOffset,
							scanner.getTokenEnd()
						);
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
							return collectAttributeValueSuggestions(currentAttributeName, scanner.getTokenEnd());
						case ScannerState.AfterOpeningEndTag:
							return collectCloseTagSuggestions(scanner.tokenOffset - 1, offset);
					}
				}
				break;
			case TokenType.EndTagOpen:
				if (offset <= scanner.getTokenEnd()) {
					const endPos = scanNextForEndPos(TokenType.EndTag);
					return collectCloseTagSuggestions(offset - 1, endPos);
				}
				break;
			case TokenType.EndTag:
				if (offset <= scanner.getTokenEnd()) {
					let start = scanner.tokenOffset - 1;
					while (start >= 0) {
						const ch = text.charAt(start);
						if (ch === '/') {
							return collectCloseTagSuggestions(start, scanner.getTokenEnd());
						} else if (!isWhiteSpace(ch)) {
							break;
						}
						start--;
					}
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
};