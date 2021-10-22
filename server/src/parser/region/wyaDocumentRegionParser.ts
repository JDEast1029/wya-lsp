import { Range, TextDocument } from 'vscode-languageserver-textdocument';
import { ILanguageMode } from '../../languages/modes/ILanguageMode';
import { TokenType } from '../scanner/constants';
import { Scanner } from '../scanner/Scanner';

export type RegionType = 'template' | 'script' | 'style' | 'config';
export type LanguageId = 'wya' | 'wxml' | 'javascript' | 'scss' | 'json'

export interface ILanguageRange extends Range {
	languageId: LanguageId;
	attributeValue?: boolean;
}
export interface ILanguageModeRange extends ILanguageRange {
	mode: ILanguageMode;
}
export interface IEmbeddedRegion {
	languageId: LanguageId,
	start: number,
	end: number,
	type: RegionType
}

export const parseWyaDocumentRegions = (document: TextDocument | undefined): IEmbeddedRegion[] => {
	if (!document) return [];
	const regions: IEmbeddedRegion[] = [];
	const text = document.getText();
	const scanner = new Scanner(text);
	let stakes = 0;
	let token = scanner.scan();
	while (token !== TokenType.EOS) {
		switch (token) {
			case TokenType.Styles:
				regions.push({
					languageId: 'scss',
					start: scanner.tokenOffset,
					end: scanner.getTokenEnd(),
					type: 'style'
				});
				break;
			case TokenType.Config:
				regions.push({
					languageId: 'json',
					start: scanner.tokenOffset,
					end: scanner.getTokenEnd(),
					type: 'config'
				});
				break;
			case TokenType.Script:
				regions.push({
					languageId: 'javascript',
					start: scanner.tokenOffset,
					end: scanner.getTokenEnd(),
					type: 'script'
				});
				break;
			case TokenType.StartTag:
				stakes++;
				// eslint-disable-next-line no-case-declarations
				const tagName = scanner.getTokenText();
				if (tagName === 'template' && stakes === 1) {
					const templateRegion = scanTemplateRegion(scanner, text);
					if (templateRegion) {
						regions.push(templateRegion);
					}
				}
				break;
			case TokenType.StartTagSelfClose:
			case TokenType.EndTagClose:
				stakes--;
				break;
		}
		token = scanner.scan();
	}

	return regions;
};

function scanTemplateRegion(scanner: Scanner, text: string): IEmbeddedRegion | null {
	const languageId: LanguageId = 'wxml';

	let token = -1;
	let start = 0;

	// Scan until finding matching template EndTag
	// Also record immediate next StartTagClose to find start
	let unClosedTemplate = 1;
	let lastAttributeName = null;
	while (unClosedTemplate !== 0) {
		// skip parsing on non html syntax, just search terminator
		if (token === TokenType.AttributeValue && languageId !== 'wxml') {
			while (![TokenType.StartTagClose, TokenType.StartTagSelfClose].includes(token)) {
				token = scanner.scan();
			}
			start = scanner.getTokenEnd();

			token = scanner.scanForRegexp(/<\/template>/);
			if (token === TokenType.EOS) {
				return null;
			}

			// scan to `EndTag`, past `</` to `template`
			while (token !== TokenType.EndTag) {
				token = scanner.scan();
			}
			break;
		}

		token = scanner.scan();

		if (token === TokenType.EOS) {
			return null;
		}

		if (start === 0) {
			if (token === TokenType.AttributeName) {
				lastAttributeName = scanner.getTokenText();
			} else if (token === TokenType.StartTagClose) {
				start = scanner.getTokenEnd();
			}
		} else {
			if (token === TokenType.StartTag && scanner.getTokenText() === 'template') {
				unClosedTemplate++;
			} else if (token === TokenType.EndTag && scanner.getTokenText() === 'template') {
				unClosedTemplate--;
				// test leading </template>
				const charPosBeforeEndTag = scanner.tokenOffset - 3;
				if (text[charPosBeforeEndTag] === '\n') {
					break;
				}
			} else if (token === TokenType.Unknown) {
				if (scanner.getTokenText().charAt(0) === '<') {
					const offset = scanner.tokenOffset;
					const unknownText = text.substr(offset, 11);
					if (unknownText === '</template>') {
						unClosedTemplate--;
						// test leading </template>
						if (text[offset - 1] === '\n') {
							return {
								languageId,
								start,
								end: offset,
								type: 'template'
							};
						}
					}
				}
			}
		}
	}

	// In EndTag, find end
	// -2 for </
	const end = scanner.tokenOffset - 2;

	return {
		languageId,
		start,
		end,
		type: 'template'
	};
}