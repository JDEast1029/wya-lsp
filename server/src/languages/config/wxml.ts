import { MC_TAGS_MAP } from './mc-tags';

/* wxml tags */
export const VIEW_CONTAINER_TAGS = new Map([
	[
		'cover-image',
		{
			props: ['src', 'referrer-policy'],
			events: ['load', 'error'],
			propsOptional: new Map([
				['referrer-policy', ['origin', 'no-referrer']]
			])
		}
	],
	[
		'cover-view',
		{
			props: ['scroll-top'],
			events: [],
			propsOptional: new Map([])
		}
	],
	[
		'match-media',
		{
			props: ['min-width', 'max-width', 'width', 'min-height', 'max-height', 'height', 'orientation'],
			events: [],
			propsOptional: new Map([
				['orientation', ['landscape', 'portrait']]
			])
		}
	],
	[
		'moveable-area',
		{
			props: ['scale-area'],
			events: [],
			propsOptional: new Map([])
		}
	],
	[
		'moveable-view',
		{
			props: ["direction", "inertia", "out-of-bounds", "x", "y", "damping", "friction", "disabled", "scale", "scale-min", "scale-max", "scale-value", "animation"],
			events: ["change", "scale", "htouchmove", "vtouchmove"],
			propsOptional: new Map([
				['direction', ['all','vertical','horizontal','none']],
				["inertia",["true","false"]],
				["out-of-bounds",["true","false"]],
				["disabled",["true","false"]],
				["scale",["true","false"]],
				["animation",["true","false"]]
			])
		}
	],
	[
		'page-container',
		{ 
			props: ["duration", "z-index", "position", "overlay-style", "custom-style", "show", "overlay", "round", "close-on-slideDown"], 
			events: ["beforeenter", "enter", "afterenter", "beforeleave", "leave", "afterleave", "clickoverlay"], 
			propsOptional: new Map([
				["position", ["top", "bottom", "right", "center"]],
				["show", ["true", "false"]], 
				["overlay", ["true", "false"]], 
				["round", ["true", "false"]], 
				["close-on-slideDown", ["true", "false"]]
			]) 
		}
	],
	[
		'scroll-view',
		{
			props: ["upper-threshold","lower-threshold","scroll-top","scroll-left","scroll-into-view","refresher-threshold","refresher-default-style","refresher-background", "scroll-x", "scroll-y", "scroll-with-animation", "enable-back-to-top", "enable-flex", "scroll-anchoring", "refresher-enabled", "refresher-triggered", "enhanced", "bounces", "show-scrollbar", "paging-enabled", "fast-deceleration"],
			events: ["dragstart","dragging","dragend","scrolltoupper","scrolltolower","scroll","refresherpulling","refresherrefresh","refresherrestore","refresherabort"],
			propsOptional: new Map([
				["refresher-default-style", ["black", "white", "none"]],
				["scroll-x",["true","false"]],
				["scroll-y",["true","false"]],
				["scroll-with-animation",["true","false"]],
				["enable-back-to-top",["true","false"]],
				["enable-flex",["true","false"]],
				["scroll-anchoring",["true","false"]],
				["refresher-enabled",["true","false"]],
				["refresher-triggered",["true","false"]],
				["enhanced",["true","false"]],
				["bounces",["true","false"]],
				["show-scrollbar",["true","false"]],
				["paging-enabled",["true","false"]],
				["fast-deceleration",["true","false"]]
			])
		}
	],
	[
		'share-element',
		{
			props: ["key","duration","easing-function", "transform"],
			events: [],
			propsOptional: new Map([
				["transform",["true","false"]]
			])
		}
	],
	[
		'swiper',
		{
			props: ["indicator-color","indicator-active-color","current","interval","duration","previous-margin","next-margin","display-multiple-items","easing-function", "indicator-dots", "autoplay", "circular", "vertical", "snap-to-edge"],
			events: ["change","transition","animationfinish"],
			propsOptional: new Map([
				["indicator-dots",["true","false"]],
				["autoplay",["true","false"]],
				["circular",["true","false"]],
				["vertical",["true","false"]],
				["snap-to-edge",["true","false"]]
			])
		}
	],
	[
		'swiper-item',
		{
			props: ['item-id', "skip-hidden-item-layout"],
			events: [],
			propsOptional: new Map([
				["skip-hidden-item-layout",["true","false"]]
			])
		}
	],
	[
		'view',
		{
			props: ['hover-class', 'hover-start-time', 'hover-stay-time', "hover-stop-propagation"],
			events: [],
			propsOptional: new Map([
				["hover-stop-propagation",["true","false"]]
			])
		}
	],
]);
export const BASIC_TAGS = new Map([
	[
		'icon', 
		{
			props: ['type', 'size', 'color'],
			events: [],
			propsOptional: new Map([
				['icon', ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear']]
			])
		}
	],
	[
		'progress', 
		{
			props: ['percent', 'border-radius', 'font-size', 'stroke-width', 'color', 'activeColor', 'backgroundColor', 'active-mode', 'duration', "show-info", 'active'],
			events: ['activeend'],
			propsOptional: new Map([
				["show-info",["true","false"]],
				["active",["true","false"]]
			])
		}
	],
	[
		'rich-text', 
		{
			props: ['nodes', 'space'],
			events: [],
			propsOptional: new Map([

			])
		}
	],
	[
		'text', 
		{
			props: ['space', "selectable", "user-select", "decode"],
			events: [],
			propsOptional: new Map([
				["space", ["ensp", "emsp", "nbsp"]],
				["selectable",["true","false"]],
				["user-select",["true","false"]],
				["decode",["true","false"]]
			])
		}
	],
]);
export const FORM_TAGS = new Map([
	[
		'button',
		{
			props: ['size', 'type', 'form-type', 'open-type', 'hover-class', 'hover-start-time', 'hover-stay-time', 'lang', 'session-from', 'send-message-title', 'send-message-path', 'send-message-img', 'app-parameter',"plain", "disabled", "loading", "hover-stop-propagation", "show-message-card"],
			events: ['getuserinfo', 'contact', 'getphonenumber', 'error', 'opensetting', 'launchapp'],
			propsOptional: new Map([
				["plain",["true","false"]],
				["disabled",["true","false"]],
				["loading",["true","false"]],
				["hover-stop-propagation",["true","false"]],
				["show-message-card",["true","false"]],
			])
		}
	],
	[
		'checkbox',
		{
			props: ['value', 'color', "disabled", "checked"],
			events: [],
			propsOptional: new Map([
				["disabled",["true","false"]],
				["checked",["true","false"]],
			])
		}
	],
	[
		'checkbox-group',
		{
			props: [],
			events: ['change'],
			propsOptional: new Map([])
		}
	],
	[
		'editor',
		{
			props: ['read-only', 'placeholder', 'show-img-size', 'show-img-toolbar', 'show-img-resize'],
			events: ['ready', 'focus', 'blur', 'input', 'statuschange'],
			propsOptional: new Map([
				["read-only",["true","false"]],["show-img-size",["true","false"]],["show-img-toolbar",["true","false"]],["show-img-resize",["true","false"]]
			])
		}
	],
	[
		'form',
		{
			props: ['report-submit', 'report-submit-timeout'],
			events: ['submit', 'reset'],
			propsOptional: new Map([
				["report-submit",["true","false"]]
			])
		}
	],
	[
		'input',
		{
			props: ['value', 'type', 'password', 'placeholder', 'placeholder-style', 'placeholder-class', 'disabled', 'maxlength', 'cursor-spacing', 'auto-focus', 'focus', 'confirm-type', 'always-embed', 'confirm-hold', 'cursor', 'selection-start', 'selection-end', 'adjust-position', 'hold-keyboard', 'safe-password-cert-path', 'safe-password-length', 'safe-password-time-stamp', 'safe-password-nonce', 'safe-password-salt', 'safe-password-custom-hash'],
			events: ['input', 'focus', 'blur', 'confirm', 'keyboardheightchange'],
			propsOptional: new Map([
				["password",["true","false"]],["disabled",["true","false"]],["auto-focus",["true","false"]],["focus",["true","false"]],["always-embed",["true","false"]],["confirm-hold",["true","false"]],["adjust-position",["true","false"]],["hold-keyboard",["true","false"]]
			])
		}
	],
	[
		'keyboard-accessory',
		{
			props: [],
			events: [],
			propsOptional: new Map([])
		}
	],
	[
		'label',
		{
			props: ['for'],
			events: [],
			propsOptional: new Map([])
		}
	],
	[
		'picker',
		{
			props: ['header-text', 'mode', 'disabled'],
			events: ['cancel'],
			propsOptional: new Map([
				["disabled",["true","false"]]
			])
		}
	],
	[
		'picker-view',
		{
			props: ['value', 'indicator-style', 'indicator-class', 'mask-style', 'mask-class'],
			events: ['change', 'pickstart', 'pickend'],
			propsOptional: new Map([])
		}
	],
	[
		'picker-view-column',
		{
			props: [],
			events: [],
			propsOptional: new Map([])
		}
	],
	[
		'radio',
		{
			props: ['value', 'checked', 'disabled', 'color'],
			events: [],
			propsOptional: new Map([])
		}
	],
	[
		'radio-group',
		{
			props: [],
			events: ['change'],
			propsOptional: new Map([])
		}
	],
	[
		'slider',
		{
			props: ['min', 'max', 'step', 'disabled', 'value', 'color', 'selected-color', 'activeColor', 'backgroundColor', 'block-size', 'block-color', 'show-value'],
			events: ['change', 'changing'],
			propsOptional: new Map([
				["disabled",["true","false"]],["show-value",["true","false"]]
			])
		}
	],
	[
		'switch',
		{
			props: ['checked', 'disabled', 'type', 'color'],
			events: ['change'],
			propsOptional: new Map([
				['type', ['switch', 'checkbox']],
				["checked",["true","false"]],
				["disabled",["true","false"]]
			])
		}
	],
	[
		'textarea',
		{
			props: ['value', 'placeholder', 'placeholder-style', 'placeholder-class', 'disabled', 'maxlength', 'auto-focus', 'focus', 'auto-height', 'fixed', 'cursor-spacing', 'cursor', 'show-confirm-bar', 'selection-start', 'selection-end', 'adjust-position', 'hold-keyboard', 'disable-default-padding', 'confirm-type', 'confirm-hold']			,
			events: ['focus', 'blur', 'linechange', 'input', 'confirm', 'keyboardheightchange'],
			propsOptional: new Map([
				["disabled",["true","false"]],["auto-focus",["true","false"]],["focus",["true","false"]],["auto-height",["true","false"]],["fixed",["true","false"]],["show-confirm-bar",["true","false"]],["adjust-position",["true","false"]],["hold-keyboard",["true","false"]],["disable-default-padding",["true","false"]],["confirm-hold",["true","false"]]
			])
		}
	],
]);
export const NAVIGATION_TAGS = new Map([
	[
		'navigator',
		{
			props: ['target', 'url', 'open-type', 'delta', 'app-id', 'path', 'extra-data', 'version', 'short-link', 'hover-class', 'hover-stop-propagation', 'hover-start-time', 'hover-stay-time'],
			events: ['success', 'fail', 'complete'],
			propsOptional: new Map([
				["hover-stop-propagation",["true","false"]],
				['target', ['self', 'miniProgram']],
				['open-type', ['navigate', 'redirect', 'switchTab', 'reLaunch', 'navigateBack', 'exit']],
				['version', ['develop', 'trial', 'release']],
			])
		}
	],
	[
		'functional-page-navigator',
		{
			props: ['version', 'name', 'args'],
			events: ['success', 'fail', 'cancel'],
			propsOptional: new Map([
				['version', ['develop', 'trial', 'release']],
				['name', ['loginAndGetUserInfo', 'requestPayment', 'chooseAddress', 'chooseInvoice', 'chooseInvoiceTitle']]
			])
		}
	],
	[
		'navigation-bar',
		{
			props: ['title', 'loading', 'front-color', 'background-color', 'color-animation-duration', 'color-animation-timing-func'],
			events: [],
			propsOptional: new Map([
				["loading",["true","false"]],
				['front-color', ['#ffffff', '#000000']],
				['color-animation-timing-func', ['linear', 'easeIn', 'easeOut', 'easeInOut']]
			])
		}
	],
]);
export const MEDIA_TAGS = new Map([
	[
		'audio',
		{
			props: ['id', 'src', 'loop', 'controls', 'poster', 'name', 'author'],
			events: ['error', 'play', 'pause', 'timeupdate', 'ended'],
			propsOptional: new Map([
				["loop",["true","false"]],["controls",["true","false"]]
			])
		}
	],
	[
		'camera',
		{
			props: ['mode', 'resolution', 'device-position', 'flash', 'frame-size'],
			events: ['stop', 'error', 'initdone', 'scancode'],
			propsOptional: new Map([
				['mode', ['normal', 'scanCode']],
				['resolution', ['low', 'medium', 'high']],
				['device-position', ['front', 'back']],
				['flash', ['auto', 'on', 'off', 'torch']],
				['frame-size', ['small', 'medium', 'large']]
			])
		}
	],
	[
		'image',
		{
			props: ['src', 'mode', 'webp', 'lazy-load', 'show-menu-by-longpress'],
			events: ['error', 'load'],
			propsOptional: new Map([
				["webp",["true","false"]],["lazy-load",["true","false"]],["show-menu-by-longpress",["true","false"]],
				['mode', ['scaleToFill', 'aspectFit', 'aspectFill', 'widthFix', 'heightFix', 'top', 'bottom', 'center', 'left', 'right', 'top left', 'top right', 'bottom left', 'bottom right']]
			])
		}
	],
	[
		'live-player',
		{
			props: ['src', 'mode', 'autoplay', 'muted', 'orientation', 'object-fit', 'background-mute', 'min-cache', 'max-cache', 'sound-mode', 'auto-pause-if-navigate', 'auto-pause-if-open-native', 'picture-in-picture-mode', 'referrer-policy'],
			events: ['audiovolumenotify', 'enterpictureinpicture', 'leavepictureinpicture', 'statechange', 'fullscreenchange', 'netstatus'],
			propsOptional: new Map([
				["autoplay",["true","false"]],
				["muted",["true","false"]],
				["background-mute",["true","false"]],
				["auto-pause-if-navigate",["true","false"]],
				["auto-pause-if-open-native",["true","false"]],
				["mode", ["live", "RTC"]],
				["orientation", ["vertical", "horizontal"]],
				["object-fit", ["contain", "fillCrop"]],
				["sound-mode", ["speaker", "ear"]],
				["picture-in-picture-mode", ["[]", "push", "pop"]],
				["referrer-policy", ["origin", "no-referrer"]]
			])
		}
	],
	[
		'live-push',
		{
			props: ['url', 'mode', 'autopush', 'muted', 'enable-camera', 'auto-focus', 'orientation', 'beauty', 'whiteness', 'aspect', 'min-bitrate', 'max-bitrate', 'audio-quality', 'waiting-image', 'waiting-image-hash', 'zoom', 'device-position', 'background-mute', 'mirror', 'remote-mirror', 'local-mirror', 'audio-reverb-type', 'enable-mic', 'enable-agc', 'enable-ans', 'audio-volume-type', 'video-width', 'video-height', 'beauty-style', 'filter'],
			events: ['statechange', 'netstatus', 'error', 'bgmstart', 'bgmprogress', 'bgmcomplete', 'audiovolumenotify'],
			propsOptional: new Map([
				["autopush",["true","false"]],
				["muted",["true","false"]],
				["enable-camera",["true","false"]],
				["auto-focus",["true","false"]],
				["zoom",["true","false"]],
				["background-mute",["true","false"]],
				["mirror",["true","false"]],
				["remote-mirror",["true","false"]],
				["enable-mic",["true","false"]],
				["enable-agc",["true","false"]],
				["enable-ans",["true","false"]],
				["orientation", ["vertical", "horizontal"]],
				["local-mirror", ['auto', 'enable', 'disable']],
				["audio-reverb-type", ['0', '1', '2', '3', '4', '5', '6', '7']],
				["audio-volume-type", ['auto', 'media', 'voicecall']],
				["beauty-style", ['smooth', 'nature']],
				["filter", ['standard', 'pink', 'nostalgia', 'blues', 'romantic', 'cool', 'fresher', 'solor', 'aestheticism', 'whitening', 'cerisered']],
			])
		}
	],
	[
		'video',
		{
			props: ['src', 'duration', 'controls', 'danmu-list', 'danmu-btn', 'enable-danmu', 'autoplay', 'loop', 'muted', 'initial-time', 'page-gesture', 'direction', 'show-progress', 'show-fullscreen-btn', 'show-play-btn', 'show-center-play-btn', 'enable-progress-gesture', 'object-fit', 'poster', 'show-mute-btn', 'title', 'play-btn-position', 'enable-play-gesture', 'auto-pause-if-navigate', 'auto-pause-if-open-native', 'vslide-gesture', 'vslide-gesture-in-fullscreen', 'ad-unit-id', 'poster-for-crawler', 'show-casting-button', 'picture-in-picture-mode', 'picture-in-picture-show-progress', 'enable-auto-rotation', 'show-screen-lock-button', 'show-snapshot-button', 'show-background-playback-button', 'background-poster', 'referrer-policy', 'is-drm', 'provision-url', 'certificate-url', 'license-url'],
			events: ['enterpictureinpicture', 'leavepictureinpicture', 'seekcomplete', 'play', 'pause', 'ended', 'timeupdate', 'fullscreenchange', 'waiting', 'error', 'progress', 'loadedmetadata', 'controlstoggle'],
			propsOptional: new Map([
				["controls",["true","false"]],
				["danmu-btn",["true","false"]],
				["enable-danmu",["true","false"]],
				["autoplay",["true","false"]],
				["loop",["true","false"]],
				["muted",["true","false"]],
				["page-gesture",["true","false"]],
				["show-progress",["true","false"]],
				["show-fullscreen-btn",["true","false"]],
				["show-play-btn",["true","false"]],
				["show-center-play-btn",["true","false"]],
				["enable-progress-gesture",["true","false"]],
				["show-mute-btn",["true","false"]],
				["enable-play-gesture",["true","false"]],
				["auto-pause-if-navigate",["true","false"]],
				["auto-pause-if-open-native",["true","false"]],
				["vslide-gesture",["true","false"]],
				["vslide-gesture-in-fullscreen",["true","false"]],
				["show-casting-button",["true","false"]],
				["picture-in-picture-show-progress",["true","false"]],
				["enable-auto-rotation",["true","false"]],
				["show-screen-lock-button",["true","false"]],
				["show-snapshot-button",["true","false"]],
				["show-background-playback-button",["true","false"]],
				["is-drm",["true","false"]],
				["direction", ['0', '90', '-90']],
				["object-fit", ['contain', 'fill', 'cover']],
				["play-btn-position", ['bottom', 'center']],
				["picture-in-picture-mode", ['[]', 'push', 'pop']],
				["referrer-policy", ['origin', 'no-referrer']]
			])
		}
	],
	[
		'voip-room',
		{
			props: ['openid', 'mode', 'device-position'],
			events: ['error'],
			propsOptional: new Map([])
		}
	],
]);
export const MAP_TAGS = new Map([
	['map', {
		props: ['longitude', 'latitude', 'scale', 'min-scale', 'max-scale', 'markers', 'covers', 'polyline', 'circles', 'controls', 'include-points', 'show-location', 'polygons', 'subkey', 'layer-style', 'rotate', 'skew', 'enable-3D', 'show-compass', 'show-scale', 'enable-overlooking', 'enable-zoom', 'enable-scroll', 'enable-rotate', 'enable-satellite', 'enable-traffic', 'enable-poi', 'enable-building', 'setting'],
		events: ['tap', 'markertap', 'labeltap', 'controltap', 'callouttap', 'updated', 'regionchange', 'poitap', 'anchorpointtap'],
		propsOptional: new Map([
			["show-location",["true","false"]],
			["enable-3D",["true","false"]],
			["show-compass",["true","false"]],
			["show-scale",["true","false"]],
			["enable-overlooking",["true","false"]],
			["enable-zoom",["true","false"]],
			["enable-scroll",["true","false"]],
			["enable-rotate",["true","false"]],
			["enable-satellite",["true","false"]],
			["enable-traffic",["true","false"]],
			["enable-poi",["true","false"]],
			["enable-building",["true","false"]],
		])
	}]
]);
export const CANVAS_TAGS = new Map([
	['canvas', {
		props: ['type', 'canvas-id', 'disable-scroll'],
		events: ['touchstart', 'touchmove', 'touchend', 'touchcancel', 'longtap', 'error'],
		propsOptional: new Map([
			["disable-scroll",["true","false"]]
		])
	}]
]);
export const OPEN_TAGS = new Map([
	[
		'ad',
		{
			props: ['unit-id', 'ad-intervals', 'ad-type', 'ad-theme'],
			events: ['load', 'error', 'close'],
			propsOptional: new Map([])
		}
	],
	[
		'ad-custom',
		{
			props: ['unit-id', 'ad-intervals'],
			events: ['load', 'error'],
			propsOptional: new Map([])
		}
	],
	[
		'official-account',
		{
			props: [],
			events: ['load', 'error'],
			propsOptional: new Map([])
		}
	],
	[
		'open-data',
		{
			props: ['type', 'open-gid', 'lang', 'default-text', 'default-avatar'],
			events: ['error'],
			propsOptional: new Map([
				['type', ['groupName', 'userNickName', 'userAvatarUrl', 'userGender', 'userCity', 'userProvince', 'userCountry', 'userLanguage']],
				['lang', ['en', 'zh_CN', 'zh_TW']]
			])
		}
	],
	[
		'web-view',
		{
			props: ['src'],
			events: ['message', 'load', 'error'],
			propsOptional: new Map([])
		}
	],
]);
export const PAGE_CONFIG_TAGS = new Map([
	['page-meta', {
		props: ['background-text-style', 'background-color', 'background-color-top', 'background-color-bottom', 'root-background-color', 'scroll-top', 'scroll-duration', 'page-style', 'page-font-size', 'root-font-size', 'page-orientation'],
		events: ['resize', 'scroll', 'scrolldone'],
		propsOptional: new Map([])
	}]
]);

export const WXML_TAGS_MAP = new Map([
	...VIEW_CONTAINER_TAGS, ...BASIC_TAGS, ...FORM_TAGS, 
	...NAVIGATION_TAGS, ...MEDIA_TAGS, ...MAP_TAGS, ...CANVAS_TAGS,
	...OPEN_TAGS, ...PAGE_CONFIG_TAGS,
]);

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