import { 
	CompletionList,
	CompletionParams,
	Connection, 
	DidChangeConfigurationParams, 
	DocumentFormattingParams,
	Hover
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
} from "vscode-languageserver/node";
import { accessSync, constants, existsSync } from 'fs';
import path = require('path');
// import _ = require('lodash');
import { DocumentService } from './DocumentService';
import { getDefaultWLSConfig, getWyaFullConfig, initResult, WLSFullConfig, WyaFullConfig } from './config';
import { ProjectService } from './ProjectService';
import { TextEdit, TextDocument } from 'vscode-languageserver-textdocument';
import { getFileFsPath, normalizeFileNameToFsPath } from '../utils/paths';
import { requireUncached } from '../utils/workspace';
import { NULL_HOVER } from '../constants';

export class WLS {
	private workspaces: Map<
		string,
		WyaFullConfig & { name: string; workspaceFsPath: string; isExistWyaConfig: boolean }
	>;
	private nodeModulesMap: Map<string, string[]>;
	private projects: Map<string, ProjectService>;
	public connection: Connection;
	private documentService: DocumentService;
	private globalSnippetDir = '';
	private hasConfigurationCapability = false;

	private workspaceConfig: unknown;

	constructor() {
		this.connection = createConnection(ProposedFeatures.all);
		this.documentService = new DocumentService();
		this.workspaces = new Map();
		this.projects = new Map();
		this.nodeModulesMap = new Map();
	}

	/* 公有方法 */
	init() {
		this.connection.onInitialize(async (params: InitializeParams) => {
			await this.initWorkspace(params);
			this.initSetup(params);
			return  initResult;
		});
		
		this.connection.onInitialized(() => { 
			if (this.hasConfigurationCapability) {
				this.connection.client.register(DidChangeConfigurationNotification.type, undefined);
			}
		});
		this.connection.onShutdown(() => { console.log('onShutdown'); });
		this.setupConfigListeners();
	}

	listen() {
		this.documentService.listen(this.connection);
		this.connection.listen();
	}

	/* 私有方法 */
	private async initWorkspace(params: InitializeParams) {
		const capabilities = params.capabilities;
		this.globalSnippetDir = params.initializationOptions?.globalSnippetDir;
		this.hasConfigurationCapability = !!(
			capabilities.workspace && !!capabilities.workspace.configuration
		);
	}

	private initSetup(params: InitializeParams) {
		this.setupWLSHandlers();
	}

	// TODO: 配置项传递下去
	private setupWLSHandlers() {
		this.connection.onCompletion(this.onCompletion.bind(this));
		this.connection.onCompletionResolve(this.onCompletionResolve.bind(this));
		this.connection.onDocumentFormatting(this.onDocumentFormatting.bind(this));
		this.connection.onHover(this.onHover.bind(this));
	}

	private setupConfigListeners() {
		this.connection.onDidChangeConfiguration(change => {
			this.documentService.getAllDocuments().forEach(this.validateTextDocument);
		});
		this.documentService.onDidChangeContent(change => {
			this.validateTextDocument(change.document);
		});
	}

	private async validateTextDocument(textDocument: TextDocument) {
		const diagnostics = await this.doValidation(textDocument);
		diagnostics && this.connection.sendDiagnostics({uri: textDocument.uri, diagnostics});
	}

	private async doValidation(doc: TextDocument): Promise<Diagnostic[] | null> {
		const project = new ProjectService(this.documentService, { globalSnippetDir: this.globalSnippetDir });
		const diagnostics = await project?.doValidation(doc) ?? null;
		
		return diagnostics;
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

	// TODO: 未完成
	private async onDocumentFormatting(params: DocumentFormattingParams): Promise<TextEdit[]> {
		const project = new ProjectService(this.documentService, { globalSnippetDir: this.globalSnippetDir });
	
		return project?.onDocumentFormatting(params) ?? [];
	}

	private async onHover(params: TextDocumentPositionParams): Promise<Hover> {
		const project = new ProjectService(this.documentService, { globalSnippetDir: this.globalSnippetDir });
		const result = await project?.doHover(params) ?? NULL_HOVER;

		return result;
	}
}