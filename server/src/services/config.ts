import { basename, extname } from 'path';
import { sync } from 'fast-glob';
import { flatten } from 'lodash';
import { TextDocumentSyncKind, InitializeResult, CodeActionKind } from 'vscode-languageserver/node';
import {
	getPathDepth,
	normalizeFileNameToFsPath,
	normalizeFileNameResolve,
	normalizeAbsolutePath
  } from '../utils/paths';
//   import { findConfigFile } from '../utils/workspace';

export const initResult: InitializeResult = {
	capabilities: {
		textDocumentSync: TextDocumentSyncKind.Incremental,
		// 自动提示
		completionProvider: {
			resolveProvider: true,
			triggerCharacters: [':', '<', '"', "'", '/', ' ']
		},
		// 格式化代码
		documentFormattingProvider : true,
	}
};

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
		format: {
			enable: boolean;
			options: {
				tabSize: number;
				useTabs: boolean;
			};
			defaultFormatter: {
				[lang: string]: string;
			};
			defaultFormatterOptions: {
				[lang: string]: Record<string, any>
			};
			scriptInitialIndent: boolean;
			styleInitialIndent: boolean;
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
	stylusSupremacy?: any;
}

export const getDefaultWLSConfig = (): WLSFullConfig => {
	return {
		wya: {
			ignoreProjectWarning: false,
			useWorkspaceDependencies: false,
			validation: {
				template: true,
				templateProps: false,
				interpolation: true,
				style: true,
				script: true
			},
			completion: {
				autoImport: false,
				tagCasing: 'initial',
				scaffoldSnippetSources: {
					workspace: '💼',
					user: '🗒️',
					wya: '✌'
				}
			},
			grammar: {
				customBlocks: {}
			},
			format: {
				enable: true,
				options: {
					tabSize: 4,
					useTabs: true
				},
				defaultFormatter: {},
				defaultFormatterOptions: {},
				scriptInitialIndent: false,
				styleInitialIndent: false
			},
		},
		css: {},
		wxml: {
			suggest: {}
		},
		html: {
			suggest: {}
		},
		javascript: {
			format: {}
		},
		emmet: {},
		stylusSupremacy: {}
	};
};

export interface BasicComponentInfo {
	name: string;
	path: string;
}

export type Glob = string;

export interface WyaProject<C = BasicComponentInfo | Glob> {
	root: string;
	package?: string;
	snippetFolder: string;
	globalComponents: C[];
  }

export interface WyaFullConfig {
	settings: Record<string, boolean | string | number>;
	projects: WyaProject<BasicComponentInfo>[];
}

export type WyaConfig = Partial<Pick<WyaFullConfig, 'settings'>> & {
	projects?: Array<string | (Pick<WyaProject, 'root'> & Partial<WyaProject>)>;
};

export const getWyaFullConfig = async (
	rootPathForConfig: string,
	workspacePath: string,
	wyaConfig: WyaConfig
): Promise<WyaFullConfig> => {
	const oldProjects = wyaConfig.projects ?? [workspacePath];
	const projects = oldProjects
		.map(project => {
			const getFallbackPackagePath = (projectRoot: string) => {
				// const fallbackPackage = findConfigFile(projectRoot, 'package.json');
				// return fallbackPackage ? normalizeFileNameToFsPath(fallbackPackage) : undefined;
				return undefined;
			};

			if (typeof project === 'string') {
				const projectRoot = normalizeAbsolutePath(project, rootPathForConfig);

				return {
					root: projectRoot,
					package: getFallbackPackagePath(projectRoot),
					snippetFolder: normalizeFileNameResolve(projectRoot, '.vscode/wya/snippets'),
					globalComponents: []
				} as WyaProject;
			}

			const projectRoot = normalizeAbsolutePath(project.root, rootPathForConfig);
			return {
				root: projectRoot,
				package: project.package
					? normalizeAbsolutePath(project.package, projectRoot)
					: getFallbackPackagePath(projectRoot),
				snippetFolder: project.snippetFolder
					? normalizeAbsolutePath(project.snippetFolder, projectRoot)
					: normalizeFileNameResolve(projectRoot, '.vscode/wya/snippets'),
				globalComponents: flatten(
					project.globalComponents?.map(comp => {
						if (typeof comp === 'string') {
							return sync(comp, { cwd: projectRoot, absolute: true, suppressErrors: true }).map((fileName: string) => ({
								name: basename(fileName, extname(fileName)),
								path: normalizeFileNameToFsPath(fileName)
							}));
						}
						return comp;
					}) ?? []
				)
			} as WyaProject<BasicComponentInfo>;
		})
		.sort((a, b) => {
			const r = getPathDepth(b.root, '/') - getPathDepth(a.root, '/');
			if (r !== 0) return r;
			return b.root.length - a.root.length;
		});

	return {
		settings: wyaConfig.settings ?? {},
		projects
	} as WyaFullConfig;
};