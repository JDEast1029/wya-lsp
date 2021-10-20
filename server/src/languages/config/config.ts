export const CONFIG_FIELDS = new Map([
	['component', []],
	['componentPlaceholder', []],
	['navigationBarBackgroundColor', []],
	['navigationBarTextStyle', ['black', 'white']],
	['navigationBarTitleText', []],
	['navigationStyle', ['default', 'custom']],
	['backgroundColor', []],
	['backgroundTextStyle', ['dark', 'light']],
	['backgroundColorTop', []],
	['backgroundColorBottom', []],
	['enablePullDownRefresh', ['true', 'false']],
	['onReachBottomDistance', []],
	['pageOrientation', ['auto', 'portrait', 'landscape']],
	['disableScroll', ['true', 'false']],
	['usingComponents', []],
	['initialRenderingCache', ['static', 'dynamic']],
	['style', []],
	['singlePage', []],
	['restartStrategy', ['homePage', 'homePageAndLatestPage']],
]);

// 在singlePage内的字段
export const SINGLE_PAGE_FIELDS = new Map([
	['navigationBarFit', ['float', 'squeezed']],
]);