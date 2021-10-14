import { MC_TAGS_MAP } from './mc-tags';

/* wxml tags */
export const VIEW_CONTAINER_TAGS: string[] = [
	'cover-image',
	'cover-view',
	'match-media',
	'moveable-area',
	'moveable-view',
	'page-container',
	'scroll-view',
	'share-element',
	'swiper',
	'swiper-item',
	'view',
];
export const BASIC_TAGS: string[] = [
	'icon',
	'progress',
	'rich-text',
	'text',
];
export const FORM_TAGS: string[] = [
	'button',
	'checkbox',
	'checkbox-group',
	'editor',
	'form',
	'input',
	'keyboard-accessory',
	'label',
	'picker',
	'picker-view',
	'picker-view-column',
	'radio',
	'radio-group',
	'slider',
	'switch',
	'textarea',
];
export const NAVIGATION_TAGS: string[] = [
	'navigator',
	'functional-page-navigator',
	'navigation-bar'
];
export const MEDIA_TAGS: string[] = [
	'audio',
	'camera',
	'image',
	'live-player',
	'live-push',
	'video',
	'voip-room'
];
export const MAP_TAGS: string[] = ['map'];
export const CANVAS_TAGS: string[] = ['canvas'];
export const OPEN_TAGS: string[] = [
	'ad',
	'ad-custom',
	'official-account',
	'open-data',
	'web-view'
];
export const PAGE_CONFIG_TAGS: string[] = ['page-meta'];

export const WXML_TAGS: string[] = [
	...VIEW_CONTAINER_TAGS, ...BASIC_TAGS, ...FORM_TAGS, 
	...NAVIGATION_TAGS, ...MEDIA_TAGS, ...MAP_TAGS, ...CANVAS_TAGS,
	...OPEN_TAGS, ...PAGE_CONFIG_TAGS, ...MC_TAGS_MAP.keys()
];

export const CONDITION_GRAMMARS: string[] = [
	'wx:if',
	'wx:elif', 
	'wx:else',
];

export const LIST_GRAMMARS: string[] = [
	'wx:for',
	'wx:for-item', 
	'wx:for-index',
	'wx:key'
];