import { TextDocumentSyncKind, InitializeResult } from 'vscode-languageserver/node';

export const initResult: InitializeResult = {
	capabilities: {
		textDocumentSync: TextDocumentSyncKind.Incremental,
		completionProvider: {
			resolveProvider: true,
			triggerCharacters: [':', '<', '"', "'", '/', ' ']
		}
	}
};

export interface BasicComponentInfo {
	name: string;
	path: string;
}

export interface WLSConfig {
	wya: {
		ignoreProjectWarning: boolean;
		useWorkspaceDependencies: boolean;
		completion: {
			autoImport: boolean;
			tagCasing: 'initial' | 'kebab';
			scaffoldSnippetSources: {
				workspace: string;
				user: string;
				wya: string;
			};
		};
		grammar: {
			customBlocks: { [lang: string]: string };
		};
		validation: {
			template: boolean;
			templateProps: boolean;
			interpolation: boolean;
			style: boolean;
			script: boolean;
		};
	};
}

export interface WLSFullConfig extends WLSConfig {
	emmet?: any;
	wxml?: any;
	html?: any;
	css?: any;
	sass?: any;
	javascript?: any;
	prettier?: any;
}