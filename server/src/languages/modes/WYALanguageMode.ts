import { ILanguageMode } from './ILanguageMode';
import { CompletionItem } from 'vscode-languageserver-types';
import { CompletionContext, CompletionParams, Position } from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { Range } from 'vscode-css-languageservice';
import { ScaffoldSnippetSources, SnippetManager } from '../../snippets/SnippetManager';

export class WYALanguageMode implements ILanguageMode {
	snippetManager: SnippetManager;
	scaffoldSnippetSources: ScaffoldSnippetSources = {
		workspace: '💼',
		user: '🗒️',
		wya: '✌'
	};

	constructor() {
		this.snippetManager = new SnippetManager();
	}

	doComplete(document: TextDocument, position: Position, context: CompletionContext | undefined): CompletionItem[] {
		if (
			this.scaffoldSnippetSources['workspace'] === '' &&
			this.scaffoldSnippetSources['user'] === '' &&
			this.scaffoldSnippetSources['wya'] === ''
		) {
			return [];
		}

		const offset = document.offsetAt(position);
		const lines = document.getText().slice(0, offset).split('\n');
		const currentLine = lines[position.line];
		const trigger = context?.triggerCharacter;
		
		if (currentLine.length > 0 && trigger === '<') {
			const items = this.snippetManager?.completeSnippets(this.scaffoldSnippetSources) ?? [];
			const replacementRange = Range.create(
				document.positionAt(offset - currentLine.length),
				document.positionAt(offset)
			);
			items.forEach(i => {
				if (i.insertText) {
					i.textEdit = {
						newText: i.insertText,
						range: replacementRange
					};
				}
			});
			return items;
		}

		return [];
	}
}