import { Position, TextDocument } from 'vscode-languageserver-textdocument';
import { IEmbeddedRegion, LanguageId, parseWyaDocumentRegions } from './WyaDocumentRegionParser';


export interface WyaDocumentRegions {
	getLanguageAtPosition(position: Position): LanguageId;
}

export const getWyaDocumentRegions = (document: TextDocument): WyaDocumentRegions => {
	const regions = parseWyaDocumentRegions(document);

	return {
		getLanguageAtPosition: (position: Position) => getLanguageAtPosition(document, regions, position),
	};
};

const getLanguageAtPosition = (document: TextDocument, regions: IEmbeddedRegion[], position: Position) => {
	const offset = document.offsetAt(position);
	for (const region of regions) {
		if (region.start <= offset) {
			if (offset <= region.end) {
				return region.languageId;
			}
		} else {
			break;
		}
	}
	return 'wxml';
};