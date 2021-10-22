import { 
	CompletionList,
	CompletionParams,
	Connection, 
	DocumentFormattingParams
} from "vscode-languageserver";
import { 
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult
} from "vscode-languageserver/node";
import { DocumentService } from './document';
import { initResult } from './config';
import { ProjectService } from './project';
import { TextEdit } from 'vscode-languageserver-textdocument';

export class WLS {
	public connection: Connection;
	private documentService: DocumentService;
	private globalSnippetDir = '';

	constructor() {
		this.connection = createConnection(ProposedFeatures.all);
		this.documentService = new DocumentService();
	}

	/* 公有方法 */
	init() {
		this.connection.onInitialize((params: InitializeParams) => {
			this.initSetup(params);
			return  initResult;
		});
		
		this.connection.onInitialized(() => {
			console.log('onInitialized');
		});
		this.connection.onShutdown(() => {
			console.log('onShutdown');
		});
	}

	listen() {
		this.documentService.listen(this.connection);
		this.connection.listen();
	}

	
	/* 私有方法 */
	private initSetup(params: InitializeParams) {
		this.globalSnippetDir = params.initializationOptions?.globalSnippetDir;
		this.setupWLSHandlers();
	}

	private setupWLSHandlers() {
		this.connection.onCompletion(this.onCompletion.bind(this));
		this.connection.onCompletionResolve(this.onCompletionResolve.bind(this));

		this.connection.onDocumentFormatting(this.onDocumentFormatting.bind(this));
	}

	private async onCompletion(params: CompletionParams): Promise<CompletionList> {
		const project = new ProjectService(this.documentService, { globalSnippetDir: this.globalSnippetDir });
		const result = await project?.doComplete(params) ?? [];
		return {
			isIncomplete: false,
			items: result
		};
	}

	private onCompletionResolve(item: CompletionItem): CompletionItem {
		return item;
	}

	async onDocumentFormatting(params: DocumentFormattingParams): Promise<TextEdit[]> {
		const project = new ProjectService(this.documentService, { globalSnippetDir: this.globalSnippetDir });
	
		return project?.onDocumentFormatting(params) ?? [];
	}
}