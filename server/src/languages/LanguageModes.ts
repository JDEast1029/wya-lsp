import { IEmbeddedRegion, LanguageId, parseWyaDocumentRegions } from '../parser/region/WyaDocumentRegionParser';
import { ILanguageMode } from './modes/ILanguageMode';
import { JSONLanguageMode } from './modes/JSONLanguageMode';
import { WXMLLanguageMode } from './modes/WXMLLanguageMode';
import { LanguageModeCache } from './LanguageModeCache';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { CompletionContext, Position } from 'vscode-languageserver/node';
import { WyaDocumentRegions, getWyaDocumentRegions } from '../parser/region/WyaDocumentRegions';

export const nullMode: ILanguageMode = {
	doComplete: () => []
};

export class LanguageModes {
	private modes: { [k in LanguageId]: ILanguageMode } = {
		wxml: nullMode,
		javascript: nullMode,
		scss: nullMode,
		json: nullMode,
	};
	languageModeCache: LanguageModeCache<WyaDocumentRegions>;

	constructor() {
		this.languageModeCache = new LanguageModeCache<WyaDocumentRegions>(10, 60, document => getWyaDocumentRegions(document));

		// this.modes['wxml'] = new JSONLanguageMode();
		// this.modes['javascript'] = new JSONLanguageMode();
		// this.modes['scss'] = new JSONLanguageMode();
		this.modes['json'] = new JSONLanguageMode();
	}

	getModeAtPosition(document: TextDocument, position: Position): ILanguageMode | undefined {
		const wyaDocumentRegion = this.languageModeCache.refreshAndGetMode(document);
		const languageId = wyaDocumentRegion.getLanguageAtPosition(position);

		return this.modes?.[languageId];
	}
}