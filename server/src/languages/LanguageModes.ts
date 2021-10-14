import { IEmbeddedRegion, LanguageId, parseWyaDocumentRegions } from '../parser/region/WyaDocumentRegionParser';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { CompletionContext, Position } from 'vscode-languageserver/node';
import { LanguageModeCache } from './LanguageModeCache';
import { IWyaDocumentRegions, getWyaDocumentRegions } from '../parser/region/WyaDocumentRegions';
import { ILanguageMode } from './modes/ILanguageMode';
import { JSONLanguageMode } from './modes/JSONLanguageMode';
import { WXMLLanguageMode } from './modes/WXMLLanguageMode';
import { WYALanguageMode } from './modes/WYALanguageMode';
import { SCSSLanguageMode } from './modes/SCSSLanguageMode';
import { IWXMLDocument, parseWXMLDocument } from '../parser/wxml/WXMLParser';

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
	languageModeCache: LanguageModeCache<IWyaDocumentRegions>;
	wxmlDocumentCache: LanguageModeCache<IWXMLDocument>;

	constructor() {
		this.languageModeCache = new LanguageModeCache<IWyaDocumentRegions>(10, 60, document => getWyaDocumentRegions(document));
		this.wxmlDocumentCache = new LanguageModeCache<IWXMLDocument>(10, 60, (document) => parseWXMLDocument(document));

		this.modes['wxml'] = new WXMLLanguageMode(this.wxmlDocumentCache);
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