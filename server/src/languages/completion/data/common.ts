export const commonValueSets = [
	{
		"name": "open-type",
		"values": [
			{ "name": "contact" },
			{ "name": "share" },
			{ "name": "getPhoneNumber" },
			{ "name": "getUserInfo" },
			{ "name": "launchApp" },
			{ "name": "openSetting" },
			{ "name": "feedback" },
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
			{
				"name": "switchTab"
			},
			{
				"name": "reLaunch"
			},
			{
				"name": "redirectTo"
			},
			{
				"name": "navigateTo"
			},
			{
				"name": "navigateBack"
			},
		]
	},
	{
		"name": "navigate-type",
		"values": [
			{
				"name": "navigate"
			},
			{
				"name": "redirect"
			},
			{
				"name": "switchTab"
			},
			{
				"name": "reLaunch"
			},
			{
				"name": "navigateBack"
			},
			{
				"name": "exit"
			},
		]
	},
	{
		"name": "lang",
		"values": [
			{ "name": "en" },
			{ "name": "zh_CN" },
			{ "name": "zh_TW" },
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