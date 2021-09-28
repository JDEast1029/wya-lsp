import { TextDocument } from 'vscode-languageserver-textdocument';

export interface LanguageModeCache<T> {
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
	languageModes: { [uri: string]: { version: number; languageId: string; cTime: number; languageMode: T } } = {};
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
				const uris = Object.keys(this.languageModes);
				for (const uri of uris) {
					const languageModeInfo = this.languageModes[uri];
					if (languageModeInfo.cTime < cutoffTime) {
						delete this.languageModes[uri];
						this.nModels--;
					}
				}
			}, this.cleanupIntervalTimeInSec * 1000);
		}
	}

	refreshAndGetMode(document: TextDocument): T {
		const version = document.version;
		const languageId = document.languageId;
		const languageModeInfo = this.languageModes[document.uri];
		if (languageModeInfo && languageModeInfo.version === version && languageModeInfo.languageId === languageId) {
			languageModeInfo.cTime = Date.now();
			return languageModeInfo.languageMode;
		}
		const languageMode = this.parse(document);
		this.languageModes[document.uri] = { languageMode, version, languageId, cTime: Date.now() };
		if (!languageModeInfo) {
			this.nModels++;
		}

		if (this.nModels === this.maxEntries) {
			let oldestTime = Number.MAX_VALUE;
			let oldestUri = null;
			for (const uri in this.languageModes) {
				const languageModeInfo = this.languageModes[uri];
				if (languageModeInfo.cTime < oldestTime) {
					oldestUri = uri;
					oldestTime = languageModeInfo.cTime;
				}
			}
			if (oldestUri) {
				delete this.languageModes[oldestUri];
				this.nModels--;
			}
		}
		return  languageMode;
	}

	onDocumentRemoved(document: TextDocument) {
		const uri = document.uri;
		if (this.languageModes[uri]) {
			delete this.languageModes[uri];
			this.nModels--;
		}
	}

	dispose() {
		if (typeof this.cleanupInterval !== 'undefined') {
			clearInterval(this.cleanupInterval);
			this.cleanupInterval = null as any;
			this.languageModes = {};
			this.nModels = 0;
		}
	}
}