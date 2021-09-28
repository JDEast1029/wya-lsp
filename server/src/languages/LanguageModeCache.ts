import { TextDocument } from 'vscode-languageserver-textdocument';

export interface LanguageModelCache<T> {
	/**
	 * - Feed updated document
	 * - Use `parse` function to re-compute model
	 * - Return re-computed model
	 */
	refreshAndGet(document: TextDocument): T;
	onDocumentRemoved(document: TextDocument): void;
	dispose(): void;
}

export class LanguageModeCache<T> {
	languageModels: { [uri: string]: { version: number; languageId: string; cTime: number; languageModel: T } } = {};
	nModels = 0;
	cleanupInterval: NodeJS.Timer | undefined;
	parse: (document: TextDocument) => T;

	constructor(
		private maxEntries: number,
		private cleanupIntervalTimeInSec: number,
		parse: (document: TextDocument) => T
	) {
		this.parse = parse;
		if (this.cleanupIntervalTimeInSec > 0) {
			this.cleanupInterval = setInterval(() => {
				const cutoffTime = Date.now() - this.cleanupIntervalTimeInSec * 1000;
				const uris = Object.keys(this.languageModels);
				for (const uri of uris) {
					const languageModelInfo = this.languageModels[uri];
					if (languageModelInfo.cTime < cutoffTime) {
						delete this.languageModels[uri];
						this.nModels--;
					}
				}
			}, this.cleanupIntervalTimeInSec * 1000);
		}
	}

	refreshAndGet(document: TextDocument): T {
		const version = document.version;
		const languageId = document.languageId;
		const languageModelInfo = this.languageModels[document.uri];
		if (languageModelInfo && languageModelInfo.version === version && languageModelInfo.languageId === languageId) {
			languageModelInfo.cTime = Date.now();
			return languageModelInfo.languageModel;
		}
		const languageModel = this.parse(document);
		this.languageModels[document.uri] = { languageModel, version, languageId, cTime: Date.now() };
		if (!languageModelInfo) {
			this.nModels++;
		}

		if (this.nModels === this.maxEntries) {
			let oldestTime = Number.MAX_VALUE;
			let oldestUri = null;
			for (const uri in this.languageModels) {
				const languageModelInfo = this.languageModels[uri];
				if (languageModelInfo.cTime < oldestTime) {
					oldestUri = uri;
					oldestTime = languageModelInfo.cTime;
				}
			}
			if (oldestUri) {
				delete this.languageModels[oldestUri];
				this.nModels--;
			}
		}
		return  languageModel;
	}

	onDocumentRemoved(document: TextDocument) {
		const uri = document.uri;
		if (this.languageModels[uri]) {
			delete this.languageModels[uri];
			this.nModels--;
		}
	}

	dispose() {
		if (typeof this.cleanupInterval !== 'undefined') {
			clearInterval(this.cleanupInterval);
			this.cleanupInterval = null as any;
			this.languageModels = {};
			this.nModels = 0;
		}
	}
}