import { ILanguageMode } from './ILanguageMode';
import { CompletionItem } from 'vscode-languageserver-types';
import { CompletionContext, CompletionParams } from 'vscode-languageserver/node';
import * as emmet from 'vscode-emmet-helper';
import { Position, TextDocument } from 'vscode-languageserver-textdocument';
import {
	getSCSSLanguageService,
	LanguageService,
	Stylesheet
} from 'vscode-css-languageservice';
import { LanguageModeCache } from '../LanguageModeCache';
import { IWyaDocumentRegions } from '../../parser/region/WyaDocumentRegions';
export class SCSSLanguageMode implements ILanguageMode {
	languageService: LanguageService;
	languageModeCache: LanguageModeCache<IWyaDocumentRegions>;
	embeddedLanguageModeCache: LanguageModeCache<TextDocument>;
	stylesheetsModeCache: LanguageModeCache<Stylesheet>;

	constructor(languageModeCache: LanguageModeCache<IWyaDocumentRegions>) {
		this.languageService = getSCSSLanguageService();
		this.languageModeCache = languageModeCache;
		this.embeddedLanguageModeCache = new LanguageModeCache<TextDocument>(10, 60, document => 
			this.languageModeCache.refreshAndGetMode(document).getSingleLanguageDocument('scss')
		);
		this.stylesheetsModeCache = new LanguageModeCache<Stylesheet>(10, 60, document => this.languageService.parseStylesheet(document));
	}

	doComplete(document: TextDocument, position: Position, context: CompletionContext | undefined): CompletionItem[] {
		const embedded = this.embeddedLanguageModeCache.refreshAndGetMode(document);
		const lsCompletions = this.languageService.doComplete(embedded, position, this.stylesheetsModeCache.refreshAndGetMode(embedded));
		// TODO: 编辑器设置内的代码提示
		
		return lsCompletions.items;
	}
}