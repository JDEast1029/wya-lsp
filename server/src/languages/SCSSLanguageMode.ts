import { ILanguageMode } from './ILanguageMode';
import { CompletionItem } from 'vscode-languageserver-types';
import { CompletionParams } from 'vscode-languageserver/node';
import * as emmet from 'vscode-emmet-helper';
import { TextDocument } from 'vscode-languageserver-textdocument';

export enum Priority {
	Emmet,
	Platform
}
  
export class SCSSLanguageMode implements ILanguageMode {
// 	constructor(private document: TextDocument) {}

// 	doComplete(params: CompletionParams): CompletionItem[] {
// 		// this.env.getConfig().emmet
// 		const emmetCompletions = emmet.doComplete(this.document, params.position, 'sass', {});
// 		if (!emmetCompletions) {
// 			return [];
// 		}
// 		return emmetCompletions.items.map(i => {
// 			return {
// 				...i,
// 				sortText: Priority.Emmet + i.label
// 			};
// 		});
// 	}
}