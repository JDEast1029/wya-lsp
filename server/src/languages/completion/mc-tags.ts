const inputProps: string[] = [
	"value", "placeholder", "placeholderStyle", "placeholderClass", "disabled", "maxlength", "cursorSpacing", "autoFocus", "focus", "cursor", "selectionStart", "selectionEnd", "adjustPosition", "holdKeyboard", "type", "readonly",
];
const recycleCoreListProps: string[] = ["height", "show", "scroll", "showScrollStatus", "scrollTop", "disabled", "lowerThreshold", "listenScroll", "total", "current"];

export const MC_TAGS_MAP = new Map([
	[
		'mc-action-sheet',
		{
			props: ['visible', 'cancelText', 'title', 'description', 'actions', 'closeOnClickAction'],
			events: ['sure', 'cancel', 'close', 'select'],
			propsOptional: new Map()
		}
	],
	[
		'mc-button',
		{
			props: ['id', 'type', 'disabled', 'square', 'circle', 'size', 'openType', 'long', 'plain', 'wait', 'icon', 'color', 'lang', 'businessId', 'sessionFrom', 'sendMessageTitle', 'sendMessagePath', 'sendMessageImg', 'showMessageCard', 'appParameter', 'ariaLabel'],
			events: ['click', 'getuserinfo', 'getphonenumber', 'error', 'launchapp', 'opensetting'],
			propsOptional: new Map()
		}
	],
	[
		'mc-cascader',
		{
			props: ["content-class", "dataSource", "useTabs", "title", "cancelText", "okText", "showToolbar", "value", "label", "labelWidth", "tag", "useItemSlot", "border", "extra", "disabled"],
			events: ['change', 'cancel', 'close'],
			propsOptional: new Map()
		}
	],
	[
		'mc-checkbox',
		{
			props: ["disabled", "value", "shape", "color", "label", "indeterminate", "name"],
			events: ['change'],
			propsOptional: new Map()
		}
	],
	[
		'mc-checkbox-group',
		{
			props: ["disabled", "value"],
			events: [],
			propsOptional: new Map()
		}
	],
	[
		'mc-collapse',
		{
			props: ['value', 'accordion'],
			events: ['change'],
			propsOptional: new Map()
		}
	],
	[
		'mc-collapse-item',
		{
			props: ['content-class', 'name'],
			events: [],
			propsOptional: new Map()
		}
	],
	[
		'mc-count-down',
		{
			props: ["useSlot", "targetTime", "serverTime", "format", "auto"],
			events: ['change', 'finish'],
			propsOptional: new Map()
		}
	],
	[
		'mc-date-picker',
		{
			props: ["content-class", "indicatorStyle", "indicatorClass", "mode", "minDate", "maxDate", "title", "cancelText", "okText", "showToolbar", "value", "defaultValue", "label", "labelWidth", "tag", "useItemSlot", "border", "extra", "disabled"],
			events: ['cancel', 'change', 'close', 'cancel'],
			propsOptional: new Map()
		}
	],
	[
		'mc-dropdown-menu',
		{
			props: ["activeColor", "mask", "zIndex", "duration", "direction", "maskCloseable", "closeOnClickOutside"],
			events: [],
			propsOptional: new Map()
		}
	],
	[
		'mc-dropdown-item',
		{
			props: ["value", "title", "disabled", "titleClass", "options"],
			events: ['change', 'close'],
			propsOptional: new Map()
		}
	],
	[
		'mc-echarts',
		{
			props: ['elementId', 'echarts', 'options', 'lazy'],
			events: [],
			propsOptional: new Map()
		}
	],
	[
		'mc-form',
		{
			props: ['model', 'rules', 'labelWidth', 'border', 'showMessage', 'labelPosition'],
			events: ['ready'],
			propsOptional: new Map()
		}
	],
	[
		'mc-form-item',
		{
			props: ['label-class', 'content-class', "label", "labelWidth", "labelPosition", "useLabelSlot", "prop", "required", "rules", "labelFor", "indent"],
			events: [],
			propsOptional: new Map()
		}
	],
	[
		'mc-icon',
		{
			props: ['type', 'inherit'],
			events: ['click'],
			propsOptional: new Map()
		}
	],
	[
		'mc-image',
		{
			props: ["src", "round", "width", "height", "radius", "lazyLoad", "useErrorSlot", "useLoadingSlot", "showMenuByLongpress", "fit", "showError", "showLoading", "alt"],
			events: [],
			propsOptional: new Map()
		}
	],
	[
		'mc-imgs-crop',
		{
			props: ["src", "scale", "rotate", "border", "height", "width", "color", "position", "elementId"],
			events: [],
			propsOptional: new Map()
		}
	],
	[
		'mc-input',
		{
			props: [...inputProps, 'mc-input-class', "password", "confirmType", "confirmHold", "useClearSlot", "clearable", "right", "usePrependSlot", "useAppendSlot", "autoHeight", "fixed", "showConfirmBar", "textareaStyle", "viewPlaceholder"],
			events: ['blur', 'focus', 'confirm', 'keyboardheightchange', 'linechange', 'clear', 'input', 'change'],
			propsOptional: new Map()
		}
	],
	[
		'mc-input-search',
		{
			props: [...inputProps, 'mc-input-class', 'cancelText', 'showCancel'],
			events: ['blur', 'focus', 'confirm', 'keyboardheightchange', 'clear', 'input', 'change'],
			propsOptional: new Map()
		}
	],
	[
		'mc-list',
		{
			props: ['title', 'border', 'labelWidth'],
			events: [],
			propsOptional: new Map()
		}
	],
	[
		'mc-list-item',
		{
			props: ['label-class', 'wrapper-class', 'content-class', "label", "labelWidth", "content", "url", "leftIcon", "arrow", "useLeftIconSlot", "indent", "linkType", "border", "borderIndent", "disabled"],
			events: ['click'],
			propsOptional: new Map()
		}
	],
	[
		'mc-modal',
		{
			props: ['wrapper-class', "visible", "mode", "mask", "maskClosable", "maskStyle", "zIndex", "title", "content", "okText", "cancelText", "footer", "actions"],
			events: ['close', 'ok', 'cancel'],
			propsOptional: new Map()
		}
	],
	[
		'mc-notice-bar',
		{
			props: ["text", "mode", "url", "openType", "closePosition", "delay", "speed", "scrollable", "color", "backgroundColor", "wrapable"],
			events: [],
			propsOptional: new Map()
		}
	],
	[
		'mc-number-dance',
		{
			props: ["value", "mode", "scrollType", "duration", "itemStyle", "numberStyle", "delay", "separator", "separatorStyle", "decimalStyle"],
			events: [],
			propsOptional: new Map()
		}
	],
	[
		'mc-number-dance-item',
		{
			props: ["value", "mode", "scrollType", "duration", "itemStyle", "numberStyle"],
			events: [],
			propsOptional: new Map()
		}
	],
	[
		'mc-picker',
		{
			props: ['content-class', "dataSource", "cols", "indicatorStyle", "indicatorClass", "title", "cancelText", "okText", "showToolbar", "value", "label", "labelWidth", "tag", "useItemSlot", "border", "extra", "disabled"],
			events: ['cancel', 'change', 'close'],
			propsOptional: new Map()
		}
	],
	[
		'mc-popup',
		{
			props: ['enter-class', 'enter-to-class', 'leave-class', 'leave-active-class', 'leave-to-class', "placement", "closeable", "closeIconPosition", "maskStyle", "zIndex"],
			events: ['close'],
			propsOptional: new Map()
		}
	],
	[
		'mc-radio',
		{
			props: ["disabled", "value", "label", "color", "name", "iconStyle"],
			events: ['change'],
			propsOptional: new Map()
		}
	],
	[
		'mc-radio-group',
		{
			props: ["disabled", "value"],
			events: [],
			propsOptional: new Map()
		}
	],
	[
		'mc-recycle-list',
		{
			props: [...recycleCoreListProps, 'pull-down-class', 'pull-up-class', 'core-class', "pauseY", "refreshHeight", "pull"],
			events: ['loadData', 'scroll'],
			propsOptional: new Map()
		}
	],
	[
		'mc-recycle-list-core',
		{
			props: [...recycleCoreListProps, 'pull-up-class', 'total', ],
			events: ['ready', 'loadData', 'scroll'],
			propsOptional: new Map()
		}
	],
	[
		'mc-rich-text',
		{
			props: ['value', 'imagePadding'],
			events: [],
			propsOptional: new Map()
		}
	],
	[
		'mc-slider',
		{
			props: ["value", "disabled", "useButtonSlot", "activeColor", "inactiveColor", "max", "min", "step", "barHeight"],
			events: ['drag-start', 'drag-end', 'drag', 'change'],
			propsOptional: new Map()
		}
	],
	[
		'mc-spin',
		{
			props: ["size", "color", "useLoadingSlot", "fixed"],
			events: [],
			propsOptional: new Map()
		}
	],
	[
		'mc-stepper',
		{
			props: ['input-class', 'plus-class', 'minus-class', "value", "integer", "disabled", "inputWidth", "buttonSize", "async", "disableInput", "decimalLength", "min", "max", "step", "forceStep", "showPlus", "showMinus", "disablePlus", "disableMinus"],
			events: ['focus', 'blur', 'tip', 'overlimit', 'type', 'change', 'async'],
			propsOptional: new Map()
		}
	],
	[
		'mc-sticky',
		{
			props: ["offsetTop", "zIndex", "disabled"],
			events: [],
			propsOptional: new Map()
		}
	],
	[
		'mc-swipe-action',
		{
			props: ["left", "right", "threshold", "disabled", "autoClose"],
			events: ['action', 'status', 'open'],
			propsOptional: new Map()
		}
	],
	[
		'mc-switch',
		{
			props: ['content-class', 'inner-class', "value", "disabled", "loading", "activeColor", "inactiveColor", "trueValue", "falseValue", "openText", "closeText", "async"],
			events: ['click', 'change'],
			propsOptional: new Map()
		}
	],
	[
		'mc-tabs',
		{
			props: ['nav-class', 'tab-class', 'tab-active-class', 'line-class', "color", "sticky", "animated", "swipeable", "lineWidth", "lineHeight", "titleActiveColor", "titleInactiveColor", "active", "type", "border", "ellipsis", "duration", "zIndex", "swipeThreshold", "offsetTop", "lazyRender"],
			events: ['disabled', 'click', 'scroll'],
			propsOptional: new Map()
		}
	],
	[
		'mc-tabs-pane',
		{
			props: ["dot", "info", "title", "disabled", "titleStyle", "name"],
			events: [],
			propsOptional: new Map()
		}
	],
	[
		'mc-time-picker',
		{
			props: ['content-class', "indicatorStyle", "indicatorClass", "mode", "title", "cancelText", "okText", "showToolbar", "value", "defaultValue", "label", "labelWidth", "tag", "useItemSlot", "border", "extra", "disabled"],
			events: ['cancel', 'change', 'close'],
			propsOptional: new Map()
		}
	],
	[
		'mc-upload',
		{
			props: ["disabled", "multiple", "url", "headers", "name", "mode", "accept", "size", "max", "sizeType", "sourceType", "compressed", "maxDuration", "camera", "parallel", "fns"],
			events: ['ready'],
			propsOptional: new Map()
		}
	],
	[
		'mc-upload-picker',
		{
			props: ["disabled", "max", "uploadText", "previewSize", "name", "dataSource", "picker", "previewVideo", "previewImage", "previewFullImage", "imageFit", "uploadOpts", "useReady"],
			events: ['ready', 'change'],
			propsOptional: new Map()
		}
	],
	[
		'mc-video',
		{
			props: ["spinOpts", "playStyle", "src", "autoplay", "poster", "showCenterPlayBtn", "showMuteBtn", "showPlayBtn", "showFullscreenBtn", "controls", "pictureInPictureMode"],
			events: [],
			propsOptional: new Map()
		}
	],
]);

export const MC_COMMON_PROPS: string[] = [
	'mc-class', 'mcStyle'
];