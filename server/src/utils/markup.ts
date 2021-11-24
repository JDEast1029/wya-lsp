import { MarkupContent } from 'vscode-languageserver-types';


export const normalizeMarkupContent = (input: string | MarkupContent | undefined): MarkupContent | undefined => {
	if (!input) {
		return undefined;
	}

	if (typeof input === 'string') {
		return {
			kind: 'markdown',
			value: input
		};
	}

	return {
		kind: 'markdown',
		value: input.value
	};
};
