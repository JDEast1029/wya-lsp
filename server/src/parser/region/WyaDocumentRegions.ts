import { Position, TextDocument } from 'vscode-languageserver-textdocument';
import { IEmbeddedRegion, ILanguageRange, LanguageId, parseWyaDocumentRegions } from './WyaDocumentRegionParser';


export interface IWyaDocumentRegions {
	getSingleLanguageDocument(languageId: LanguageId): TextDocument;
	getAllLanguageRanges(): ILanguageRange[];
	getLanguageAtPosition(position: Position): LanguageId;
}

export const getWyaDocumentRegions = (document: TextDocument): IWyaDocumentRegions => {
	const regions = parseWyaDocumentRegions(document);

	return {
		getSingleLanguageDocument: (languageId: LanguageId) => getSingleLanguageDocument(document, regions, languageId),
		getAllLanguageRanges: () => getAllLanguageRanges(document, regions),
		getLanguageAtPosition: (position: Position) => getLanguageAtPosition(document, regions, position),
	};
};

const getSingleLanguageDocument = (
	document: TextDocument, 
	regions: IEmbeddedRegion[], 
	languageId: LanguageId
): TextDocument => {
	const oldContent = document.getText();
	let newContent = oldContent
		.split('\n')
		.map(line => ' '.repeat(line.length))
		.join('\n');

	for (const r of regions) {
		if (r.languageId === languageId) {
			newContent = newContent.slice(0, r.start) + oldContent.slice(r.start, r.end) + newContent.slice(r.end);
		}
	}

	return TextDocument.create(document.uri, languageId, document.version, newContent);
};

const getAllLanguageRanges = (document: TextDocument, regions: IEmbeddedRegion[]): ILanguageRange[] => {
	return regions.map(r => {
		return {
			languageId: r.languageId,
			start: document.positionAt(r.start),
			end: document.positionAt(r.end)
		};
	});
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
	return 'wya';
};