import { CompletionParams } from 'vscode-languageserver/node';
import { BasicComponentInfo, WLSFullConfig } from './config';
import { DocumentService } from './document';
import { LanguageModes } from '../languages/LanguageModes';

export interface ProjectConfig {
	// vlsFullConfig: WLSFullConfig;
	// isExistVeturConfig: boolean;
	// rootPathForConfig: string;
	// workspaceFsPath: string;
	// rootFsPath: string;
	// tsconfigPath: string | undefined;
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
}