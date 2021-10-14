import { ILanguageMode } from './ILanguageMode';
import { CompletionItem, CompletionItemKind, InsertTextFormat, Position, TextEdit } from 'vscode-languageserver-types';
import { CompletionContext, CompletionParams } from 'vscode-languageserver/node';
import { Range } from 'vscode-css-languageservice';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { CONFIG_FIELDS } from '../config/config';
/**
 * <config /> 补全
 */
export class JSONLanguageMode implements ILanguageMode {
	
	doComplete(document: TextDocument, position: Position, context: CompletionContext | undefined): CompletionItem[] {
		const offset = document.offsetAt(position);
		const lines = document.getText().slice(0, offset).split('\n');
		const currentLine = lines[position.line].replace(/^(\t|\n|\r|\s)*/g, '');
		const trigger = context?.triggerCharacter;

		if (trigger === '"') {
			const replacementRange = Range.create(
				document.positionAt(offset - currentLine.length),
				document.positionAt(offset + 1), // 输入 " 会出现 "", 所以要将'""' 替换掉
			);
			return CONFIG_FIELDS.map((field) => {
				let insertText = '"' + field + '"' + ': ${0}';
				if (field === 'singlePage') {
					insertText = '"' + field + '"' + ': {\n\t${0}\n}';
				}
				
				return {
					label: field,
					kind: CompletionItemKind.Field,
					filterText: insertText,
					insertTextFormat: InsertTextFormat.Snippet,
					textEdit: TextEdit.replace(replacementRange, insertText)
				};
			});
		}
		return [];
	}
}