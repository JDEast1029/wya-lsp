import { IEmbeddedRegion, LanguageId, parseWyaDocumentRegions } from '../parser/region/wyaDocumentRegionParser';
import { ILanguageMode } from './ILanguageMode';
import { JSONLanguageMode } from './JSONLanguageMode';
import { WXMLLanguageMode } from './WXMLLanguageMode';
import { LanguageModeCache } from './LanguageModeCache';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { CompletionContext, Position } from 'vscode-languageserver/node';
import { WyaDocumentRegions, getWyaDocumentRegions } from '../parser/region/WyaRegion';

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
	documentRegions: LanguageModeCache<WyaDocumentRegions>;

	constructor() {
		this.documentRegions = new LanguageModeCache<WyaDocumentRegions>(10, 60, document => getWyaDocumentRegions(document));

		// this.modes['wxml'] = new JSONLanguageMode();
		// this.modes['javascript'] = new JSONLanguageMode();
		// this.modes['scss'] = new JSONLanguageMode();
		this.modes['json'] = new JSONLanguageMode();
	}

	getModeAtPosition(document: TextDocument, position: Position): ILanguageMode | undefined {
		const languageId = this.documentRegions.refreshAndGet(document).getLanguageAtPosition(position);

		return this.modes?.[languageId];
	}
}