import { CompletionItem, Diagnostic, DiagnosticSeverity, Range } from 'vscode-languageserver-types';
import { CompletionContext } from 'vscode-languageserver/node';
import { Position, TextDocument } from 'vscode-languageserver-textdocument';
import { ESLint, Linter } from 'eslint';
import { ILanguageMode } from './ILanguageMode';
import { IWXMLDocument, parseWXMLDocument } from '../../parser/wxml/WXMLParser';
import { LanguageModeCache } from '../LanguageModeCache';
import { doComplete } from './wxml/complete';
import { IWyaDocumentRegions } from '../../parser/region/WyaDocumentRegions';

const toDiagnostic = (error: Linter.LintMessage): Diagnostic => {
	const line = error.line - 1;
	const column = error.column - 1;
	const endLine = error.endLine ? error.endLine - 1 : line;
	const endColumn = error.endColumn ? error.endColumn - 1 : column;
	return {
		range: Range.create(line, column, endLine, endColumn),
		message: `[${error.ruleId}]\n${error.message}`,
		source: 'eslint-plugin-wxml',
		severity: error.severity === 1 ? DiagnosticSeverity.Warning : DiagnosticSeverity.Error
	};
};
export class WXMLLanguageMode implements ILanguageMode {
	languageModeCache: LanguageModeCache<IWyaDocumentRegions>;
	embeddedLanguageModeCache: LanguageModeCache<TextDocument>;
	wxmlDocumentCache: LanguageModeCache<IWXMLDocument>;
	currentTag = '';
	linter: any;

	constructor(languageModeCache: LanguageModeCache<IWyaDocumentRegions>) {
		this.languageModeCache = languageModeCache;
		this.wxmlDocumentCache = new LanguageModeCache<IWXMLDocument>(10, 60, (document) => parseWXMLDocument(document));
		this.embeddedLanguageModeCache = new LanguageModeCache<TextDocument>(10, 60, document => 
			this.languageModeCache.refreshAndGetMode(document).getSingleLanguageDocument('wxml')
		);
		const baseConfig: Linter.Config = {
			parser: require.resolve('@wxml/parser'),
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module'
			},
			env: {
				browser: true,
				es6: true
			},
			plugins: ['wxml'],
			rules: {
				"wxml/no-vue-directive": "error"
			}
		};
		baseConfig.ignorePatterns = ['!.*'];

		this.linter = new ESLint({
			useEslintrc: false,
			cwd: __dirname,
			baseConfig
		});
	}

	// unimplemented： ">" 自动关闭标签，"/" 自关闭标签
	doComplete(document: TextDocument, position: Position, context: CompletionContext | undefined): CompletionItem[] {
		const cachedDocument = this.embeddedLanguageModeCache.refreshAndGetMode(document);
		const cachedWXMLDocument = this.wxmlDocumentCache.refreshAndGetMode(document);
		return doComplete(cachedDocument, cachedWXMLDocument, position);
	}

	async doValidation(document: TextDocument): Promise<Diagnostic[] | null> {
		const cachedDocument = this.embeddedLanguageModeCache.refreshAndGetMode(document);
		const rawText = cachedDocument.getText();
		if (rawText.replace(/\s/g, '') === '') {
			return [];
		}
		const text = rawText.replace(/ {10}/, '<template>') + '</template>';
		const report = await this.linter.lintText(text, { filePath: cachedDocument.uri });

		return report?.[0]?.messages?.map(toDiagnostic) ?? [];
	}
}