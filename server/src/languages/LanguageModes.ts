import { IEmbeddedRegion, LanguageId, parseWyaDocumentRegions } from '../parser/region/WyaDocumentRegionParser';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { CompletionContext, Position } from 'vscode-languageserver/node';
import { LanguageModeCache } from './LanguageModeCache';
import { WyaDocumentRegions, getWyaDocumentRegions } from '../parser/region/WyaDocumentRegions';
import { ILanguageMode } from './modes/ILanguageMode';
import { JSONLanguageMode } from './modes/JSONLanguageMode';
import { WXMLLanguageMode } from './modes/WXMLLanguageMode';
import { WYALanguageMode } from './modes/WYALanguageMode';
import { SCSSLanguageMode } from './modes/SCSSLanguageMode';

export const nullMode: ILanguageMode = {
	doComplete: () => []
};

export class LanguageModes {
	private modes: { [k in LanguageId]: ILanguageMode } = {
		wya: nullMode,
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
		this.modes['scss'] = new SCSSLanguageMode(this.languageModeCache);
		this.modes['wya'] = new WYALanguageMode();
		this.modes['json'] = new JSONLanguageMode();
	}

	getModeAtPosition(document: TextDocument, position: Position): ILanguageMode | undefined {
		const wyaDocumentRegion = this.languageModeCache.refreshAndGetMode(document);
		const languageId = wyaDocumentRegion.getLanguageAtPosition(position);

		return this.modes?.[languageId];
	}
}