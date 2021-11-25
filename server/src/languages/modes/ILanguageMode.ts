import { CompletionItem, Diagnostic, Position } from 'vscode-languageserver-types';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { CompletionContext, FormattingOptions, Hover, Range, TextEdit } from 'vscode-languageserver/node';

export interface ILanguageMode {
	doComplete?(document: TextDocument, position: Position, context: CompletionContext | undefined): Promise<CompletionItem[]> | CompletionItem[];
	format?(document: TextDocument, range: Range, options: FormattingOptions): TextEdit[];
	doValidation?(document: TextDocument): Promise<Diagnostic[] | null>;
	doHover?(document: TextDocument, position: Position): Hover | Promise<Hover | null>;
}