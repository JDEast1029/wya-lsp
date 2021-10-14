import { CompletionItemKind, InsertTextFormat, MarkupContent } from 'vscode-languageserver';
import { CompletionItem } from 'vscode-languageserver-types';
import fs = require('fs');
import path = require('path');

type SnippetSource = 'workspace' | 'user' | 'wya';
type SnippetType = 'file' | 'template' | 'style' | 'script' | 'config';

interface Snippet {
	source: SnippetSource;
	name: string;
	type: SnippetType;
	customTypeName?: string;
	content: string;
}

export interface ScaffoldSnippetSources {
	workspace: string | undefined;
	user: string | undefined;
	wya: string | undefined;
}

export class SnippetManager {
	private _snippets: any;

	constructor() {
		this._snippets = this.loadAllSnippets(path.resolve(__dirname, './wyaSnippets'), 'wya');
	}

	public completeSnippets(scaffoldSnippetSources: ScaffoldSnippetSources): CompletionItem[] {
		return this._snippets
			.filter((s: Snippet) => {
				return scaffoldSnippetSources[s.source] !== '';
			})
			.map((s: Snippet) => {
				let scaffoldLabelPre = '';
				switch (s.type) {
					case 'file':
						scaffoldLabelPre = '<wya> with';
						break;
					case 'config':
					case 'template':
					case 'style':
					case 'script':
						scaffoldLabelPre = `<${s.type}>`;
						break;
				}

				const sourceIndicator = scaffoldSnippetSources[s.source];
				const label = `${scaffoldLabelPre} ${s.name} ${sourceIndicator}`;

				return <CompletionItem>{
					label,
					insertText: s.content,
					insertTextFormat: InsertTextFormat.Snippet,
					kind: CompletionItemKind.Snippet,
					sortText: this.computeSortTextPrefix(s) + label
				};
			});
	}

	private loadAllSnippets(rootDir: string, source: SnippetSource): Snippet[] {
		const snippets = [
			...this.loadSnippetsFromDir(path.resolve(rootDir, 'template'), source, 'template'),
			...this.loadSnippetsFromDir(path.resolve(rootDir, 'style'), source, 'style'),
			...this.loadSnippetsFromDir(path.resolve(rootDir, 'script'), source, 'script'),
			...this.loadSnippetsFromDir(path.resolve(rootDir, 'config'), source, 'config')
		];

		return snippets;
	}

	private loadSnippetsFromDir(dir: string, source: SnippetSource, type: SnippetType): Snippet[] {
		const snippets: Snippet[] = [];

		if (!fs.existsSync(dir)) {
			return snippets;
		}

		try {
			fs.readdirSync(dir)
				.filter((p: string) => p.endsWith('.wya'))
				.forEach((p: string) => {
					snippets.push({
						source,
						name: p,
						type,
						content: fs.readFileSync(path.resolve(dir, p), 'utf-8').replace(/\\t/g, '\t')
					});
				});
		} catch (err: any) {
			console.error(err.message);
		}

		return snippets;
	}


	private computeSortTextPrefix(snippet: Snippet) {
		const s = {
			workspace: 0,
			user: 1,
			wya: 2
		}[snippet.source];

		const t = {
			file: 'a',
			template: 'b',
			style: 'c',
			script: 'd',
			config: 'e'
		}[snippet.type];

		return s + t;
	}
}