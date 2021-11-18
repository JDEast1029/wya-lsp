import { IEmbeddedRegion, ILanguageModeRange, LanguageId, parseWyaDocumentRegions } from '../parser/region/WyaDocumentRegionParser';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { Position } from 'vscode-languageserver/node';
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

	constructor() {
		this.languageModeCache = new LanguageModeCache<IWyaDocumentRegions>(10, 60, document => getWyaDocumentRegions(document));

		this.modes['wxml'] = new WXMLLanguageMode(this.languageModeCache);
		// this.modes['javascript'] = new JSONLanguageMode();
		this.modes['scss'] = new SCSSLanguageMode(this.languageModeCache);
		this.modes['json'] = new JSONLanguageMode(this.languageModeCache);
		this.modes['wya'] = new WYALanguageMode();
	}

	getModeAtPosition(document: TextDocument, position: Position): ILanguageMode | undefined {
		const wyaDocumentRegion = this.languageModeCache.refreshAndGetMode(document);
		const languageId = wyaDocumentRegion.getLanguageAtPosition(position);

		return this.modes?.[languageId];
	}

	getAllLanguageModeRangesInDocument(document: TextDocument): ILanguageModeRange[] {
		const result: ILanguageModeRange[] = [];

		const wyaDocumentRegion = this.languageModeCache.refreshAndGetMode(document);

		wyaDocumentRegion.getAllLanguageRanges().forEach(lr => {
			const mode = this.modes[lr.languageId];
			if (mode) {
				result.push({ mode, ...lr});
			}
		});

		return result;
	}
}