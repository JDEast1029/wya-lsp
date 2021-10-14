const inputProps: string[] = [
	"value", "placeholder", "placeholderStyle", "placeholderClass", "disabled", "maxlength", "cursorSpacing", "autoFocus", "focus", "cursor", "selectionStart", "selectionEnd", "adjustPosition", "holdKeyboard", "type", "readonly",
];
const recycleCoreListProps: string[] = ["height", "show", "scroll", "showScrollStatus", "scrollTop", "disabled", "lowerThreshold", "listenScroll", "total", "current"];

export const MC_TAGS_MAP = new Map([
	['mc-action-sheet', {
		props: ['visible', 'cancelText', 'title', 'description', 'actions', 'closeOnClickAction'],
		event: ['sure', 'cancel', 'close', 'select']
	}],
	['mc-button', {
		props: ['id', 'type', 'disabled', 'square', 'circle', 'size', 'openType', 'long', 'plain', 'wait', 'icon', 'color', 'lang', 'businessId', 'sessionFrom', 'sendMessageTitle', 'sendMessagePath', 'sendMessageImg', 'showMessageCard', 'appParameter', 'ariaLabel'],
		event: ['click', 'getuserinfo', 'getphonenumber', 'error', 'launchapp', 'opensetting']
	}],
	['mc-cascader', {
		props: ["content-class", "dataSource", "useTabs", "title", "cancelText", "okText", "showToolbar", "value", "label", "labelWidth", "tag", "useItemSlot", "border", "extra", "disabled"],
		event: ['change', 'cancel', 'close']
	}],
	['mc-checkbox', {
		props: ["disabled", "value", "shape", "color", "label", "indeterminate", "name"],
		event: ['change']
	}],
	['mc-checkbox-group', {
		props: ["disabled", "value"],
		event: []
	}],
	['mc-collapse', {
		props: ['value', 'accordion'],
		event: ['change']
	}],
	['mc-collapse-item', {
		props: ['content-class', 'name'],
		event: []
	}],
	['mc-count-down', {
		props: ["useSlot", "targetTime", "serverTime", "format", "auto"],
		event: ['change', 'finish']
	}],
	['mc-date-picker', {
		props: ["content-class", "indicatorStyle", "indicatorClass", "mode", "minDate", "maxDate", "title", "cancelText", "okText", "showToolbar", "value", "defaultValue", "label", "labelWidth", "tag", "useItemSlot", "border", "extra", "disabled"],
		event: ['cancel', 'change', 'close', 'cancel'],
	}],
	['mc-dropdown-menu', {
		props: ["activeColor", "mask", "zIndex", "duration", "direction", "maskCloseable", "closeOnClickOutside"],
		event: []
	}],
	['mc-dropdown-item', {
		props: ["value", "title", "disabled", "titleClass", "options"],
		event: ['change', 'close']
	}],
	['mc-echarts', {
		props: ['elementId', 'echarts', 'options', 'lazy'],
		event: []
	}],
	['mc-form', {
		props: ['model', 'rules', 'labelWidth', 'border', 'showMessage', 'labelPosition'],
		event: ['ready']
	}],
	['mc-form-item', {
		props: ['label-class', 'content-class', "label", "labelWidth", "labelPosition", "useLabelSlot", "prop", "required", "rules", "labelFor", "indent"],
		event: []
	}],
	['mc-icon', {
		props: ['type', 'inherit'],
		event: ['click']
	}],
	['mc-image', {
		props: ["src", "round", "width", "height", "radius", "lazyLoad", "useErrorSlot", "useLoadingSlot", "showMenuByLongpress", "fit", "showError", "showLoading", "alt"],
		event: []
	}],
	['mc-imgs-crop', {
		props: ["src", "scale", "rotate", "border", "height", "width", "color", "position", "elementId"],
		event: []
	}],
	['mc-input', {
		props: [...inputProps, 'mc-input-class', "password", "confirmType", "confirmHold", "useClearSlot", "clearable", "right", "usePrependSlot", "useAppendSlot", "autoHeight", "fixed", "showConfirmBar", "textareaStyle", "viewPlaceholder"],
		event: ['blur', 'focus', 'confirm', 'keyboardheightchange', 'linechange', 'clear', 'input', 'change']
	}],
	['mc-input-search', {
		props: [...inputProps, 'mc-input-class', 'cancelText', 'showCancel'],
		event: ['blur', 'focus', 'confirm', 'keyboardheightchange', 'clear', 'input', 'change']
	}],
	['mc-list', {
		props: ['title', 'border', 'labelWidth'],
		event: []
	}],
	['mc-list-item', {
		props: ['label-class', 'wrapper-class', 'content-class', "label", "labelWidth", "content", "url", "leftIcon", "arrow", "useLeftIconSlot", "indent", "linkType", "border", "borderIndent", "disabled"],
		event: ['click']
	}],
	['mc-modal', {
		props: ['wrapper-class', "visible", "mode", "mask", "maskClosable", "maskStyle", "zIndex", "title", "content", "okText", "cancelText", "footer", "actions"],
		event: ['close', 'ok', 'cancel']
	}],
	['mc-notice-bar', {
		props: ["text", "mode", "url", "openType", "closePosition", "delay", "speed", "scrollable", "color", "backgroundColor", "wrapable"],
		event: []
	}],
	['mc-number-dance', {
		props: ["value", "mode", "scrollType", "duration", "itemStyle", "numberStyle", "delay", "separator", "separatorStyle", "decimalStyle"],
		event: []
	}],
	['mc-number-dance-item', {
		props: ["value", "mode", "scrollType", "duration", "itemStyle", "numberStyle"],
		event: []
	}],
	['mc-picker', {
		props: ['content-class', "dataSource", "cols", "indicatorStyle", "indicatorClass", "title", "cancelText", "okText", "showToolbar", "value", "label", "labelWidth", "tag", "useItemSlot", "border", "extra", "disabled"],
		event: ['cancel', 'change', 'close']
	}],
	['mc-popup', {
		props: ['enter-class', 'enter-to-class', 'leave-class', 'leave-active-class', 'leave-to-class', "placement", "closeable", "closeIconPosition", "maskStyle", "zIndex"],
		event: ['close']
	}],
	['mc-radio', {
		props: ["disabled", "value", "label", "color", "name", "iconStyle"],
		event: ['change']
	}],
	['mc-radio-group', {
		props: ["disabled", "value"],
		event: []
	}],
	['mc-recycle-list', {
		props: [...recycleCoreListProps, 'pull-down-class', 'pull-up-class', 'core-class', "pauseY", "refreshHeight", "pull"],
		event: ['loadData', 'scroll']
	}],
	['mc-recycle-list-core', {
		props: [...recycleCoreListProps, 'pull-up-class', 'total', ],
		event: ['ready', 'loadData', 'scroll']
	}],
	['mc-rich-text', {
		props: ['value', 'imagePadding'],
		event: []
	}],
	['mc-slider', {
		props: ["value", "disabled", "useButtonSlot", "activeColor", "inactiveColor", "max", "min", "step", "barHeight"],
		event: ['drag-start', 'drag-end', 'drag', 'change']
	}],
	['mc-spin', {
		props: ["size", "color", "useLoadingSlot", "fixed"],
		event: []
	}],
	['mc-stepper', {
		props: ['input-class', 'plus-class', 'minus-class', "value", "integer", "disabled", "inputWidth", "buttonSize", "async", "disableInput", "decimalLength", "min", "max", "step", "forceStep", "showPlus", "showMinus", "disablePlus", "disableMinus"],
		event: ['focus', 'blur', 'tip', 'overlimit', 'type', 'change', 'async']
	}],
	['mc-sticky', {
		props: ["offsetTop", "zIndex", "disabled"],
		event: []
	}],
	['mc-swipe-action', {
		props: ["left", "right", "threshold", "disabled", "autoClose"],
		event: ['action', 'status', 'open']
	}],
	['mc-switch', {
		props: ['content-class', 'inner-class', "value", "disabled", "loading", "activeColor", "inactiveColor", "trueValue", "falseValue", "openText", "closeText", "async"],
		event: ['click', 'change']
	}],
	['mc-tabs', {
		props: ['nav-class', 'tab-class', 'tab-active-class', 'line-class', "color", "sticky", "animated", "swipeable", "lineWidth", "lineHeight", "titleActiveColor", "titleInactiveColor", "active", "type", "border", "ellipsis", "duration", "zIndex", "swipeThreshold", "offsetTop", "lazyRender"],
		event: ['disabled', 'click', 'scroll']
	}],
	['mc-tabs-pane', {
		props: ["dot", "info", "title", "disabled", "titleStyle", "name"],
		event: []
	}],
	['mc-time-picker', {
		props: ['content-class', "indicatorStyle", "indicatorClass", "mode", "title", "cancelText", "okText", "showToolbar", "value", "defaultValue", "label", "labelWidth", "tag", "useItemSlot", "border", "extra", "disabled"],
		event: ['cancel', 'change', 'close']
	}],
	['mc-upload', {
		props: ["disabled", "multiple", "url", "headers", "name", "mode", "accept", "size", "max", "sizeType", "sourceType", "compressed", "maxDuration", "camera", "parallel", "fns"],
		event: ['ready']
	}],
	['mc-upload-picker', {
		props: ["disabled", "max", "uploadText", "previewSize", "name", "dataSource", "picker", "previewVideo", "previewImage", "previewFullImage", "imageFit", "uploadOpts", "useReady"],
		event: ['ready', 'change']
	}],
	['mc-video', {
		props: ["spinOpts", "playStyle", "src", "autoplay", "poster", "showCenterPlayBtn", "showMuteBtn", "showPlayBtn", "showFullscreenBtn", "controls", "pictureInPictureMode"],
		event: []
	}],
]);

export const MC_COMMON_PROPS: string[] = [
	'mc-class', 'mcStyle'
];