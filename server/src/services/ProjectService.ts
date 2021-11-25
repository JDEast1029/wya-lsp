import { CompletionItem, Diagnostic, CompletionParams, DocumentFormattingParams, TextEdit, TextDocumentPositionParams } from 'vscode-languageserver/node';
import { BasicComponentInfo, WLSFullConfig, getDefaultWLSConfig } from './config';
import { DocumentService } from './DocumentService';
import { LanguageModes } from '../languages/LanguageModes';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { NULL_HOVER } from '../constants';

export interface ProjectConfig {
	// wlsFullConfig: WLSFullConfig;
	// isExistWLSConfig: boolean;
	// rootPathForConfig: string;
	// workspaceFsPath: string;
	// rootFsPath: string;
	// packagePath: string | undefined;
	// snippetFolder: string;
	// globalComponents: BasicComponentInfo[];
	globalSnippetDir: string
}

export class ProjectService {
	private languageModes: LanguageModes;
	private documentService: DocumentService;
	private projectConfig: ProjectConfig;

	constructor(documentService: DocumentService, projectConfig: ProjectConfig) {
		this.documentService = documentService;
		this.projectConfig = projectConfig;
		this.languageModes = new LanguageModes();
	}

	public doComplete(params: CompletionParams) {
		const { textDocument, position, context } = params;
		const doc = this.documentService.getDocument(textDocument.uri)!;
		const mode = this.languageModes.getModeAtPosition(doc, position);
		if (mode && mode.doComplete) {
			return mode.doComplete(doc, position, context);
		}
		return [];
	}

	async onDocumentFormatting(params: DocumentFormattingParams): Promise<TextEdit[]> {
		const { textDocument, options } = params;
		const doc = this.documentService.getDocument(textDocument.uri)!;
		const modeRanges = this.languageModes.getAllLanguageModeRangesInDocument(doc);
		const allEdits: TextEdit[] = [];

		const errMessages: string[] = [];
		modeRanges.forEach(modeRange => {
			if (modeRange.mode && modeRange.mode.format) {
				try {
					const edits = modeRange.mode.format(doc, { start: modeRange.start, end: modeRange.end }, options);
					for (const edit of edits) {
						allEdits.push(edit);
					}
				} catch (err: any) {
					errMessages.push(err.toString());
				}
			}
		});

		if (errMessages.length !== 0) {
			console.error('Formatting failed: "' + errMessages.join('\n') + '"');
			return [];
		}

		return allEdits;
	}

	public async doValidation(doc: TextDocument) {
		const diagnostics: Diagnostic[] = [];
		for (const lmr of this.languageModes.getAllLanguageModeRangesInDocument(doc)) {
			if (lmr.mode && lmr.mode.doValidation) {
				const res = await lmr.mode.doValidation(doc) || [];
				diagnostics.push(...res);
			}
		}
		return diagnostics;
	}

	public async doHover(params: TextDocumentPositionParams) {
		const { textDocument, position } = params;
		const doc = this.documentService.getDocument(textDocument.uri)!;
		const mode = this.languageModes.getModeAtPosition(doc, position);
		if (mode && mode.doHover) {
			return mode.doHover(doc, position);
		}
		return NULL_HOVER;
	}
}