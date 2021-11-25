import { WXMLData } from '../../modes/wxml/IWXMLLanguageTypes';
import { commonValueSets } from './common';

export const mcData: WXMLData = {
	tags: [
		{
			"name": "mc-action-sheet",
			"description": {
				"kind": "markdown",
				"value": "动作面板"
			},
			"attributes": [
				{
					"name": "visible",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| boolean | `false` | 否 | 是否可见"
					}
				},
				{
					"name": "cancelText",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| string | `取消` | 否 | 取消按钮文字,为空不展示底部取消按钮"
					}
				},
				{
					"name": "title",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| string | | 否 | 弹框标题"
					}
				},
				{
					"name": "description",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| string | | 否 | 弹框二级标题"
					}
				},
				{
					"name": "actions",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| array | `[]` | 否 | 面板选项列表, 每项可接受字段：`name` `extra` `color` `subname` `disabled` `onClick`"
					}
				},
				{
					"name": "closeOnClickAction",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| boolean | `true` | 否 | 选中某一项后是否关闭弹层"
					}
				},
				{
					"name": "id",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "lang",
					"valueSet": "lang",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "businessId",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "sessionFrom",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "sendMessageTitle",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "sendMessagePath",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "sendMessageImg",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "showMessageCard",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "appParameter",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "ariaLabel",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "round",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "mask",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "maskClosable",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "openType",
					"valueSet": "open-type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
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
				{
					"name": "id",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					},
					"values": [
						{
							"name": "default"
						},
						{
							"name": "primary"
						},
						{
							"name": "text"
						},
						{
							"name": "success"
						},
						{
							"name": "error"
						},
						{
							"name": "warning"
						},
					]
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					},
				},
				{
					"name": "square",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "circle",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "size",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					},
					"values": [
						{ "name": "large" },
						{ "name": "medium" },
						{ "name": "small" }
					]
				},
				{
					"name": "openType",
					"valueSet": "open-type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "long",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "plain",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "wait",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "icon",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "color",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "lang",
					"valueSet": "lang",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "businessId",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "sessionFrom",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "sendMessageTitle",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "sendMessagePath",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "sendMessageImg",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "showMessageCard",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "appParameter",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "ariaLabel",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "click",
					"description": ""
				},
				{
					"name": "getuserinfo",
					"description": ""
				},
				{
					"name": "getphonenumber",
					"description": ""
				},
				{
					"name": "error",
					"description": ""
				},
				{
					"name": "launchapp",
					"description": ""
				},
				{
					"name": "opensetting",
					"description": ""
				}
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
			"description": {
				"kind": "markdown",
				"value": "级联选择器"
			},
			"attributes": [
				{
					"name": "content-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "dataSource",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "useTabs",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "title",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "cancelText",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "okText",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "showToolbar",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "label",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "labelWidth",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "tag",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "useItemSlot",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "border",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "extra",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "change",
					"description": ""
				},
				{
					"name": "cancel",
					"description": ""
				},
				{
					"name": "close",
					"description": ""
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
			"description": {
				"kind": "markdown",
				"value": "复选框"
			},
			"attributes": [
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "shape",
					"values": [
						{ "name": "square" },
						{ "name": "round" },
					],
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "color",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "label",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "indeterminate",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "name",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "change",
					"description": ""
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/checkbox/README.md"
				}
			]
		},
		{
			"name": "mc-checkbox-group",
			"description": {
				"kind": "markdown",
				"value": "复选框组"
			},
			"attributes": [
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/checkbox-group/README.md"
				}
			]
		},
		{
			"name": "mc-collapse",
			"description": {
				"kind": "markdown",
				"value": "可以折叠/展开的内容区域"
			},
			"attributes": [
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "accordion",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "change",
					"description": ""
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "content-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "name",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
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
					"name": "useSlot",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "targetTime",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "serverTime",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "format",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "auto",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "change",
					"description": ""
				},
				{
					"name": "finish",
					"description": ""
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "content-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "indicatorStyle",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "indicatorClass",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "mode",
					"values": [
						{ "name": "date" },
						{ "name": "month" },
						{ "name": "quarter" },
					],
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "minDate",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "maxDate",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "title",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "cancelText",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "okText",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "showToolbar",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "defaultValue",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "label",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "labelWidth",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "tag",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "useItemSlot",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "border",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "extra",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "cancel",
					"description": ""
				},
				{
					"name": "change",
					"description": ""
				},
				{
					"name": "close",
					"description": ""
				},
				{
					"name": "cancel",
					"description": ""
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "activeColor",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "mask",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "zIndex",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "duration",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "direction",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "maskCloseable",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "closeOnClickOutside",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
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
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "title",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "titleClass",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "options",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "change",
					"description": ""
				},
				{
					"name": "close",
					"description": ""
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "elementId",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "echarts",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "options",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "lazy",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "model",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "rules",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "labelWidth",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "border",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "showMessage",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "labelPosition",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "ready",
					"description": ""
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "label-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "content-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "label",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "labelWidth",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "labelPosition",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "useLabelSlot",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "prop",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "required",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "rules",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "labelFor",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "indent",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "inherit",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "click",
					"description": ""
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "src",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "round",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "width",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "height",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "radius",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "lazyLoad",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "useErrorSlot",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "useLoadingSlot",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "showMenuByLongpress",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "fit",
					"valueSet": "image-fit",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "showError",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "showLoading",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "alt",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/image/README.md"
				}
			]
		},
		{
			"name": "mc-imgs-crop",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "src",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "scale",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "rotate",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "border",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "height",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "width",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "color",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "position",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "elementId",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
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
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "placeholder",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "placeholderStyle",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "placeholderClass",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "maxlength",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "cursorSpacing",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "autoFocus",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "focus",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "cursor",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "selectionStart",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "selectionEnd",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "adjustPosition",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "holdKeyboard",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "readonly",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "mc-input-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "password",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "confirmType",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "confirmHold",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "useClearSlot",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "clearable",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "right",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "usePrependSlot",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "useAppendSlot",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "autoHeight",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "fixed",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "showConfirmBar",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "textareaStyle",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "viewPlaceholder",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "blur",
					"description": ""
				},
				{
					"name": "focus",
					"description": ""
				},
				{
					"name": "confirm",
					"description": ""
				},
				{
					"name": "keyboardheightchange",
					"description": ""
				},
				{
					"name": "linechange",
					"description": ""
				},
				{
					"name": "clear",
					"description": ""
				},
				{
					"name": "input",
					"description": ""
				},
				{
					"name": "change",
					"description": ""
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
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "placeholder",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "placeholderStyle",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "placeholderClass",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "maxlength",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "cursorSpacing",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "autoFocus",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "focus",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "cursor",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "selectionStart",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "selectionEnd",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "adjustPosition",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "holdKeyboard",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "readonly",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "mc-input-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "cancelText",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "showCancel",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "blur",
					"description": ""
				},
				{
					"name": "focus",
					"description": ""
				},
				{
					"name": "confirm",
					"description": ""
				},
				{
					"name": "keyboardheightchange",
					"description": ""
				},
				{
					"name": "clear",
					"description": ""
				},
				{
					"name": "input",
					"description": ""
				},
				{
					"name": "change",
					"description": ""
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "title",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "border",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "labelWidth",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "label-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "wrapper-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "content-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "label",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "labelWidth",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "content",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "url",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "leftIcon",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "arrow",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "useLeftIconSlot",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "indent",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "linkType",
					"valueSet": "navigate-fn-type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "border",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "borderIndent",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "click",
					"description": ""
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "wrapper-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "visible",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "mode",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "mask",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "maskClosable",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "maskStyle",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "zIndex",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "title",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "content",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "okText",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "cancelText",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "footer",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "actions",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "close",
					"description": ""
				},
				{
					"name": "ok",
					"description": ""
				},
				{
					"name": "cancel",
					"description": ""
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "text",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "mode",
					"values": [
						{ "name": "closeable" },
						{ "name": "link" },
					],
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "url",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "openType",
					"valueSet": "navigate-type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "closePosition",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "delay",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "speed",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "scrollable",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "color",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "backgroundColor",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "wrapable",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/notice-bar/README.md"
				}
			]
		},
		{
			"name": "mc-number-dance",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "mode",
					"valueSet": "number-dance-mode",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "scrollType",
					"valueSet": "number-dance-scroll-type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "duration",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "itemStyle",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "numberStyle",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "delay",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "separator",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "separatorStyle",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "decimalStyle",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "mode",
					"valueSet": "number-dance-mode",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "scrollType",
					"valueSet": "number-dance-scroll-type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "duration",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "itemStyle",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "numberStyle",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "content-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "dataSource",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "cols",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "indicatorStyle",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "indicatorClass",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "title",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "cancelText",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "okText",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "showToolbar",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "label",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "labelWidth",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "tag",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "useItemSlot",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "border",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "extra",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "cancel",
					"description": ""
				},
				{
					"name": "change",
					"description": ""
				},
				{
					"name": "close",
					"description": ""
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "enter-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "enter-to-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "leave-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "leave-active-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "leave-to-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "round",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "mask",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "maskClosable",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "placement",
					"valueSet": "placement",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "closeable",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "closeIconPosition",
					"values": [
						{ "name": "top-right" },
						{ "name": "top-left" },
						{ "name": "bottom-right" },
						{ "name": "bottom-left" },
					],
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "maskStyle",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "zIndex",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "close",
					"description": ""
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "label",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "color",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "name",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "iconStyle",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "change",
					"description": ""
				}
			],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/radio/README.md"
				}
			]
		},
		{
			"name": "mc-radio-group",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/radio-group/README.md"
				}
			]
		},
		{
			"name": "mc-recycle-list",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "height",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "show",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "scroll",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "showScrollStatus",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "scrollTop",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "lowerThreshold",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "listenScroll",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "total",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "current",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "pull-down-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "pull-up-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "core-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "pauseY",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "refreshHeight",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "pull",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "loadData",
					"description": ""
				},
				{
					"name": "scroll",
					"description": ""
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "height",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "show",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "scroll",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "showScrollStatus",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "scrollTop",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "lowerThreshold",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "listenScroll",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "total",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "current",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
			],
			"events": [
				{
					"name": "ready",
					"description": ""
				},
				{
					"name": "loadData",
					"description": ""
				},
				{
					"name": "scroll",
					"description": ""
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "imagePadding",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "useButtonSlot",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "activeColor",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "inactiveColor",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "max",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "min",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "step",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "barHeight",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "drag-start",
					"description": ""
				},
				{
					"name": "drag-end",
					"description": ""
				},
				{
					"name": "drag",
					"description": ""
				},
				{
					"name": "change",
					"description": ""
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "size",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "color",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "useLoadingSlot",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "fixed",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "input-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "plus-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "minus-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "integer",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "inputWidth",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "buttonSize",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "async",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "disableInput",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "decimalLength",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "min",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "max",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "step",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "forceStep",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "showPlus",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "showMinus",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "disablePlus",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "disableMinus",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "focus",
					"description": ""
				},
				{
					"name": "blur",
					"description": ""
				},
				{
					"name": "tip",
					"description": ""
				},
				{
					"name": "overlimit",
					"description": ""
				},
				{
					"name": "type",
					"description": ""
				},
				{
					"name": "change",
					"description": ""
				},
				{
					"name": "async",
					"description": ""
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "offsetTop",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "zIndex",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [],
			"references": [
				{
					"name": "wya-mc组件库",
					"url": "https://github.com/wya-team/wya-mc/blob/1.x/src/sticky/README.md"
				}
			]
		},
		{
			"name": "mc-swipe-action",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "left",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "right",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "threshold",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "autoClose",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "action",
					"description": ""
				},
				{
					"name": "status",
					"description": ""
				},
				{
					"name": "open",
					"description": ""
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "content-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "inner-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "loading",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "activeColor",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "inactiveColor",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "trueValue",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "falseValue",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "openText",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "closeText",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "async",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "click",
					"description": ""
				},
				{
					"name": "change",
					"description": ""
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "nav-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "tab-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "tab-active-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "line-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "color",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "sticky",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "animated",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "swipeable",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "lineWidth",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "lineHeight",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "titleActiveColor",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "titleInactiveColor",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "active",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "type",
					"values": [
						{ "name": "line" },
						{ "name": "card" },
					],
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "border",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "ellipsis",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "duration",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "zIndex",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "swipeThreshold",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "offsetTop",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "lazyRender",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "disabled",
					"description": ""
				},
				{
					"name": "click",
					"description": ""
				},
				{
					"name": "scroll",
					"description": ""
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "dot",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "info",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "title",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "titleStyle",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "name",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
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
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "indicatorStyle",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "indicatorClass",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "mode",
					"values": [
						{ "name": "24" },
						{ "name": "12" },
					],
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "title",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "cancelText",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "okText",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "showToolbar",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "defaultValue",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "label",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "labelWidth",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "tag",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "useItemSlot",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "border",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "extra",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "cancel",
					"description": ""
				},
				{
					"name": "change",
					"description": ""
				},
				{
					"name": "close",
					"description": ""
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "multiple",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "url",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "headers",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "name",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "mode",
					"values": [
						{ "name": "image" },
						{ "name": "video" },
						{ "name": "medium" },
						{ "name": "files" },
					],
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "accept",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "size",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "max",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "sizeType",
					"values": [
						{ "name": "['original', 'compressed']" },
						{ "name": "['original']" },
						{ "name": "['compressed']" },
					],
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "sourceType",
					"values": [
						{ "name": "['album', 'camera']" },
						{ "name": "['album']" },
						{ "name": "['camera']" },
					],
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "compressed",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "maxDuration",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "camera",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "parallel",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "fns",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "ready",
					"description": ""
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "max",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "uploadText",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "previewSize",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "name",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "dataSource",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "picker",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "previewVideo",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "previewImage",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "previewFullImage",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "imageFit",
					"valueSet": "image-fit",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "uploadOpts",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "useReady",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				}
			],
			"events": [
				{
					"name": "ready",
					"description": ""
				},
				{
					"name": "change",
					"description": ""
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
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "spinOpts",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "playStyle",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "src",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "autoplay",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "poster",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "showCenterPlayBtn",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "showMuteBtn",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "showPlayBtn",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "showFullscreenBtn",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "controls",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
				},
				{
					"name": "pictureInPictureMode",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 \n| ---- | ---- | ---- | ---- \n| | | |"
					}
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
			name: "mcStyle",
			description: "组件对外统一暴露的样式属性"
		},
	],
	valueSets: [
		...commonValueSets,
		{
			"name": "number-dance-mode",
			"values": [
				{ "name": "scroll" },
				{ "name": "count" },
			],
		},
		{
			"name": "number-dance-scroll-type",
			"values": [
				{ "name": "soft" },
				{ "name": "hard" },
			],
		},
		{
			"name": "placement",
			"values": [
				{ "name": "top" },
				{ "name": "left" },
				{ "name": "right" },
				{ "name": "bottom" },
				{ "name": "center" },
			],
		},
		{
			"name": "image-fit",
			"values": [
				{ "name": "none" },
				{ "name": "fill" },
				{ "name": "cover" },
				{ "name": "contain" },
			]
		},
	]
};