import { 
	CompletionList,
	CompletionParams,
	Connection, 
	DidChangeConfigurationParams, 
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
import path = require('path');
import { accessSync, constants, existsSync } from 'fs';
import _ = require('lodash');
import { DocumentService } from './DocumentService';
import { getDefaultWLSConfig, getWyaFullConfig, initResult, WLSFullConfig, WyaFullConfig } from './config';
import { ProjectService } from './ProjectService';
import { TextEdit } from 'vscode-languageserver-textdocument';
import { getFileFsPath, normalizeFileNameToFsPath } from '../utils/paths';
import { requireUncached } from '../utils/workspace';

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
			// await this.initWorkspace(params);
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
	private async initWorkspace(params: InitializeParams) {
		const workspaceFolders =
			Array.isArray(params.workspaceFolders) && params.capabilities.workspace?.workspaceFolders
				? params.workspaceFolders.map(el => ({ name: el.name, fsPath: getFileFsPath(el.uri) }))
				: params.rootPath
					? [{ name: '', fsPath: normalizeFileNameToFsPath(params.rootPath) }]
					: [];

		if (workspaceFolders.length === 0) {
			console.error('No workspace path found. Wls initialization failed.');
			return {
				capabilities: {}
			};
		}
		this.globalSnippetDir = params.initializationOptions?.globalSnippetDir;

		await Promise.all(workspaceFolders.map(workspace => this.addWorkspace(workspace)));

		this.workspaceConfig = this.getWLSFullConfig({}, params.initializationOptions?.config);

		if (params.capabilities.workspace?.workspaceFolders) {
			this.setupWorkspaceListeners();
		}
		this.setupConfigListeners();
	}

	private initSetup(params: InitializeParams) {
		
		this.setupWLSHandlers();
	}

	private setupWLSHandlers() {
		this.connection.onCompletion(this.onCompletion.bind(this));
		this.connection.onCompletionResolve(this.onCompletionResolve.bind(this));

		this.connection.onDocumentFormatting(this.onDocumentFormatting.bind(this));
	}

	private getWLSFullConfig(settings: WyaFullConfig['settings'], config: any | undefined): WLSFullConfig {
		const result = config ? _.merge(getDefaultWLSConfig(), config) : getDefaultWLSConfig();
		Object.keys(settings).forEach(key => {
			_.set(result, key, settings[key]);
		});
		return result;
	}

	private setupWorkspaceListeners() {
		this.connection.onInitialized(() => {
			this.connection.workspace.onDidChangeWorkspaceFolders(async e => {
				await Promise.all(e.added.map(el => this.addWorkspace({ name: el.name, fsPath: getFileFsPath(el.uri) })));
			});
		});
	}

	private setupConfigListeners() {
	// 	this.connection.onDidChangeConfiguration(async ({ settings }: DidChangeConfigurationParams) => {
	// 		this.workspaceConfig = this.getWLSFullConfig({}, settings);
	// 		let isFormatEnable = (this.workspaceConfig as WLSFullConfig)?.wya?.format?.enable ?? false;

	// 		this.projects.forEach(project => {
	// 			const wyaConfig = this.workspaces.get(project.env.getRootPathForConfig());
	// 			if (!wyaConfig) return;
	// 			const fullConfig = this.getWLSFullConfig(wyaConfig.settings, this.workspaceConfig);
	// 			project.env.configure(fullConfig);
	// 			isFormatEnable = isFormatEnable || fullConfig.wya.format.enable;
	// 		});
	// 		this.setupDynamicFormatters(isFormatEnable);
	// 	});

	// 	this.documentService.getAllDocuments().forEach(this.triggerValidation);
	}

	private async addWorkspace(workspace: { name: string; fsPath: string }) {
		let wyaConfigPath;
		// let wyaConfigPath = findConfigFile(workspace.fsPath, 'wya.config.js');
		// if (!wyaConfigPath) {
		// 	wyaConfigPath = findConfigFile(workspace.fsPath, 'wya.config.cjs');
		// }
		const rootPathForConfig = normalizeFileNameToFsPath(
			wyaConfigPath ? path.dirname(wyaConfigPath) : workspace.fsPath
		);
		if (!this.workspaces.has(rootPathForConfig)) {
			this.workspaces.set(rootPathForConfig, {
				name: workspace.name,
				...(await getWyaFullConfig(
					rootPathForConfig,
					workspace.fsPath,
					wyaConfigPath ? requireUncached(wyaConfigPath) : {}
				)),
				isExistWyaConfig: !!wyaConfigPath,
				workspaceFsPath: workspace.fsPath
			});
		}
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