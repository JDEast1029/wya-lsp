import { Node } from './Node';
import { Scanner } from '../scanner/Scanner';
import { TokenType } from '../scanner/constants';
import { TextDocument } from 'vscode-languageserver-textdocument';

export interface IWXMLDocument {
	roots: Node[];
	findNodeBefore(offset: number): Node;
	findNodeAt(offset: number): Node;
}

export function parseWXMLDocument(document: TextDocument): IWXMLDocument {
	const text = document.getText();
	const scanner = new Scanner(text);

	const wxmlDocument = new Node(0, text.length, [], null as any);
	let curr = wxmlDocument;
	let endTagStart = -1;
	let pendingAttribute = '';
	let token = scanner.scan();
	let attributes: { [k: string]: string } | undefined = {};
	while (token !== TokenType.EOS) {
		switch (token) {
			case TokenType.StartTagOpen:
				// eslint-disable-next-line no-case-declarations
				const child = new Node(scanner.tokenOffset, text.length, [], curr);
				curr.children.push(child);
				curr = child;
				break;
			case TokenType.StartTag:
				curr.tag = scanner.getTokenText();
				break;
			case TokenType.StartTagClose:
				curr.end = scanner.getTokenEnd(); // might be later set to end tag position
				break;
			case TokenType.EndTagOpen:
				endTagStart = scanner.tokenOffset;
				break;
			case TokenType.EndTag:
				// eslint-disable-next-line no-case-declarations
				const closeTag = scanner.getTokenText().toLowerCase();
				while (!curr.isSameTag(closeTag) && curr !== wxmlDocument) {
					curr.end = endTagStart;
					curr.closed = false;
					curr = curr.parent;
				}
				if (curr !== wxmlDocument) {
					curr.closed = true;
					curr.endTagStart = endTagStart;
				}
				break;
			case TokenType.StartTagSelfClose:
				if (curr !== wxmlDocument) {
					curr.closed = true;
					curr.end = scanner.getTokenEnd();
					curr = curr.parent;
				}
				break;
			case TokenType.EndTagClose:
				if (curr !== wxmlDocument) {
					curr.end = scanner.getTokenEnd();
					curr = curr.parent;
				}
				break;
			case TokenType.StartInterpolation: {
				const child = new Node(scanner.tokenOffset, text.length, [], curr);
				child.isInterpolation = true;
				curr.children.push(child);
				curr = child;
				break;
			}
			case TokenType.EndInterpolation:
				curr.end = scanner.getTokenEnd();
				curr.closed = true;
				curr = curr.parent;
				break;
			case TokenType.AttributeName:
				pendingAttribute = scanner.getTokenText();
				attributes = curr.attributes;
				if (!attributes) {
					curr.attributes = attributes = {};
				}
				attributes[pendingAttribute] = ''; // Support valueless attributes such as 'checked'
				break;
			case TokenType.AttributeValue:
				// eslint-disable-next-line no-case-declarations
				const value = scanner.getTokenText();
				if (attributes && pendingAttribute) {
					attributes[pendingAttribute] = value;
					pendingAttribute = '';
				}
				break;
		}
		token = scanner.scan();
	}
	while (curr !== wxmlDocument) {
		curr.end = text.length;
		curr.closed = false;
		curr = curr.parent;
	}
	return {
		roots: wxmlDocument.children,
		findNodeBefore: wxmlDocument.findNodeBefore.bind(wxmlDocument),
		findNodeAt: wxmlDocument.findNodeAt.bind(wxmlDocument)
	};
}