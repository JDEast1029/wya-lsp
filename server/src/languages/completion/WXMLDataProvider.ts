import { MarkupContent } from 'vscode-languageserver-types';
import { normalizeMarkupContent } from '../../utils/markup';
import { IWXMLDataProvider } from './WXMLDataManager';
import { IAttributeData, IEventData, ITagData, IValueData, WXMLData } from '../modes/wxml/IWXMLLanguageTypes';

export class WXMLDataProvider implements IWXMLDataProvider {
	private _tags: ITagData[] = [];
	private _tagMap: { [t: string]: ITagData } = {};
	private _globalAttributes: IAttributeData[];
	private _globalEvents: IEventData[];
	private _valueSetMap: { [setName: string]: IValueData[] } = {};

	isApplicable(languageId: string): boolean {
		return true;
	}

	constructor(private readonly id: string, customData: WXMLData) {
		this._tags = customData.tags || [];
		this._globalAttributes = customData.globalAttributes || [];
		this._globalEvents = customData.globalEvents || [];

		this._tags.forEach(t => {
			this._tagMap[t.name.toLowerCase()] = t;
		});

		if (customData.valueSets) {
			customData.valueSets.forEach(vs => {
				this._valueSetMap[vs.name] = vs.values;
			});
		}
	}

	getId() {
		return this.id;
	}

	provideTags() {
		return this._tags;
	}

	provideAttributes(tag: string) {
		const attributes: IAttributeData[] = [];
		const processAttribute = (a: IAttributeData) => {
			const obj = {...a};
			const values = this.provideValues(tag, a.name);
			if (a.description && values?.length) {
				const createDesc = (desc: string, values: IValueData[]) => {
					return desc + '\n' +values.reduce((pre, cur, index, source) => {
						if (cur.description) {
							pre += `*   \`${cur.name}\`：`;
							pre += typeof cur.description === 'object' ? cur.description.value : cur.description;
							if (index < source.length -1) pre += '\n';
						}
						return pre;
					}, '');
				};
				const descType = typeof obj.description;
				if (descType === 'string') {
					obj.description = createDesc(<string>obj.description, values);
				} else if (descType === 'object') {
					obj.description = {
						...(<MarkupContent>obj.description),
						value: createDesc((<MarkupContent>obj.description).value, values)
					};
				}
				
			}
			attributes.push(obj);
		};

		const tagEntry = this._tagMap[tag.toLowerCase()];
		if (tagEntry) {
			tagEntry.attributes.forEach(processAttribute);
			this._globalAttributes.forEach(processAttribute);
		}

		return attributes;
	}

	provideEvents(tag: string) {
		const events: IEventData[] = [];
		const processEvent = (e: IEventData) => {
			events.push(e);
		};
		const tagEntry = this._tagMap[tag.toLowerCase()];
		if (tagEntry) {
			tagEntry.events.forEach(processEvent);
			this._globalEvents.forEach(processEvent);
		}

		return events;
	}

	provideValues(tag: string, attribute: string) {
		const values: IValueData[] = [];

		attribute = attribute.toLowerCase();

		const processAttributes = (attributes: IAttributeData[]) => {
			attributes.forEach(a => {
				if (a.name.toLowerCase() === attribute) {
					if (a.values) {
						a.values.forEach(v => {
							values.push(v);
						});
					}
					if (a.valueSet) {
						if (this._valueSetMap[a.valueSet]) {
							this._valueSetMap[a.valueSet].forEach(v => {
								values.push(v);
							});
						}
					}
				}
			});
		};

		const tagEntry = this._tagMap[tag.toLowerCase()];
		if (tagEntry) {
			processAttributes(tagEntry.attributes);
			processAttributes(this._globalAttributes);
		}

		return values;
	}
}

/**
 * Generate Documentation used in hover/complete
 * From `documentation` and `references`
 */
export function generateDocumentation(item: ITagData | IAttributeData | IValueData, settings: { documentation?: boolean; references?: boolean; } = {}, doesSupportMarkdown: boolean): MarkupContent | undefined {
	const result: MarkupContent = {
		kind: doesSupportMarkdown ? 'markdown' : 'plaintext',
		value: ''
	};

	if (item.description && settings.documentation !== false) {
		const normalizedDescription = normalizeMarkupContent(item.description);
		if (normalizedDescription) {
			result.value += normalizedDescription.value;
		}
	}

	if (item.references && item.references.length > 0 && settings.references !== false) {
		if (result.value.length) {
			result.value += `\n\n`;
		}
		if (doesSupportMarkdown) {
			result.value += item.references.map(r => {
				return `[${r.name}](${r.url})`;
			}).join(' | ');
		} else {
			result.value += item.references.map(r => {
				return `${r.name}: ${r.url}`;
			}).join('\n');
		}
	}

	if (result.value === '') {
		return undefined;
	}

	return result;
}