import { ILanguageMode } from './ILanguageMode';
import { CompletionItem, CompletionItemKind, Position } from 'vscode-languageserver-types';
import { CompletionContext, CompletionParams } from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';

/**
 * <config /> 补全
 */
export class JSONLanguageMode implements ILanguageMode {
	private fields: Array<string> = [
		'component',
		'componentPlaceholder',
		'navigationBarBackgroundColor',
		'navigationBarTextStyle',
		'navigationBarTitleText',
		'navigationStyle',
		'backgroundColor',
		'backgroundTextStyle',
		'backgroundColorTop',
		'backgroundColorBottom',
		'enablePullDownRefresh',
		'onReachBottomDistance',
		'pageOrientation',
		'disableScroll',
		'usingComponents',
		'initialRenderingCache',
		'style',
		'singlePage',
		'restartStrategy',
		'navigationBarFit', // 在singlePage下
	];
	
	doComplete(document: TextDocument, position: Position, context: CompletionContext | undefined): CompletionItem[] {
		const trigger = context?.triggerCharacter;
		
		if (trigger === '"') {
			return this.fields.map((field) => {
				return {
					label: field,
					kind: CompletionItemKind.Field,
				};
			});	
		}
		return [];
	}
}