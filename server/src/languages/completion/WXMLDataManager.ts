import { IAttributeData, ITagData, IValueData, IEventData } from '../modes/wxml/IWXMLLanguageTypes';
import { mcData } from './data/mcData';
import { wxmlData } from './data/wxmlData';
import { WXMLDataProvider } from './WXMLDataProvider';

export interface IWXMLDataProvider {
	getId(): string;
	isApplicable(languageId: string): boolean;
	provideTags(): ITagData[];
	provideAttributes(tag: string): IAttributeData[];
	provideEvents(tag: string): IEventData[];
	provideValues(tag: string, attribute: string): IValueData[];
}

export class WXMLDataManager {
	private dataProviders: IWXMLDataProvider[] = [];

	constructor(options: { useDefaultDataProvider: boolean, providers?: IWXMLDataProvider[] }) {
		this.setDataProviders(options.useDefaultDataProvider !== false, options.providers || []);
	}
	setDataProviders(builtIn: boolean, providers: IWXMLDataProvider[]) {
		this.dataProviders = [];
		if (builtIn) {
			this.dataProviders.push(new WXMLDataProvider('wxml', wxmlData));
			this.dataProviders.push(new WXMLDataProvider('mc', mcData));
		}
		this.dataProviders.push(...providers);
	}

	getDataProviders() {
		return this.dataProviders;
	}
}