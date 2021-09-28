import { Connection } from 'vscode-languageserver';
import {
	TextDocuments,
} from 'vscode-languageserver/node';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';

export class DocumentService {
	private documents: TextDocuments<TextDocument>;

	constructor() {
		this.documents = new TextDocuments(TextDocument);
	}
	
	public listen(conn: Connection) {
		this.documents.listen(conn);
	}

	public getDocument(uri: string) {
		return this.documents.get(uri);
	}

	get onDidClose() {
		return this.documents.onDidClose;
	}

	get onDidChangeContent() {
		return this.documents.onDidChangeContent;
	}
}