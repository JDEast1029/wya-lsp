import { IAttributeData, IEventData } from '../../modes/wxml/IWXMLLanguageTypes';
export const commonValueSets = [
	{
		"name": "open-type",
		"values": [
			{ "name": "contact", "description": "打开客服会话，如果用户在会话中点击消息卡片后返回小程序，可以从 bindcontact 回调中获得具体信息" },
			{ "name": "share", "description": "触发用户转发" },
			{ "name": "getPhoneNumber", "description": "获取用户手机号，可以从bindgetphonenumber回调中获取到用户信息" },
			{ "name": "getUserInfo", "description": "获取用户信息，可以从bindgetuserinfo回调中获取到用户信息" },
			{ "name": "launchApp", "description": "打开APP，可以通过app-parameter属性设定向APP传的参数" },
			{ "name": "openSetting", "description": "打开授权设置页" },
			{ "name": "feedback", "description": "打开“意见反馈”页面，用户可提交反馈内容并上传日志，开发者可以登录小程序管理后台后进入左侧菜单“客服反馈”页面获取到反馈内容" },
		],
	},
	{
		"name": "boolean",
		"values": [
			{
				"name": "true"
			},
			{
				"name": "false"
			}
		]
	},
	{
		"name": "navigate-fn-type",
		"values": [
			{ "name": "switchTab", "description": "跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面" },
			{ "name": "reLaunch", "description": "关闭所有页面，打开到应用内的某个页面" },
			{ "name": "redirectTo", "description": "关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。" },
			{ "name": "navigateTo", "description": "保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层" },
			{ "name": "navigateBack", "description": "关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层" },
		]
	},
	{
		"name": "navigate-type",
		"values": [
			{
				"name": "navigate",
				"description": "对应 wx.navigateTo 或 wx.navigateToMiniProgram 的功能"
			},
			{
				"name": "redirect",
				"description": "对应 wx.redirectTo 的功能"
			},
			{
				"name": "switchTab",
				"description": "对应 wx.switchTab 的功能"
			},
			{
				"name": "reLaunch",
				"description": "对应 wx.reLaunch 的功能"
			},
			{
				"name": "navigateBack",
				"description": "对应 wx.navigateBack 的功能"
			},
			{
				"name": "exit",
				"description": "退出小程序，target=\"miniProgram\"时生效"
			}
		]
	},
	{
		"name": "lang",
		"values": [
			{ "name": "en", "description": "英文" },
			{ "name": "zh_CN", "description": "中文简体" },
			{ "name": "zh_TW", "description": "中文繁体" },
		],
	},
	{
		"name": "input-type",
		"values": [
			{ "name": "text", "description": "文本输入键盘" },
			{ "name": "number", "description": "数字输入键盘" },
			{ "name": "idcard", "description": "身份证输入键盘" },
			{ "name": "digit", "description": "带小数点的数字键盘" },
			{ "name": "safe-password", "description": "密码安全输入键盘" },
		]
	},
	{
		"name": "confirm-type",
		"values": [
			{
				"name": "send",
				"description": "右下角按钮为“发送”"
			},
			{
				"name": "search",
				"description": "右下角按钮为“搜索”"
			},
			{
				"name": "next",
				"description": "右下角按钮为“下一个”"
			},
			{
				"name": "go",
				"description": "右下角按钮为“前往”"
			},
			{
				"name": "done",
				"description": "右下角按钮为“完成”"
			}
		]
	},
];

export const buttonEvents: IEventData[] = [
	{
		"name": "contact",
		"description": "客服消息回调，open-type=\"contact\"时有效"
	},
	{
		"name": "getuserinfo",
		"description": "用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致，open-type=\"getUserInfo\"时有效"
	},
	{
		"name": "getphonenumber",
		"description": "获取用户手机号回调，open-type=getPhoneNumber时有效"
	},
	{
		"name": "error",
		"description": "当使用开放能力时，发生错误的回调，open-type=launchApp时有效"
	},
	{
		"name": "opensetting",
		"description": "在打开授权设置页后回调，open-type=openSetting时有效"
	},
	{
		"name": "launchapp",
		"description": "打开 APP 成功的回调，open-type=launchApp时有效"
	}
];

export const mcInputAttrs: IAttributeData[] = [
	{
		"name": "value",
		"description": "输入框的内容"
	},
	{
		"name": "placeholder",
		"description": "输入框为空时占位符"
	},
	{
		"name": "placeholderStyle",
		"description": "指定 placeholder 的样式，目前仅支持color,font-size和font-weight"
	},
	{
		"name": "placeholderClass",
		"description": "指定 placeholder 的样式类"
	},
	{
		"name": "disabled",
		"valueSet": "boolean",
		"description": "禁用输入框"
	},
	{
		"name": "maxlength",
		"description": "最大输入长度，设置为 -1 的时候不限制最大长度"
	},
	{
		"name": "cursorSpacing",
		"description": "指定光标与键盘的距离。取textarea距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离"
	},
	{
		"name": "autoFocus",
		"valueSet": "boolean",
		"description": "自动聚焦，拉起键盘"
	},
	{
		"name": "focus",
		"valueSet": "boolean",
		"description": "获取焦点"
	},
	{
		"name": "cursor",
		"description": "指定focus时的光标位置"
	},
	{
		"name": "selectionStart",
		"description": "光标起始位置，自动聚集时有效，需与selection-end搭配使用"
	},
	{
		"name": "selectionEnd",
		"description": "光标结束位置，自动聚集时有效，需与selection-start搭配使用"
	},
	{
		"name": "adjustPosition",
		"valueSet": "boolean",
		"description": "键盘弹起时，是否自动上推页面"
	},
	{
		"name": "holdKeyboard",
		"description": "focus时，点击页面的时候不收起键盘"
	},
	{
		"name": "type",
		"description": "input 的类型",
		"values": [
			{ "name": "textarea", "description": "文本框" },
			{ "name": "text", "description": "文本输入键盘" },
			{ "name": "number", "description": "数字输入键盘" },
			{ "name": "idcard", "description": "身份证输入键盘" },
			{ "name": "digit", "description": "带小数点的数字键盘" },
			{ "name": "safe-password", "description": "密码安全输入键盘" },
			{ "name": "password", "description": "是否是密码类型" },
		]
	},
	{
		"name": "readonly",
		"valueSet": "boolean",
		"description": "是否只读"
	}
];

export const mcNumberDanceItemAttrs: IAttributeData[] = [
	{
		"name": "value",
		"description": "数字字符串，0-9"
	},
	{
		"name": "mode",
		"valueSet": "number-dance-mode",
		"description": "模式：scroll 滚动；count 计算，单位时间内变化"
	},
	{
		"name": "scrollType",
		"valueSet": "number-dance-scroll-type",
		"description": "mode为scroll时数字滚动的类型"
	},
	{
		"name": "duration",
		"description": "数字变化动画过程时长"
	},
	{
		"name": "itemStyle",
		"description": "指定dance-item样式"
	},
	{
		"name": "numberStyle",
		"description": "指定数字样式"
	},
];

export const mcPopupAttrs: IAttributeData[] = [
	{
		"name": "round",
		"valueSet": "boolean",
		"description": {
			"kind": "markdown",
			"value": "是否开启圆角"
		}
	},
	{
		"name": "mask",
		"valueSet": "boolean",
		"description": {
			"kind": "markdown",
			"value": "是否显示蒙层"
		}
	},
	{
		"name": "maskClosable",
		"valueSet": "boolean",
		"description": {
			"kind": "markdown",
			"value": "点击蒙层是否可以关闭"
		}
	},
];

export const mcRecycleListAttrs: IAttributeData[] = [
	{
		"name": "height",
		"description": "列表高度，默认100vh"
	},
	{
		"name": "show",
		"valueSet": "boolean",
		"description": "列表是否展示，建议搭配tab使用"
	},
	{
		"name": "scroll",
		"valueSet": "boolean",
		"description": "是否允许上拉刷新"
	},
	{
		"name": "showScrollStatus",
		"valueSet": "boolean",
		"description": "展示上拉刷新的状态文案"
	},
	{
		"name": "scrollTop",
		"description": "设置顶部滚动偏移量"
	},
	{
		"name": "disabled",
		"valueSet": "boolean",
		"description": "是否禁止滑动"
	},
	{
		"name": "lowerThreshold",
		"description": "距底部/右边多远时，触发 scrolltolower 事件"
	},
	{
		"name": "listenScroll",
		"valueSet": "boolean",
		"description": "是否对外暴露scroll事件"
	},
	{
		"name": "total",
		"description": "列表数据总页数"
	},
	{
		"name": "current",
		"description": "当前在第几页"
	},
];