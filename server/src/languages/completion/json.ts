export const CONFIG_SCHEMA_URI = 'wya://server/config.schema.json';
export const CONFIG_SCHEMA = {
	"type": "object",
	"properties": {
		"component": {
			"type": "boolean",
			"description": "设为自定义组件"
		},
		"componentPlaceholder": {
			"type": "object",
			"description": "指定占位组件"
		},
		"navigationBarBackgroundColor": {
			"type": "string",
			"description": "导航栏背景颜色，如 #000000"
		},
		"navigationBarTextStyle": {
			"type": "string",
			"enum": ["black", "white"],
			"description": "导航栏标题颜色，仅支持 black / white"
		},
		"navigationBarTitleText": {
			"type": "string",
			"description": "导航栏标题文字内容"
		},
		"navigationStyle": {
			"type": "string",
			"enum": ["default", "custom"],
			"description": "导航栏样式，仅支持以下值：\ndefault 默认样式\ncustom 自定义导航栏，只保留右上角胶囊按钮。"
		},
		"backgroundColor": {
			"type": "string",
			"description": "窗口的背景色"
		},
		"backgroundTextStyle": {
			"type": "string",
			"enum": ["dark", "light"],
			"description": "下拉 loading 的样式，仅支持 dark / light"
		},
		"backgroundColorTop": {
			"type": "string",
			"description": "顶部窗口的背景色，仅 iOS 支持"
		},
		"backgroundColorBottom": {
			"type": "string",
			"description": "底部窗口的背景色，仅 iOS 支持"
		},
		"enablePullDownRefresh": {
			"type": "boolean",
			"enum": [true, false],
			"description": "是否开启当前页面下拉刷新。"
		},
		"onReachBottomDistance": {
			"type": "string",
			"description": "页面上拉触底事件触发时距页面底部距离，单位为px。"
		},
		"pageOrientation": {
			"type": "string",
			"enum": ["auto", "portrait", "landscape"],
			"description": "屏幕旋转设置，支持 auto / portrait / landscape"
		},
		"disableScroll": {
			"type": "boolean",
			"enum": [true, false],
			"description": "设置为 true 则页面整体不能上下滚动。\n只在页面配置中有效，无法在 app.json 中设置"
		},
		"usingComponents": {
			"type": "object",
			"description": "页面自定义组件配置"
		},
		"initialRenderingCache": {
			"type": "string",
			"enum": ["static", "dynamic"],
			"description": "页面初始渲染缓存配置，支持 static / dynamic"
		},
		"style": {
			"type": "string",
			"description": "启用新版的组件样式"
		},
		"singlePage": {
			"type": "object",
			"description": "单页模式相关配置",
			"properties": {
				"navigationBarFit": {
					"type": "string",
					"enum": ["float", "squeezed"],
					"description": "导航栏与页面的相交状态，值为 float 时表示导航栏浮在页面上，与页面相交；值为 squeezed 时表示页面被导航栏挤压，与页面不相交"
				}
			}
		},
		"restartStrategy": {
			"type": "string",
			"enum": ["homePage", "homePageAndLatestPage"],
			"description": "重新启动策略配置"
		},
	}
};