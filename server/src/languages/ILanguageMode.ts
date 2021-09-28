import { CompletionItem, Position } from 'vscode-languageserver-types';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { CompletionContext } from 'vscode-languageserver/node';

export interface ILanguageMode {
	doComplete?(document: TextDocument, position: Position, context: CompletionContext | undefined): CompletionItem[];
}