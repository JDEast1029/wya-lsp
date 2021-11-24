import { MarkupContent } from 'vscode-languageserver-types';

export interface IReference {
	name: string;
	url: string;
}

export interface IAttributeData {
	name: string;
	description?: string | MarkupContent;
	values?: IValueData[];
	valueSet?: string,
	references?: IReference[];
}

export interface IEventData {
	name: string;
	description?: string | MarkupContent;
}

export interface ITagData {
	name: string;
	description?: string | MarkupContent;
	attributes: IAttributeData[];
	events: IEventData[];
	references?: IReference[];
}

export interface IValueData {
	name: string;
	description?: string | MarkupContent;
	references?: IReference[];
}

export interface WXMLData {
	tags?: ITagData[];
	globalAttributes?: IAttributeData[];
	globalEvents?: IEventData[];
}