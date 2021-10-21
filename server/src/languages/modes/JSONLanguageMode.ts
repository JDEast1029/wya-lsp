import { IPLanguageMode } from './ILanguageMode';
import { CompletionItem, Position } from 'vscode-languageserver-types';
import { CompletionContext } from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import {
	getLanguageService as getHTMLLanguageService, 
	LanguageService, 
	JSONDocument
} from 'vscode-json-languageservice';
import { CONFIG_SCHEMA, CONFIG_SCHEMA_URI } from '../config/config';
import { LanguageModeCache } from '../LanguageModeCache';
import { IWyaDocumentRegions } from '../../parser/region/WyaDocumentRegions';
/**
 * <config /> 补全
 */
export class JSONLanguageMode implements IPLanguageMode {
	languageModeCache: LanguageModeCache<IWyaDocumentRegions>;
	embeddedLanguageModeCache: LanguageModeCache<TextDocument>;
	languageService!: LanguageService;
	jsonModeCache: LanguageModeCache<JSONDocument>;

	constructor(languageModeCache: LanguageModeCache<IWyaDocumentRegions>) {
		this.languageModeCache = languageModeCache;
		this.embeddedLanguageModeCache = new LanguageModeCache<TextDocument>(10, 60, document => 
			this.languageModeCache.refreshAndGetMode(document).getSingleLanguageDocument('json')
		);
		this.initJsonService();
		this.jsonModeCache = new LanguageModeCache<JSONDocument>(10, 60, document => this.languageService.parseJSONDocument(document));
	}
	
	async doComplete(document: TextDocument, position: Position, context: CompletionContext | undefined): Promise<CompletionItem[]> {
		const embedded = this.embeddedLanguageModeCache.refreshAndGetMode(document);
		const lsCompletions = await this.languageService.doComplete(embedded, position, this.jsonModeCache.refreshAndGetMode(embedded));

		return lsCompletions?.items ?? [];
	}

	private initJsonService() {
		this.languageService = getHTMLLanguageService({
			schemaRequestService: (uri) => {
				if (uri === CONFIG_SCHEMA_URI) {
					return Promise.resolve(JSON.stringify(CONFIG_SCHEMA));
				}
				return Promise.reject(`Unabled to load schema at ${uri}`);
			}
		});
		this.languageService.configure({ allowComments: false, schemas: [{ fileMatch: ["*.wya"], uri: CONFIG_SCHEMA_URI }]  });
	}
}