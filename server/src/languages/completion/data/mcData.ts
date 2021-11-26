import { WXMLData } from '../../modes/wxml/IWXMLLanguageTypes';
import { buttonEvents, commonValueSets, mcInputAttrs, mcNumberDanceItemAttrs, mcPopupAttrs, mcRecycleListAttrs } from './common';

export const mcData: WXMLData = {
	tags: [
		{
			"name": "mc-action-sheet",
			"description": {
				"kind": "markdown",
				"value": "动作面板"
			},
			"attributes": [
				...mcPopupAttrs,
				{
					"name": "visible",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "是否可见"
					}
				},
				{
					"name": "cancel-text",
					"description": {
						"kind": "markdown",
						"value": "取消按钮文字,为空不展示底部取消按钮"
					}
				},
				{
					"name": "title",
					"description": {
						"kind": "markdown",
						"value": "弹框标题"
					}
				},
				{
					"name": "description",
					"description": {
						"kind": "markdown",
						"value": "弹框二级标题"
					}
				},
				{
					"name": "actions",
					"description": {
						"kind": "markdown",
						"value": "面板选项列表, 每项可接受字段：`name` `extra` `color` `subname` `disabled` `onClick`"
					}
				},
				{
					"name": "close-on-click-action",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "选中某一项后是否关闭弹层"
					}
				},
				{ "name": "id" },
				{
					"name": "lang",
					"valueSet": "lang",
					"description": {
						"kind": "markdown",
						"value": "指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。"
					}
				},
				{
					"name": "session-from",
					"description": {
						"kind": "markdown",
						"value": "会话来源，open-type=\"contact\"时有效"
					}
				},
				{
					"name": "send-message-title",
					"description": {
						"kind": "markdown",
						"value": "会话内消息卡片标题，open-type=\"contact\"时有效"
					}
				},
				{
					"name": "send-message-path",
					"description": {
						"kind": "markdown",
						"value": "会话内消息卡片点击跳转小程序路径，open-type=\"contact\"时有效"
					}
				},
				{
					"name": "send-message-img",
					"description": {
						"kind": "markdown",
						"value": "会话内消息卡片图片，open-type=\"contact\"时有效"
					}
				},
				{
					"name": "show-message-card",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示\"可能要发送的小程序\"提示，用户点击后可以快速发送小程序消息，open-type=\"contact\"时有效"
					}
				},
				{
					"name": "app-parameter",
					"description": {
						"kind": "markdown",
						"value": "打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效"
					}
				},
			],
			"events": [
				{
					"name": "sure",
					"description": "popup弹层关闭"
				},
				{
					"name": "cancel",
					"description": "点击取消的回调"
				},
				{
					"name": "close",
					"description": "弹层关闭的回调"
				},
				{
					"name": "select",
					"description": "选中某一项后触发回调"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/action-sheet/README.md"
				}
			]
		},
		{
			"name": "mc-button",
			"description": {
				"kind": "markdown",
				"value": "各种样式的操作按钮"
			},
			"attributes": [
				{ "name": "id" },
				{
					"name": "type",
					"description": {
						"kind": "markdown",
						"value": "按钮的样式类型"
					},
					"values": [
						{ "name": "default", "description": "白色" },
						{ "name": "primary", "description": "蓝色" },
						{ "name": "text", "description": "文字类型，无边框" },
						{ "name": "success", "description": "绿色" },
						{ "name": "error", "description": "红色" },
						{ "name": "warning", "description": "黄色" },
					]
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": "是否禁用",
				},
				{
					"name": "square",
					"valueSet": "boolean",
					"description": "是否为方形"
				},
				{
					"name": "circle",
					"valueSet": "boolean",
					"description": "是否为圆角"
				},
				{
					"name": "size",
					"description": "按钮尺寸",
					"values": [
						{ "name": "large", "description": "超大按钮" },
						{ "name": "normal", "description": "正常大小" },
						{ "name": "small", "description": "小型" },
						{ "name": "mini", "description": "迷你" },
					]
				},
				{
					"name": "open-type",
					"valueSet": "open-type",
					"description": "微信开放能力"
				},
				{
					"name": "long",
					"valueSet": "boolean",
					"description": "是否为长按钮，铺满全屏"
				},
				{
					"name": "plain",
					"valueSet": "boolean",
					"description": "背景为白色"
				},
				{
					"name": "icon",
					"description": "按钮的图标类型，值为mc-icon内设置的"
				},
				{
					"name": "color",
					"description": "按钮边框以及背景的颜色"
				},
				{
					"name": "lang",
					"valueSet": "lang",
					"description": "指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。"
				},
				{ "name": "business-id" },
				{
					"name": "session-from",
					"description": {
						"kind": "markdown",
						"value": "会话来源，open-type=\"contact\"时有效"
					}
				},
				{
					"name": "send-message-title",
					"description": {
						"kind": "markdown",
						"value": "会话内消息卡片标题，open-type=\"contact\"时有效"
					}
				},
				{
					"name": "send-message-path",
					"description": {
						"kind": "markdown",
						"value": "会话内消息卡片点击跳转小程序路径，open-type=\"contact\"时有效"
					}
				},
				{
					"name": "send-message-img",
					"description": {
						"kind": "markdown",
						"value": "会话内消息卡片图片，open-type=\"contact\"时有效"
					}
				},
				{
					"name": "show-message-card",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示\"可能要发送的小程序\"提示，用户点击后可以快速发送小程序消息，open-type=\"contact\"时有效"
					}
				},
				{
					"name": "app-parameter",
					"description": {
						"kind": "markdown",
						"value": "打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效"
					}
				},
			],
			"events": [
				{
					"name": "click",
					"description": "点击事件"
				},
				...buttonEvents
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/button/README.md"
				}
			]
		},
		{
			"name": "mc-cascader",
			"description": "级联选择器",
			"attributes": [
				{
					"name": "content-class",
					"description": "list-item上的自定义样式"
				},
				{
					"name": "dataSource",
					"description": "组件数据源"
				},
				{
					"name": "use-tabs",
					"valueSet": "boolean",
					"description": "面板中是否采用tab的形式"
				},
				{
					"name": "title",
					"description": "弹框的标题"
				},
				{
					"name": "cancel-text",
					"description": "取消的文案"
				},
				{
					"name": "ok-text",
					"description": "确定的文案"
				},
				{
					"name": "show-toolbar",
					"valueSet": "boolean",
					"description": "是否展示标题栏"
				},
				{
					"name": "value",
					"description": "选中的值"
				},
				{
					"name": "label",
					"description": "label 内容"
				},
				{
					"name": "label-width",
					"description": "label的宽度"
				},
				{
					"name": "tag",
					"description": "弹层的id，默认cascader-popup"
				},
				{
					"name": "use-item-slot",
					"valueSet": "boolean",
					"description": "是否启用触发弹层的的插槽"
				},
				{
					"name": "border",
					"valueSet": "boolean",
					"description": "是否显示边框"
				},
				{
					"name": "extra",
					"description": "item右边的内容"
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": "是否禁用"
				}
			],
			"events": [
				{
					"name": "ready",
					"description": "组件在视图层布局完成后执行"
				},
				{
					"name": "change",
					"description": "点击确定后触发"
				},
				{
					"name": "cancel",
					"description": "点击取消按钮后触发"
				},
				{
					"name": "close",
					"description": "弹层关闭后触发"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/cascader/README.md"
				}
			]
		},
		{
			"name": "mc-checkbox",
			"description": "多选项目",
			"attributes": [
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": "是否禁用"
				},
				{
					"name": "value",
					"description": "checkbox标识，选中时触发checkbox-group的 change 事件，并携带 checkbox 的 value"
				},
				{
					"name": "shape",
					"values": [
						{ "name": "square" },
						{ "name": "round" },
					],
					"description": "复选框的形状，提供 square 和 round"
				},
				{
					"name": "color",
					"description": "checkbox的颜色，同css的color"
				},
				{
					"name": "label",
					"description": "只在组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中"
				},
				{
					"name": "indeterminate",
					"valueSet": "boolean",
					"description": "是否支持半选"
				},
				{
					"name": "name",
					"description": {
						"kind": "markdown",
						"value": "原生 `name` 属性"
					}
				}
			],
			"events": [],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/checkbox/README.md"
				}
			]
		},
		{
			"name": "mc-checkbox-group",
			"description": "多项选择器，内部由多个mc-checkbox组成。",
			"attributes": [
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": "是否禁用"
				},
				{
					"name": "value",
					"description": "指定选中项目的集合，"
				}
			],
			"events": [
				{
					"name": "change",
					"description": "在选项状态发生改变时触发。"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/checkbox-group/README.md"
				}
			]
		},
		{
			"name": "mc-collapse",
			"description": "可以折叠/展开的内容区域",
			"attributes": [
				{
					"name": "value",
					"description": "当前激活的面板"
				},
				{
					"name": "accordion",
					"valueSet": "boolean",
					"description": "是否开启手风琴模式，开启后每次至多展开一个面板"
				}
			],
			"events": [
				{
					"name": "change",
					"description": "切换面板时触发，返回当前已展开的面板的 key, 格式为数组"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/collapse/README.md"
				}
			]
		},
		{
			"name": "mc-collapse-item",
			"description": "折叠的item",
			"attributes": [
				{
					"name": "content-class",
					"description": "内容容器的自定义类名"
				},
				{
					"name": "name",
					"description": "当前面板的 name，与 mc-collapse 的 value 对应，不填为索引值"
				}
			],
			"events": [],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/collapse-item/README.md"
				}
			]
		},
		{
			"name": "mc-count-down",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "use-slot",
					"valueSet": "boolean",
					"description": "是否启用插槽"
				},
				{
					"name": "target-time",
					"description": "倒计时结束时间，支持Date, 日期字符串, 10位和13位的时间戳"
				},
				{
					"name": "server-time",
					"description": "服务器时间，支持Date, 日期字符串, 10位和13位的时间戳"
				},
				{
					"name": "format",
					"description": "格式(DD:HH:mm:ss:ms), 默认 HH:mm:ss"
				},
				{
					"name": "auto",
					"valueSet": "boolean",
					"description": "倒计时是否自动开始"
				}
			],
			"events": [
				{
					"name": "change",
					"description": "时间变动时触发"
				},
				{
					"name": "finish",
					"description": "倒计时结束时触发"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/count-down/README.md"
				}
			]
		},
		{
			"name": "mc-date-picker",
			"description": "日期选择器",
			"attributes": [
				{
					"name": "content-class",
					"description": "list-item 的右侧内容容器样式"
				},
				{
					"name": "indicator-style",
					"description": "设置选择器中间选中框的样式"
				},
				{
					"name": "indicator-class",
					"description": "设置选择器中间选中框的类名"
				},
				{
					"name": "mode",
					"description": "时间选择器类型",
					"values": [
						{
							"name": "date",
							"description": "日期选择"
						},
						{
							"name": "month",
							"description": "月份选择"
						},
						{
							"name": "quarter",
							"description": "季度选择"
						}
					]
				},
				{
					"name": "min-date",
					"description": "可选的最小日期 默认 1940/01/01 00:00"
				},
				{
					"name": "max-date",
					"description": "可选的最大日期 默认 2030/12/31 23:59"
				},
				{
					"name": "title",
					"description": "弹框的标题"
				},
				{
					"name": "cancel-text",
					"description": "取消的文案"
				},
				{
					"name": "ok-text",
					"description": "确定的文案"
				},
				{
					"name": "show-toolbar",
					"valueSet": "boolean",
					"description": "是否展示标题栏"
				},
				{
					"name": "value",
					"description": "选中的值"
				},
				{
					"name": "default-value",
					"description": "弹出面板时自动选中的值"
				},
				{
					"name": "label",
					"description": "label 内容"
				},
				{
					"name": "label-width",
					"description": "label 宽度"
				},
				{
					"name": "tag",
					"description": "弹层的id，默认picker-popup"
				},
				{
					"name": "use-item-slot",
					"valueSet": "boolean",
					"description": "是否启用触发弹层的的插槽"
				},
				{
					"name": "border",
					"valueSet": "boolean",
					"description": "item是否展示边框"
				},
				{
					"name": "extra",
					"description": "item右边的内容"
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": "是否禁用"
				}
			],
			"events": [
				{
					"name": "change",
					"description": "点击确定后触发"
				},
				{
					"name": "cancel",
					"description": "点击取消按钮后触发"
				},
				{
					"name": "close",
					"description": "弹层关闭后触发"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/date-picker/README.md"
				}
			]
		},
		{
			"name": "mc-dropdown-menu",
			"description": "下拉菜单",
			"attributes": [
				{
					"name": "active-color",
					"description": "菜单标题和选项的选中态颜色"
				},
				{
					"name": "mask",
					"valueSet": "boolean",
					"description": "是否显示蒙层"
				},
				{
					"name": "z-index",
					"description": "菜单栏 z-index 层级"
				},
				{
					"name": "direction",
					"description": "弹层的弹出方向，提供 down 和 up, 默认 down "
				},
				{
					"name": "mask-closeable",
					"valueSet": "boolean",
					"description": "蒙层是否可点击关闭你"
				},
				{
					"name": "close-on-click-outside",
					"valueSet": "boolean",
					"description": "是否在点击外部 menu 后关闭菜单"
				}
			],
			"events": [],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/dropdown-menu/README.md"
				}
			]
		},
		{
			"name": "mc-dropdown-item",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "value",
					"description": "当前选中项对应的 value"
				},
				{
					"name": "title",
					"description": "菜单项标题"
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": "是否禁用菜单"
				},
				{
					"name": "title-class",
					"description": "标题额外类名"
				},
				{
					"name": "options",
					"description": "选项数组"
				}
			],
			"events": [
				{
					"name": "change",
					"description": "点击选项导致 value 变化时触发"
				},
				{
					"name": "close",
					"description": "关闭菜单栏时触发"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/dropdown-item/README.md"
				}
			]
		},
		{
			"name": "mc-echarts",
			"description": "echarts可视化组件",
			"attributes": [
				{
					"name": "element-id",
					"description": "canvas id，默认mc-echarts"
				},
				{
					"name": "echarts",
					"description": "echarts库，使用mc-echarts，需要提供getApp().require的方法，由外部进行按需加载"
				},
				{
					"name": "options",
					"description": "echarts的配置项"
				},
				{
					"name": "lazy",
					"valueSet": "boolean",
					"description": "是否延迟初始化"
				}
			],
			"events": [],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/echarts/README.md"
				}
			]
		},
		{
			"name": "mc-form",
			"description": "表单",
			"attributes": [
				{
					"name": "model",
					"description": "表单数据对象"
				},
				{
					"name": "rules",
					"description": "表单验证规则，具体配置查看 async-validator"
				},
				{
					"name": "label-width",
					"description": "表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值"
				},
				{
					"name": "border",
					"valueSet": "boolean",
					"description": "是否展示边框"
				},
				{
					"name": "show-message",
					"description": "是否显示校验错误信息"
				},
				{
					"name": "labe-position",
					"description": "表单域标签的位置"
				}
			],
			"events": [
				{
					"name": "ready",
					"description": "组件在视图层布局完成后执行"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/form/README.md"
				}
			]
		},
		{
			"name": "mc-form-item",
			"description": "表单Item",
			"attributes": [
				{
					"name": "label-class",
					"description": "指定 label 的样式类"
				},
				{
					"name": "content-class",
					"description": "指定 右侧content 的样式类"
				},
				{
					"name": "label",
					"description": "标签文本"
				},
				{
					"name": "label-width",
					"description": "表单域标签的的宽度"
				},
				{
					"name": "label-position",
					"description": "表单域标签的位置"
				},
				{
					"name": "use-label-slot",
					"valueSet": "boolean",
					"description": "label位置是否采用插槽"
				},
				{
					"name": "prop",
					"description": "对应表单域 model 里的字段"
				},
				{
					"name": "required",
					"valueSet": "boolean",
					"description": "是否必填，如不设置，则会根据校验规则自动生成"
				},
				{
					"name": "rules",
					"description": "表单验证规则"
				},
				{
					"name": "label-for",
					"description": "指定原生的 label 标签的 for 属性，配合控件的 element-id 属性，可以点击 label 时聚焦控件。"
				},
				{
					"name": "indent",
					"description": "item缩进的距离，默认32rpx"
				}
			],
			"events": [],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/form-item/README.md"
				}
			]
		},
		{
			"name": "mc-icon",
			"description": "图标",
			"attributes": [
				{
					"name": "type",
					"description": {
						"kind": "markdown",
						"value": "icon的类型\n\n[icon集](https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.13&manage_type=myprojects&projectId=1119857&keyword=&project_type=&page=)"
					}
				},
				{
					"name": "inherit",
					"valueSet": "boolean",
					"description": "是否使用svg预设的颜色"
				}
			],
			"events": [
				{
					"name": "click",
					"description": "点击事件"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/icon/README.md"
				}
			]
		},
		{
			"name": "mc-image",
			"description": "图片",
			"attributes": [
				{
					"name": "src",
					"description": "图片链接"
				},
				{
					"name": "round",
					"valueSet": "boolean",
					"description": "是否为圆角"
				},
				{
					"name": "width",
					"description": "宽度，默认100px, 接收字符串, 单位自己设置"
				},
				{
					"name": "height",
					"description": "高度，默认100px, 接收字符串, 单位自己设置"
				},
				{
					"name": "radius",
					"description": "圆角值，接收字符串, 单位自己设置"
				},
				{
					"name": "lazy-load",
					"valueSet": "boolean",
					"description": "图片懒加载，在即将进入一定范围（上下三屏）时才开始加载"
				},
				{
					"name": "use-error-slot",
					"valueSet": "boolean",
					"description": "图片错误展示内容是否自定义"
				},
				{
					"name": "use-loading-slot",
					"valueSet": "boolean",
					"description": "图片加载时的展示是否自定义"
				},
				{
					"name": "show-menu-by-longpress",
					"valueSet": "boolean",
					"description": "长按图片显示发送给朋友、收藏、保存图片、搜一搜、打开名片/前往群聊/打开小程序（若图片中包含对应二维码或小程序码）的菜单。\n支持识别的码：小程序码\n仅小程序支持识别的码：微信个人码、微信群码、企业微信个人码、 企业微信群码与企业微信互通群码；"
				},
				{
					"name": "fit",
					"valueSet": "image-fit",
					"description": "图片裁剪、缩放的模式"
				},
				{
					"name": "show-error",
					"valueSet": "boolean",
					"description": "是否显示图片加载错误"
				},
				{
					"name": "show-loading",
					"valueSet": "boolean",
					"description": "是否显示图片加载中"
				},
				{
					"name": "alt",
					"description": "替代文本"
				}
			],
			"events": [
				{
					"name": "load",
					"description": "图片加载完毕时触发"
				},
				{
					"name": "error",
					"description": "图片加载失败时触发"
				},
				{
					"name": "click",
					"description": "点击图片时触发"
				},
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/image/README.md"
				}
			]
		},
		{
			"name": "mc-imgs-crop",
			"description": "图片裁剪",
			"attributes": [
				{
					"name": "src",
					"description": "图片链接"
				},
				{
					"name": "scale",
					"description": "缩放的倍数， 默认 1"
				},
				{
					"name": "rotate",
					"description": "旋转的角度倍数, 默认 0"
				},
				{
					"name": "border",
					"description": "裁剪的边框 [x, y]"
				},
				{
					"name": "height",
					"description": "裁剪区域高, 默认750"
				},
				{
					"name": "width",
					"description": "裁剪区域宽, 默认750"
				},
				{
					"name": "color",
					"description": "边框的背景色RGBA, 默认 [0, 0, 0, 0.5]"
				},
				{
					"name": "position",
					"description": "裁剪区域定位， 格式 {x: number, y: number}"
				},
				{
					"name": "element-id",
					"description": "画布的id, 默认 import-mc-imgs-crop"
				}
			],
			"events": [],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/imgs-crop/README.md"
				}
			]
		},
		{
			"name": "mc-input",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				...mcInputAttrs,
				{
					"name": "mc-input-class",
					"description": "指定 input 的样式类"
				},
				{
					"name": "password",
					"valueSet": "boolean",
					"description": "是否为密码输入框"
				},
				{
					"name": "confirm-type",
					"valueSet": "confirm-type",
					"description": "设置键盘右下角按钮的文字，仅在type='text'时生效"
				},
				{
					"name": "confirm-hold",
					"valueSet": "boolean",
					"description": "点击键盘右下角按钮时是否保持键盘不收起"
				},
				{
					"name": "use-clear-slot",
					"valueSet": "boolean",
					"description": "清除按钮是否自定义"
				},
				{
					"name": "clearable",
					"valueSet": "boolean",
					"description": "显示清空按钮"
				},
				{
					"name": "right",
					"valueSet": "boolean",
					"description": "输入框内容是否向右对齐"
				},
				{
					"name": "use-prepend-slot",
					"valueSet": "boolean",
					"description": "输入框前面是否使用插槽"
				},
				{
					"name": "use-append-slot",
					"valueSet": "boolean",
					"description": "输入框后面是否使用插槽"
				},
				{
					"name": "auto-height",
					"valueSet": "boolean",
					"description": "是否自动增高，设置auto-height时，style.height不生效"
				},
				{
					"name": "fixed",
					"valueSet": "boolean",
					"description": "如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true"
				},
				{
					"name": "show-confirm-bar",
					"valueSet": "boolean",
					"description": "是否显示键盘上方带有”完成“按钮那一栏"
				},
				{
					"name": "textarea-style",
					"description": "指定textarea文本框的样式"
				},
				{
					"name": "view-placeholder",
					"valueSet": "boolean",
					"description": "是否将当前的textarea样式copy出来用view展示"
				}
			],
			"events": [
				{
					"name": "blur",
					"description": "输入框失焦时触发"
				},
				{
					"name": "focus",
					"description": "输入框聚焦时触发"
				},
				{
					"name": "confirm",
					"description": "点击完成按钮时触发，event.detail = { value }"
				},
				{
					"name": "keyboardheightchange",
					"description": "键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration}"
				},
				{
					"name": "linechange",
					"description": "输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}， type 为 textarea时有效"
				},
				{
					"name": "clear",
					"description": "点击清除按钮事触发"
				},
				{
					"name": "input",
					"description": "键盘输入时触发，event.detail = {value, cursor, keyCode}，keyCode 为键值，2.1.0 起支持，处理函数可以直接 return 一个字符串，将替换输入框的内容。"
				},
				{
					"name": "change",
					"description": "键盘输入时触发，event.detail = {value, cursor, keyCode}，keyCode 为键值，2.1.0 起支持，处理函数可以直接 return 一个字符串，将替换输入框的内容。"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/input/README.md"
				}
			]
		},
		{
			"name": "mc-input-search",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				...mcInputAttrs,
				{
					"name": "mc-input-class",
					"description": "指定 input 的样式类"
				},
				{
					"name": "cancel-text",
					"description": "取消按钮的文案, 默认 取消"
				},
				{
					"name": "show-cancel",
					"valueSet": "boolean",
					"description": "是否显示取消按钮"
				}
			],
			"events": [
				{
					"name": "blur",
					"description": "输入框失焦时触发"
				},
				{
					"name": "focus",
					"description": "输入框聚焦时触发"
				},
				{
					"name": "confirm",
					"description": "点击完成按钮时触发，event.detail = { value }"
				},
				{
					"name": "keyboardheightchange",
					"description": "键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration}"
				},
				{
					"name": "clear",
					"description": "点击清除按钮事触发"
				},
				{
					"name": "input",
					"description": "键盘输入时触发，event.detail = {value, cursor, keyCode}，keyCode 为键值，2.1.0 起支持，处理函数可以直接 return 一个字符串，将替换输入框的内容。"
				},
				{
					"name": "change",
					"description": "键盘输入时触发，event.detail = {value, cursor, keyCode}，keyCode 为键值，2.1.0 起支持，处理函数可以直接 return 一个字符串，将替换输入框的内容。"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/input-search/README.md"
				}
			]
		},
		{
			"name": "mc-list",
			"description": "手机端展示数据列表",
			"attributes": [
				{
					"name": "title",
					"description": "list块的标题"
				},
				{
					"name": "border",
					"valueSet": "boolean",
					"description": "是否展示边框"
				},
				{
					"name": "label-width",
					"description": "label内容的宽度"
				}
			],
			"events": [],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/list/README.md"
				}
			]
		},
		{
			"name": "mc-list-item",
			"description": "ListItem",
			"attributes": [
				{
					"name": "label-class",
					"description": "指定 label 的样式类"
				},
				{
					"name": "wrapper-class",
					"description": "指定 list-item 容器的样式类"
				},
				{
					"name": "content-class",
					"description": "指定 list-item 内容区域的的样式类"
				},
				{
					"name": "label",
					"description": "label 内容"
				},
				{
					"name": "label-width",
					"description": "item内label的宽度,优先级高于list内的labelWidth"
				},
				{
					"name": "content",
					"description": "右边的内容"
				},
				{
					"name": "url",
					"description": "跳转的页面路由，搭配linkType使用"
				},
				{
					"name": "left-icon",
					"description": "左侧的icon"
				},
				{
					"name": "arrow",
					"description": "是否展示右侧箭头"
				},
				{
					"name": "use-left-icon-slot",
					"valueSet": "boolean",
					"description": "左侧icon是否定义"
				},
				{
					"name": "indent",
					"description": "左侧缩进距离， 默认 32，单位rpx"
				},
				{
					"name": "link-type",
					"valueSet": "navigate-fn-type",
					"description": "wx路由跳转方法"
				},
				{
					"name": "border",
					"valueSet": "boolean",
					"description": "是否显示边框"
				},
				{
					"name": "border-indent",
					"valueSet": "boolean",
					"description": "为true时，mc-list-item__wrapper的position为relative"
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": "是否禁用"
				}
			],
			"events": [
				{
					"name": "click",
					"description": "点击时触发"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/list-item/README.md"
				}
			]
		},
		{
			"name": "mc-modal",
			"description": "模态对话框",
			"attributes": [
				{
					"name": "wrapper-class",
					"description": "指定内容区域的样式类"
				},
				{
					"name": "visible",
					"valueSet": "boolean",
					"description": "是否可见"
				},
				{
					"name": "mode",
					"description": "弹框类型",
					"values": [
						{ "name": "alert", "description": "警示框" },
						{ "name": "operation", "description": "操作框, 未做" },
					]
				},
				{
					"name": "mask",
					"valueSet": "boolean",
					"description": "是否显示蒙层"
				},
				{
					"name": "mask-closable",
					"valueSet": "boolean",
					"description": "点击蒙层时是否可以关闭弹框"
				},
				{
					"name": "mask-style",
					"description": "指定蒙层样式"
				},
				{
					"name": "z-index",
					"description": "弹框的z-index值"
				},
				{
					"name": "title",
					"description": "弹框的标题"
				},
				{
					"name": "content",
					"description": "弹框的内容"
				},
				{
					"name": "ok-text",
					"description": "确定按钮的文案"
				},
				{
					"name": "cancel-text",
					"description": "取消按钮的文案"
				},
				{
					"name": "footer",
					"valueSet": "boolean",
					"description": "是否展示底部按钮"
				},
				{
					"name": "actions",
					"description": "当 mode = operation时有效，各个按钮的信息， 未做"
				}
			],
			"events": [
				{
					"name": "close",
					"description": "点击取消按钮时触发"
				},
				{
					"name": "ok",
					"description": "点击确定按钮时触发"
				},
				{
					"name": "cancel",
					"description": "弹框关闭时触发"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/modal/README.md"
				}
			]
		},
		{
			"name": "mc-notice-bar",
			"description": "用于循环播放展示一组消息通知",
			"attributes": [
				{
					"name": "text",
					"description": "通知文本内容"
				},
				{
					"name": "mode",
					"description": "通知栏模式",
					"values": [
						{ "name": "closeable" },
						{ "name": "link" },
					],
				},
				{
					"name": "url",
					"description": "页面路由，当mode = link时有效"
				},
				{
					"name": "open-type",
					"valueSet": "navigate-type",
					"description": "navigator组件中的微信开放能力"
				},
				{
					"name": "delay",
					"description": "动画延迟时间 (s), 默认1"
				},
				{
					"name": "speed",
					"description": "滚动速率 (px/s), 默认 50"
				},
				{
					"name": "scrollable",
					"valueSet": "boolean",
					"description": "是否开启滚动播放，内容长度溢出时默认开启"
				},
				{
					"name": "color",
					"description": "通知文本颜色"
				},
				{
					"name": "background-color",
					"description": "滚动条背景"
				},
				{
					"name": "wrapable",
					"valueSet": "boolean",
					"description": "是否开启文本换行，只在禁用滚动时生效"
				}
			],
			"events": [
				{
					"name": "click",
					"description": "点击通知栏时触发"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/notice-bar/README.md"
				}
			]
		},
		{
			"name": "mc-number-dance",
			"description": "数字滚动组件",
			"attributes": [
				...mcNumberDanceItemAttrs,
				{
					"name": "delay",
					"description": "相邻数字之间动画结束时间延迟，从左到右"
				},
				{
					"name": "separator",
					"description": "整数位3位分隔符, 默认 ,"
				},
				{
					"name": "separator-style",
					"description": "指定分隔符的样式"
				},
				{
					"name": "decimal-style",
					"description": "指定小数的样式"
				}
			],
			"events": [],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/number-dance/README.md"
				}
			]
		},
		{
			"name": "mc-number-dance-item",
			"description": "数字滚动的item",
			"attributes": [
				...mcNumberDanceItemAttrs,
			],
			"events": [],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/number-dance-item/README.md"
				}
			]
		},
		{
			"name": "mc-picker",
			"description": "选择器",
			"attributes": [
				{
					"name": "content-class",
					"description": "指定 list-item 内容区域的的样式类"
				},
				{
					"name": "dataSource",
					"description": "对象数组，配置每一列显示的数据, 前后列有对应关系为tree结构(带children)，无关系为二维数组"
				},
				{
					"name": "cols",
					"description": "展示的列数, 默认 0,展示数据源原有的列数"
				},
				{
					"name": "indicator-style",
					"description": "设置选择器中间选中框的样式"
				},
				{
					"name": "indicator-class",
					"description": "置选择器中间选中框的类名"
				},
				{
					"name": "title",
					"description": "弹框的标题"
				},
				{
					"name": "ok-text",
					"description": "确定按钮的文案"
				},
				{
					"name": "cancel-text",
					"description": "取消按钮的文案"
				},
				{
					"name": "show-toolbar",
					"valueSet": "boolean",
					"description": "是否显示顶部标题栏"
				},
				{
					"name": "value",
					"description": "选中的值"
				},
				{
					"name": "label",
					"description": "label 内容"
				},
				{
					"name": "label-width",
					"description": "item内label的宽度,优先级高于list内的labelWidth"
				},
				{
					"name": "tag",
					"description": "弹层的id，默认picker-popup"
				},
				{
					"name": "use-item-slot",
					"valueSet": "boolean",
					"description": "是否启用触发弹层的的插槽"
				},
				{
					"name": "border",
					"valueSet": "boolean",
					"description": "是否显示边框"
				},
				{
					"name": "extra",
					"description": "item右边的内容"
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": "是否禁用"
				}
			],
			"events": [
				{
					"name": "cancel",
					"description": "弹框关闭时触发"
				},
				{
					"name": "change",
					"description": "点击确定后触发"
				},
				{
					"name": "close",
					"description": "点击取消按钮时触发"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/picker/README.md"
				}
			]
		},
		{
			"name": "mc-popup",
			"description": "弹出层",
			"attributes": [
				...mcPopupAttrs,
				{
					"name": "enter-class",
					"description": "指定进入动画的样式类"
				},
				{
					"name": "enter-active-class",
					"description": ""
				},
				{
					"name": "enter-to-class",
					"description": ""
				},
				{
					"name": "leave-class",
					"description": "指定离开动画的样式类"
				},
				{
					"name": "leave-active-class",
					"description": ""
				},
				{
					"name": "leave-to-class",
					"description": ""
				},
				{
					"name": "placement",
					"valueSet": "placement",
					"description": "弹出位置，可选值为 top bottom right left center"
				},
				{
					"name": "closeable",
					"valueSet": "boolean",
					"description": "是否显示关闭图标"
				},
				{
					"name": "close-icon-position",
					"description": "关闭图片的位置",
					"values": [
						{ "name": "top-right" },
						{ "name": "top-left" },
						{ "name": "bottom-right" },
						{ "name": "bottom-left" }
					]
				},
				{
					"name": "mask-style",
					"description": "指定蒙层的样式"
				},
				{
					"name": "z-index",
					"description": "指定蒙层的样式类"
				}
			],
			"events": [
				{
					"name": "close",
					"description": "蒙层关闭时触发"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/popup/README.md"
				}
			]
		},
		{
			"name": "mc-radio",
			"description": "单选项目。",
			"attributes": [
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": "否禁用"
				},
				{
					"name": "value",
					"description": "radio 标识。当该radio 选中时，radio-group 的 change 事件会携带radio的value"
				},
				{
					"name": "label",
					"description": "radio的内容描述，为false时，可以自定义"
				},
				{
					"name": "color",
					"description": "选中时的颜色"
				},
				{
					"name": "name",
					"description": "标识符"
				},
				{
					"name": "iconStyle",
					"description": "指定 icon 的样式  "
				}
			],
			"events": [],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/radio/README.md"
				}
			]
		},
		{
			"name": "mc-radio-group",
			"description": "单项选择器，内部由多个 radio 组成",
			"attributes": [
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": "是否禁用"
				},
				{
					"name": "value",
					"description": "指定当前选中的项目数据, 与mc-radio中的name对应"
				}
			],
			"events": [
				{
					"name": "change",
					"description": "当绑定值变化时触发的事件"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/radio-group/README.md"
				}
			]
		},
		{
			"name": "mc-recycle-list",
			"description": "下拉刷新上拉加载列表",
			"attributes": [
				...mcRecycleListAttrs,
				{
					"name": "pull-down-class",
					"description": "指定下拉区域的样式类"
				},
				{
					"name": "pull-up-class",
					"description": "指定上拉区域的样式类"
				},
				{
					"name": "core-class",
					"description": "指定核心滚动区域（不包含下拉刷新区域）的样式类"
				},
				{
					"name": "pauseY",
					"description": "Y轴偏移值 -10, 单位px"
				},
				{
					"name": "refresh-height",
					"description": "下拉刷新区域的高度, 默认120, 单位rpx"
				},
				{
					"name": "pull",
					"valueSet": "boolean",
					"description": "是否允许下拉刷新"
				}
			],
			"events": [
				{
					"name": "loadData",
					"description": "获取列表数据, 返回格式 { list: [], page: { total: 0, current: 0, count: 0 }}"
				},
				{
					"name": "scroll",
					"description": "滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/recycle-list/README.md"
				}
			]
		},
		{
			"name": "mc-recycle-list-core",
			"description": "上拉加载列表",
			"attributes": [
				...mcRecycleListAttrs
			],
			"events": [
				{
					"name": "ready",
					"description": "组件在视图层布局完成后执行"
				},
				{
					"name": "loadData",
					"description": "获取列表数据, 返回格式 { list: [], page: { total: 0, current: 0, count: 0 }}"
				},
				{
					"name": "scroll",
					"description": "滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/recycle-list-core/README.md"
				}
			]
		},
		{
			"name": "mc-rich-text",
			"description": "富文本",
			"attributes": [
				{
					"name": "value",
					"description": "富文本内容"
				},
				{
					"name": "image-padding",
					"description": "图片边距, 默认 5, 单位为px，内部做不同屏幕的视频"
				}
			],
			"events": [],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/rich-text/README.md"
				}
			]
		},
		{
			"name": "mc-slider",
			"description": "滑动输入条，用于在给定的范围内选择一个值。",
			"attributes": [
				{
					"name": "value",
					"description": "当前进度百分比"
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": "是否禁用滑块"
				},
				{
					"name": "use-button-slot",
					"valueSet": "boolean",
					"description": "是否使用按钮插槽"
				},
				{
					"name": "active-color",
					"description": "进度条激活态颜色"
				},
				{
					"name": "inactive-color",
					"description": "进度条默认颜色"
				},
				{
					"name": "max",
					"description": "最大值"
				},
				{
					"name": "min",
					"description": "最小值"
				},
				{
					"name": "step",
					"description": "步长"
				},
				{
					"name": "bar-height",
					"description": "进度条高度, 默认 4, 单位为rpx"
				}
			],
			"events": [
				{
					"name": "drag-start",
					"description": "开始拖动时触发"
				},
				{
					"name": "drag-end",
					"description": "结束拖动时触发"
				},
				{
					"name": "drag",
					"description": "拖动进度条时触发"
				},
				{
					"name": "change",
					"description": "进度值改变后触发"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/slider/README.md"
				}
			]
		},
		{
			"name": "mc-spin",
			"description": "旋转动画组件，用于加载中提示",
			"attributes": [
				{
					"name": "size",
					"description": "图标大小"
				},
				{
					"name": "color",
					"description": "图标颜色"
				},
				{
					"name": "use-loading-slot",
					"valueSet": "boolean",
					"description": "是否使用中间旋转的icon插槽"
				},
				{
					"name": "fixed",
					"valueSet": "boolean",
					"description": "未开发"
				}
			],
			"events": [],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/spin/README.md"
				}
			]
		},
		{
			"name": "mc-stepper",
			"description": "步进器",
			"attributes": [
				{
					"name": "input-class",
					"description": "指定input的样式类"
				},
				{
					"name": "plus-class",
					"description": "指定 +按钮 的样式类"
				},
				{
					"name": "minus-class",
					"description": "指定 -按钮 的样式类"
				},
				{
					"name": "value",
					"description": "当前值"
				},
				{
					"name": "integer",
					"valueSet": "boolean",
					"description": "输入框是否为输入整数"
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": "是否禁用"
				},
				{
					"name": "input-width",
					"description": "输入框的宽度"
				},
				{
					"name": "button-size",
					"description": "组件高度，number类型是单位为px，string类型时可为rpx "
				},
				{
					"name": "async",
					"valueSet": "boolean",
					"description": "是否对外暴露async事件，失焦以及操作\"+\"、\"-\"才会触发async"
				},
				{
					"name": "disable-input",
					"valueSet": "boolean",
					"description": "输入框是否可编辑"
				},
				{
					"name": "decimal-length",
					"description": "小数点位数 "
				},
				{
					"name": "min",
					"description": "最小值, 默认 0"
				},
				{
					"name": "max",
					"description": "最大债, 默认 MAX_SAFE_INTEGER"
				},
				{
					"name": "step",
					"description": "步长, 默认 1"
				},
				{
					"name": "force-step",
					"valueSet": "boolean",
					"description": "强制step, 即输入的内容也必须是step的倍数"
				},
				{
					"name": "show-plus",
					"valueSet": "boolean",
					"description": "是否展示 + "
				},
				{
					"name": "show-minus",
					"valueSet": "boolean",
					"description": "是否展示 - "
				},
				{
					"name": "disable-plus",
					"valueSet": "boolean",
					"description": "是否禁用 + "
				},
				{
					"name": "disable-minus",
					"valueSet": "boolean",
					"description": "是否禁用 - "
				}
			],
			"events": [
				{
					"name": "blur",
					"description": "输入框失焦时触发"
				},
				{
					"name": "focus",
					"description": "输入框聚焦时触发"
				},
				{
					"name": "tip",
					"description": "超过最大或最小值时触发"
				},
				{
					"name": "overlimit",
					"description": "点击不可用的按钮时触发"
				},
				{
					"name": "minus",
					"description": "按 - 时触发"
				},
				{
					"name": "plus",
					"description": "按 + 时触发"
				},
				{
					"name": "change",
					"description": "当绑定值变化时触发的事件"
				},
				{
					"name": "async",
					"description": "async 为true时触发"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/stepper/README.md"
				}
			]
		},
		{
			"name": "mc-sticky",
			"description": "Sticky 组件与 CSS 中position: sticky属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。",
			"attributes": [
				{
					"name": "offset-top",
					"description": "吸顶时与顶部的距离，单位px"
				},
				{
					"name": "z-index",
					"description": "吸顶时的 z-index"
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": "是否禁用"
				}
			],
			"events": [
				{
					"name": "scroll",
					"description": "滚动时触发 event.detail = { scrollTop: 距离顶部位置, isFixed: 是否吸顶 }"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/sticky/README.md"
				}
			]
		},
		{
			"name": "mc-swipe-action",
			"description": "可以左右滑动来展示操作按钮的单元格组件。",
			"attributes": [
				{
					"name": "left",
					"description": "左侧的操作按钮 { label: 按钮名称, extraClass: 指定按钮样式类 }"
				},
				{
					"name": "right",
					"description": "右侧的操作按钮 { label: 按钮名称, extraClass: 指定按钮样式类 }"
				},
				{
					"name": "threshold",
					"description": "触发状态改变的阈值（滑动距离），单位为px"
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": "是否禁用"
				},
				{
					"name": "auto-close",
					"valueSet": "boolean",
					"description": "点击按钮时是否自动关闭, 默认 true"
				}
			],
			"events": [
				{
					"name": "action",
					"description": "点击时触发"
				},
				{
					"name": "close",
					"description": "关闭时触发, event.detail = undefined"
				},
				{
					"name": "open",
					"description": "打开时触发, event.detail = { position: ‘left’ | ‘right’ }"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/swipe-action/README.md"
				}
			]
		},
		{
			"name": "mc-switch",
			"description": "用于在打开和关闭状态之间进行切换。",
			"attributes": [
				{
					"name": "content-class",
					"description": "未开发"
				},
				{
					"name": "inner-class",
					"description": "未开发"
				},
				{
					"name": "value",
					"description": "当前开关的值"
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": "是否禁用"
				},
				{
					"name": "active-color",
					"description": "打开时的背景色"
				},
				{
					"name": "inactive-color",
					"description": "关闭时的背景色"
				},
				{
					"name": "true-value",
					"description": "打开时的值"
				},
				{
					"name": "false-value",
					"description": "关闭时的值"
				},
				{
					"name": "open-text",
					"description": "打开时的文案，未做"
				},
				{
					"name": "close-text",
					"description": "关闭时的文案，未做"
				},
				{
					"name": "async",
					"valueSet": "boolean",
					"description": "操作是否为异步"
				}
			],
			"events": [
				{
					"name": "click",
					"description": "async = true时，点击时触发"
				},
				{
					"name": "change",
					"description": "开关状态切换回调"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/switch/README.md"
				}
			]
		},
		{
			"name": "mc-tabs",
			"description": "选项卡组件，用于在不同的内容区域之间进行切换。",
			"attributes": [
				{
					"name": "nav-class",
					"description": "指定标签栏样式类"
				},
				{
					"name": "tab-class",
					"description": "指定标签样式类， 未做"
				},
				{
					"name": "tab-active-class",
					"description": "指定标签激活态样式类， 未做"
				},
				{
					"name": "line-class",
					"description": "指定标签激活时底部线条的样式类， 未做"
				},
				{
					"name": "color",
					"description": "标签主题色"
				},
				{
					"name": "sticky",
					"valueSet": "boolean",
					"description": "是否使用粘性定位布局"
				},
				{
					"name": "animated",
					"valueSet": "boolean",
					"description": "是否开启切换标签内容时的转场动画"
				},
				{
					"name": "swipeable",
					"valueSet": "boolean",
					"description": "是否开启手势滑动切换"
				},
				{
					"name": "line-width",
					"description": "底部条宽度，默认单位px"
				},
				{
					"name": "line-height",
					"description": "底部条高度，默认单位px"
				},
				{
					"name": "title-active-color",
					"description": "标题选中态颜色"
				},
				{
					"name": "title-inactive-color",
					"description": "标题默认态颜色"
				},
				{
					"name": "active",
					"description": "当前选中标签的标识符"
				},
				{
					"name": "type",
					"values": [
						{
							"name": "line",
							"description": "下划线式"
						},
						{
							"name": "card",
							"description": "卡片式"
						}
					],
					"description": "样式风格, 默认 line"
				},
				{
					"name": "border",
					"valueSet": "boolean",
					"description": "是否展示外边框，仅在 line 风格下生效"
				},
				{
					"name": "ellipsis",
					"valueSet": "boolean",
					"description": "是否省略过长的标题文字"
				},
				{
					"name": "duration",
					"description": "动画时间，单位秒"
				},
				{
					"name": "z-index",
					"description": "z-index 层级"
				},
				{
					"name": "swipe-threshold",
					"description": "滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动, 默认 4"
				},
				{
					"name": "offset-top",
					"description": "粘性定位布局下与顶部的最小距离，单位px"
				},
				{
					"name": "lazy-render",
					"valueSet": "boolean",
					"description": "是否开启标签页内容延迟渲染, 未做"
				}
			],
			"events": [
				{
					"name": "disabled",
					"description": "禁用状态下点击标签时触发"
				},
				{
					"name": "click",
					"description": "点击标签时触发"
				},
				{
					"name": "scroll",
					"description": "滚动时触发"
				},
				{
					"name": "change",
					"description": "当前激活的标签改变时触发"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/tabs/README.md"
				}
			]
		},
		{
			"name": "mc-tabs-pane",
			"description": "Tab面板",
			"attributes": [
				{
					"name": "name",
					"description": "用于标识当前面板，对应 value，默认为其索引值"
				}
			],
			"events": [],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/tabs-pane/README.md"
				}
			]
		},
		{
			"name": "mc-time-picker",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "content-class",
					"description": "指定 list-item 内容区域的的样式类"
				},
				{
					"name": "indicator-style",
					"description": "设置选择器中间选中框的样式"
				},
				{
					"name": "indicator-class",
					"description": "置选择器中间选中框的类名"
				},
				{
					"name": "title",
					"description": "弹框的标题"
				},
				{
					"name": "ok-text",
					"description": "确定按钮的文案"
				},
				{
					"name": "cancel-text",
					"description": "取消按钮的文案"
				},
				{
					"name": "show-toolbar",
					"valueSet": "boolean",
					"description": "是否显示顶部标题栏"
				},
				{
					"name": "mode",
					"values": [
						{ "name": "24", "description": "24小时制" },
						{ "name": "12", "description": "12小时制" }
					],
					"description": "时间选择器类型"
				},
				{
					"name": "value",
					"description": "选中的值"
				},
				{
					"name": "default-value",
					"description": "弹出面板时自动选中的值"
				},
				{
					"name": "label",
					"description": "label 内容"
				},
				{
					"name": "label-width",
					"description": "label 宽度"
				},
				{
					"name": "tag",
					"description": "弹层的id，默认picker-popup"
				},
				{
					"name": "use-item-slot",
					"valueSet": "boolean",
					"description": "是否启用触发弹层的的插槽"
				},
				{
					"name": "border",
					"valueSet": "boolean",
					"description": "item是否展示边框"
				},
				{
					"name": "extra",
					"description": "item右边的内容"
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": "是否禁用"
				}
			],
			"events": [
				{
					"name": "cancel",
					"description": "弹框关闭时触发"
				},
				{
					"name": "change",
					"description": "点击确定后触发"
				},
				{
					"name": "close",
					"description": "点击取消按钮时触发"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/time-picker/README.md"
				}
			]
		},
		{
			"name": "mc-upload",
			"description": "上传功能",
			"attributes": [
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": "是否禁用"
				},
				{
					"name": "multiple",
					"valueSet": "boolean",
					"description": "是否多选"
				},
				{
					"name": "url",
					"description": "上传请求的地址"
				},
				{
					"name": "headers",
					"description": "上传请求携带的头部信息"
				},
				{
					"name": "name",
					"description": "后端接手file文件的字段"
				},
				{
					"name": "mode",
					"values": [
						{ "name": "image", "description": "图片" },
						{ "name": "video", "description": "视频" },
						{ "name": "medium", "description": "音频" },
						{ "name": "files", "description": "文件" },
					],
					"description": "文件的归类"
				},
				{
					"name": "accept",
					"description": "文件格式"
				},
				{
					"name": "size",
					"description": "限制上传文件大小, 默认不限制（单位：mb）"
				},
				{
					"name": "max",
					"description": "一次性最多选择的文件数量, 默认 100, multiple = true时有效"
				},
				{
					"name": "size-type",
					"values": [
						{ "name": "['original', 'compressed']" },
						{ "name": "['original']" },
						{ "name": "['compressed']" },
					],
					"description": "所选的图片的尺寸; original: 原图; compressed: 压缩图"
				},
				{
					"name": "source-type",
					"values": [
						{ "name": "['album', 'camera']" },
						{ "name": "['album']" },
						{ "name": "['camera']" },
					],
					"description": "选择图片的来源; album: 从相册选图; camera: 使用相机"
				},
				{
					"name": "compressed",
					"valueSet": "boolean",
					"description": "是否压缩所选择的视频文件; 当 mode = video时生效"
				},
				{
					"name": "max-duration",
					"description": "拍摄视频最长拍摄时间，默认 60, 单位秒, 当mode = video 或 media时生效"
				},
				{
					"name": "camera",
					"description": "默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效"
				},
				{
					"name": "parallel",
					"valueSet": "boolean",
					"description": "是否启用并行上传, 默认true"
				},
				{
					"name": "fns",
					"description": "上传的回调，可设置: enhancer, onPostBefore, onPostAfter, onError, onBegin, onFileBefore, onFileStart, onFileSuccess, onFileError, onComplete"
				}
			],
			"events": [
				{
					"name": "ready",
					"description": "组件在视图层布局完成后执行"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/upload/README.md"
				}
			]
		},
		{
			"name": "mc-upload-picker",
			"description": "文件上传选择器",
			"attributes": [
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": "是否禁用"
				},
				{
					"name": "max",
					"description": "允许上传的数量"
				},
				{
					"name": "upload-text",
					"description": "上传按钮底部的文案"
				},
				{
					"name": "preview-size",
					"description": "预览文件的大小, 默认150; 单位rpx"
				},
				{
					"name": "data-source",
					"description": "选取的文件数组"
				},
				{
					"name": "picker",
					"description": "选择器的类型，默认图片, 其他还未开发"
				},
				{
					"name": "preview-video",
					"valueSet": "boolean",
					"description": "选取的视频是否允许预览"
				},
				{
					"name": "preview-image",
					"valueSet": "boolean",
					"description": "选取的图片是否允许预览"
				},
				{
					"name": "image-fit",
					"valueSet": "image-fit",
					"description": "图片裁剪、缩放的模式"
				},
				{
					"name": "upload-opts",
					"description": "上传组件的属性，参考mc-upload"
				},
				{
					"name": "use-ready",
					"valueSet": "boolean",
					"description": "组件在视图层布局完成后是否对外暴露ready事件"
				}
			],
			"events": [
				{
					"name": "ready",
					"description": "组件在视图层布局完成后执行"
				},
				{
					"name": "change",
					"description": "dataSource值变动后触发"
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/upload-picker/README.md"
				}
			]
		},
		{
			"name": "mc-video",
			"description": "视频播放器, 用于解决iOS并发的video导致黑屏的情况，后续也可以作为自定义播放器",
			"attributes": [
				{
					"name": "spin-opts",
					"description": "mc-spin组件的属性, 默认 { size: 50 }"
				},
				{
					"name": "play-style",
					"description": "指定播放按钮的样式"
				},
				{
					"name": "src",
					"description": "视频连接"
				},
				{
					"name": "autoplay",
					"valueSet": "boolean",
					"description": "是否自动播放"
				},
				{
					"name": "poster",
					"description": "视频封面的图片网络资源地址或云文件ID（2.3.0）。若 controls 属性值为 false 则设置 poster 无效"
				},
				{
					"name": "show-center-play-btn",
					"valueSet": "boolean",
					"description": "是否显示视频中间的播放按钮"
				},
				{
					"name": "show-mute-btn",
					"valueSet": "boolean",
					"description": "是否显示静音按钮"
				},
				{
					"name": "show-play-btn",
					"valueSet": "boolean",
					"description": "是否显示视频底部控制栏的播放按钮"
				},
				{
					"name": "show-fullscreen-btn",
					"valueSet": "boolean",
					"description": "是否显示全屏按钮"
				},
				{
					"name": "controls",
					"valueSet": "boolean",
					"description": "是否显示默认播放控件（播放/暂停按钮、播放进度、时间）"
				},
				{
					"name": "picture-in-picture-mode",
					"description": "设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： [\"push\", \"pop\"]）"
				}
			],
			"events": [],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/video/README.md"
				}
			]
		}
	],
	globalAttributes: [
		{
			name: "mc-class",
			description: "组件对外统一暴露的类名"
		},
		{
			name: "mc-style",
			description: "组件对外统一暴露的样式属性"
		},
	],
	valueSets: [
		...commonValueSets,
		{
			"name": "number-dance-mode",
			"values": [
				{ "name": "scroll", "description": "滚动" },
				{ "name": "count", "description": "计算" },
			],
		},
		{
			"name": "number-dance-scroll-type",
			"values": [
				{ "name": "soft", "description": "由当前数字通过transition的方式切换到目标数字（比较柔和）" },
				{ "name": "hard", "description": "会进行duration时长的animation动画后切换到目标数字，比如适用那种抽奖的场景" },
			],
		},
		{
			"name": "placement",
			"values": [
				{ "name": "top", "description": "从顶部弹出" },
				{ "name": "left", "description": "从左侧弹出" },
				{ "name": "right", "description": "从右侧弹出" },
				{ "name": "bottom", "description": "从底部弹出" },
				{ "name": "center", "description": "从中间弹出" },
			],
		},
		{
			"name": "image-fit",
			"values": [
				{ "name": "none", "description": "裁剪模式，不缩放图片，只显示图片的中间区域" },
				{ "name": "fill", "description": "缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素" },
				{ "name": "cover", "description": "缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。" },
				{ "name": "contain", "description": "缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。" },
			]
		},
	]
};