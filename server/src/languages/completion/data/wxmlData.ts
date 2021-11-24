import { WXMLData } from '../../modes/wxml/IWXMLLanguageTypes';

interface IGrammarData {
	name: string,
	valueSet?: string
}
export const CONDITION_GRAMMARS: IGrammarData[] = [
	{ name: 'wx:if', valueSet: 'block' },
	{ name: 'wx:elif',  valueSet: 'block' },
	{ name: 'wx:else' },
];

export const LIST_GRAMMARS: IGrammarData[] = [
	{ name: 'wx:for', valueSet: 'block' },
	{ name: 'wx:for-item'  },
	{ name: 'wx:for-index' },
	{ name: 'wx:key' },
];

export const WXML_GRAMMARS: IGrammarData[] = [...CONDITION_GRAMMARS, ...LIST_GRAMMARS];

export const EVENT_PREFIX_LIST = [
	'bind','capture-bind','mut-bind','catch','capture-catch'
];

export const wxmlData: WXMLData = {
	tags: [
		{
			"name": "cover-image",
			"description": {
				"kind": "markdown",
				"value": "覆盖在原生组件之上的图片视图。\n目前原生组件均已支持同层渲染，建议使用 `image` 替代。可覆盖的原生组件同`cover-view`，支持嵌套在`cover-view`里。"
			},
			"attributes": [
				{
					"name": "src",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| string | | 否 | 图标路径，支持临时路径、网络地址（1.6.0起支持）、云文件ID（2.2.3起支持）。 | `1.4.0` "
					}
				},
				{
					"name": "referrer-policy",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | | "
					},
					"values": [
						{
							"name": "origin"
						},
						{
							"name": "no-referrer"
						}
					]
				}
			],
			"events": [
				{
					"name": "load",
					"description": ""
				},
				{
					"name": "error",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html"
				}
			]
		},
		{
			"name": "cover-view",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "scroll-top",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				}
			],
			"events": [],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html"
				}
			]
		},
		{
			"name": "match-media",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "min-width",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "max-width",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "width",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "min-height",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "max-height",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "height",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "orientation",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "landscape"
						},
						{
							"name": "portrait"
						}
					]
				}
			],
			"events": [],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html"
				}
			]
		},
		{
			"name": "moveable-area",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "scale-area",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				}
			],
			"events": [],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/moveable-area.html"
				}
			]
		},
		{
			"name": "moveable-view",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "direction",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "all"
						},
						{
							"name": "vertical"
						},
						{
							"name": "horizontal"
						},
						{
							"name": "none"
						}
					]
				},
				{
					"name": "inertia",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "out-of-bounds",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "x",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "y",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "damping",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "friction",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "disabled",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "scale",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "scale-min",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "scale-max",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "scale-value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "animation",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
					"values": [
						{
							"name": "true"
						},
						{
							"name": "false"
						}
					]
				}
			],
			"events": [
				{
					"name": "change",
					"description": ""
				},
				{
					"name": "scale",
					"description": ""
				},
				{
					"name": "htouchmove",
					"description": ""
				},
				{
					"name": "vtouchmove",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/moveable-view.html"
				}
			]
		},
		{
			"name": "page-container",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "duration",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "z-index",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "position",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "top"
						},
						{
							"name": "bottom"
						},
						{
							"name": "right"
						},
						{
							"name": "center"
						}
					]
				},
				{
					"name": "overlay-style",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "custom-style",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "show",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "overlay",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "round",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "close-on-slideDown",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
					"values": [
						{
							"name": "true"
						},
						{
							"name": "false"
						}
					]
				}
			],
			"events": [
				{
					"name": "beforeenter",
					"description": ""
				},
				{
					"name": "enter",
					"description": ""
				},
				{
					"name": "afterenter",
					"description": ""
				},
				{
					"name": "beforeleave",
					"description": ""
				},
				{
					"name": "leave",
					"description": ""
				},
				{
					"name": "afterleave",
					"description": ""
				},
				{
					"name": "clickoverlay",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html"
				}
			]
		},
		{
			"name": "scroll-view",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "upper-threshold",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "lower-threshold",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "scroll-top",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "scroll-left",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "scroll-into-view",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "refresher-threshold",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "refresher-default-style",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "black"
						},
						{
							"name": "white"
						},
						{
							"name": "none"
						}
					]
				},
				{
					"name": "refresher-background",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "scroll-x",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "scroll-y",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "scroll-with-animation",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "enable-back-to-top",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "enable-flex",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "scroll-anchoring",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "refresher-enabled",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "refresher-triggered",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "enhanced",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "bounces",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "show-scrollbar",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "paging-enabled",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "fast-deceleration",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
					"values": [
						{
							"name": "true"
						},
						{
							"name": "false"
						}
					]
				}
			],
			"events": [
				{
					"name": "dragstart",
					"description": ""
				},
				{
					"name": "dragging",
					"description": ""
				},
				{
					"name": "dragend",
					"description": ""
				},
				{
					"name": "scrolltoupper",
					"description": ""
				},
				{
					"name": "scrolltolower",
					"description": ""
				},
				{
					"name": "scroll",
					"description": ""
				},
				{
					"name": "refresherpulling",
					"description": ""
				},
				{
					"name": "refresherrefresh",
					"description": ""
				},
				{
					"name": "refresherrestore",
					"description": ""
				},
				{
					"name": "refresherabort",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
				}
			]
		},
		{
			"name": "share-element",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "key",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "duration",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "easing-function",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "transform",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
					"values": [
						{
							"name": "true"
						},
						{
							"name": "false"
						}
					]
				}
			],
			"events": [],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/share-element.html"
				}
			]
		},
		{
			"name": "swiper",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "indicator-color",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "indicator-active-color",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "current",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "interval",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "duration",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "previous-margin",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "next-margin",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "display-multiple-items",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "easing-function",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "indicator-dots",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "autoplay",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "circular",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "vertical",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "snap-to-edge",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
					"values": [
						{
							"name": "true"
						},
						{
							"name": "false"
						}
					]
				}
			],
			"events": [
				{
					"name": "change",
					"description": ""
				},
				{
					"name": "transition",
					"description": ""
				},
				{
					"name": "animationfinish",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
				}
			]
		},
		{
			"name": "swiper-item",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "item-id",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "skip-hidden-item-layout",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
					"values": [
						{
							"name": "true"
						},
						{
							"name": "false"
						}
					]
				}
			],
			"events": [],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html"
				}
			]
		},
		{
			"name": "view",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "hover-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "hover-start-time",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "hover-stay-time",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "hover-stop-propagation",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
					"values": [
						{
							"name": "true"
						},
						{
							"name": "false"
						}
					]
				}
			],
			"events": [],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/view.html"
				}
			]
		},
		{
			"name": "icon",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "size",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "color",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				}
			],
			"events": [],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/icon.html"
				}
			]
		},
		{
			"name": "progress",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "percent",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "border-radius",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "font-size",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "stroke-width",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "color",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "activeColor",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "backgroundColor",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "active-mode",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "duration",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "show-info",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "active",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
					"values": [
						{
							"name": "true"
						},
						{
							"name": "false"
						}
					]
				}
			],
			"events": [
				{
					"name": "activeend",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/progress.html"
				}
			]
		},
		{
			"name": "rich-text",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "nodes",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "space",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				}
			],
			"events": [],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html"
				}
			]
		},
		{
			"name": "text",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "space",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "ensp"
						},
						{
							"name": "emsp"
						},
						{
							"name": "nbsp"
						}
					]
				},
				{
					"name": "selectable",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "user-select",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "decode",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
					"values": [
						{
							"name": "true"
						},
						{
							"name": "false"
						}
					]
				}
			],
			"events": [],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/text.html"
				}
			]
		},
		{
			"name": "button",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "size",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "form-type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "open-type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "hover-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "hover-start-time",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "hover-stay-time",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "lang",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "session-from",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "send-message-title",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "send-message-path",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "send-message-img",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "app-parameter",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "plain",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "disabled",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "loading",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "hover-stop-propagation",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "show-message-card",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
					"values": [
						{
							"name": "true"
						},
						{
							"name": "false"
						}
					]
				}
			],
			"events": [
				{
					"name": "getuserinfo",
					"description": ""
				},
				{
					"name": "contact",
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
					"name": "opensetting",
					"description": ""
				},
				{
					"name": "launchapp",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
				}
			]
		},
		{
			"name": "checkbox",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "color",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "disabled",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "checked",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
					"values": [
						{
							"name": "true"
						},
						{
							"name": "false"
						}
					]
				}
			],
			"events": [],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html"
				}
			]
		},
		{
			"name": "checkbox-group",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [],
			"events": [
				{
					"name": "change",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/checkbox-group.html"
				}
			]
		},
		{
			"name": "editor",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "read-only",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "placeholder",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "show-img-size",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "show-img-toolbar",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "show-img-resize",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
					"values": [
						{
							"name": "true"
						},
						{
							"name": "false"
						}
					]
				}
			],
			"events": [
				{
					"name": "ready",
					"description": ""
				},
				{
					"name": "focus",
					"description": ""
				},
				{
					"name": "blur",
					"description": ""
				},
				{
					"name": "input",
					"description": ""
				},
				{
					"name": "statuschange",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/editor.html"
				}
			]
		},
		{
			"name": "form",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "report-submit",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "report-submit-timeout",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				}
			],
			"events": [
				{
					"name": "submit",
					"description": ""
				},
				{
					"name": "reset",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/form.html"
				}
			]
		},
		{
			"name": "input",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "password",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "placeholder",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "placeholder-style",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "placeholder-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "disabled",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "maxlength",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "cursor-spacing",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "auto-focus",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "focus",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "confirm-type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "always-embed",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "confirm-hold",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "cursor",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "selection-start",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "selection-end",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "adjust-position",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "hold-keyboard",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "safe-password-cert-path",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "safe-password-length",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "safe-password-time-stamp",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "safe-password-nonce",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "safe-password-salt",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "safe-password-custom-hash",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				}
			],
			"events": [
				{
					"name": "input",
					"description": ""
				},
				{
					"name": "focus",
					"description": ""
				},
				{
					"name": "blur",
					"description": ""
				},
				{
					"name": "confirm",
					"description": ""
				},
				{
					"name": "keyboardheightchange",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
				}
			]
		},
		{
			"name": "keyboard-accessory",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [],
			"events": [],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/keyboard-accessory.html"
				}
			]
		},
		{
			"name": "label",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "for",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				}
			],
			"events": [],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/label.html"
				}
			]
		},
		{
			"name": "picker",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "header-text",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "mode",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "disabled",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
					"values": [
						{
							"name": "true"
						},
						{
							"name": "false"
						}
					]
				}
			],
			"events": [
				{
					"name": "cancel",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker.html"
				}
			]
		},
		{
			"name": "picker-view",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "indicator-style",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "indicator-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "mask-style",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "mask-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				}
			],
			"events": [
				{
					"name": "change",
					"description": ""
				},
				{
					"name": "pickstart",
					"description": ""
				},
				{
					"name": "pickend",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html"
				}
			]
		},
		{
			"name": "picker-view-column",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [],
			"events": [],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker-view-column.html"
				}
			]
		},
		{
			"name": "radio",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "checked",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "disabled",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "color",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				}
			],
			"events": [],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/radio.html"
				}
			]
		},
		{
			"name": "radio-group",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [],
			"events": [
				{
					"name": "change",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/radio-group.html"
				}
			]
		},
		{
			"name": "slider",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "min",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "max",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "step",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "disabled",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "color",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "selected-color",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "activeColor",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "backgroundColor",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "block-size",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "block-color",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "show-value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
					"values": [
						{
							"name": "true"
						},
						{
							"name": "false"
						}
					]
				}
			],
			"events": [
				{
					"name": "change",
					"description": ""
				},
				{
					"name": "changing",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/slider.html"
				}
			]
		},
		{
			"name": "switch",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "checked",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "disabled",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "switch"
						},
						{
							"name": "checkbox"
						}
					]
				},
				{
					"name": "color",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
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
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/switch.html"
				}
			]
		},
		{
			"name": "textarea",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "placeholder",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "placeholder-style",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "placeholder-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "disabled",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "maxlength",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "auto-focus",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "focus",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "auto-height",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "fixed",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "cursor-spacing",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "cursor",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "show-confirm-bar",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "selection-start",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "selection-end",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "adjust-position",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "hold-keyboard",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "disable-default-padding",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "confirm-type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "confirm-hold",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
					"values": [
						{
							"name": "true"
						},
						{
							"name": "false"
						}
					]
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
					"name": "linechange",
					"description": ""
				},
				{
					"name": "input",
					"description": ""
				},
				{
					"name": "confirm",
					"description": ""
				},
				{
					"name": "keyboardheightchange",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
				}
			]
		},
		{
			"name": "navigator",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "target",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "self"
						},
						{
							"name": "miniProgram"
						}
					]
				},
				{
					"name": "url",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "open-type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
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
						}
					]
				},
				{
					"name": "delta",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "app-id",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "path",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "extra-data",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "version",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "develop"
						},
						{
							"name": "trial"
						},
						{
							"name": "release"
						}
					]
				},
				{
					"name": "short-link",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "hover-class",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "hover-stop-propagation",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "hover-start-time",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "hover-stay-time",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				}
			],
			"events": [
				{
					"name": "success",
					"description": ""
				},
				{
					"name": "fail",
					"description": ""
				},
				{
					"name": "complete",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
				}
			]
		},
		{
			"name": "functional-page-navigator",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "version",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "develop"
						},
						{
							"name": "trial"
						},
						{
							"name": "release"
						}
					]
				},
				{
					"name": "name",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "loginAndGetUserInfo"
						},
						{
							"name": "requestPayment"
						},
						{
							"name": "chooseAddress"
						},
						{
							"name": "chooseInvoice"
						},
						{
							"name": "chooseInvoiceTitle"
						}
					]
				},
				{
					"name": "args",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				}
			],
			"events": [
				{
					"name": "success",
					"description": ""
				},
				{
					"name": "fail",
					"description": ""
				},
				{
					"name": "cancel",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html"
				}
			]
		},
		{
			"name": "navigation-bar",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "title",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "loading",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "front-color",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "#ffffff"
						},
						{
							"name": "#000000"
						}
					]
				},
				{
					"name": "background-color",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "color-animation-duration",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "color-animation-timing-func",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "linear"
						},
						{
							"name": "easeIn"
						},
						{
							"name": "easeOut"
						},
						{
							"name": "easeInOut"
						}
					]
				}
			],
			"events": [],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html"
				}
			]
		},
		{
			"name": "audio",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "id",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "src",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "loop",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "controls",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "poster",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "name",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "author",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				}
			],
			"events": [
				{
					"name": "error",
					"description": ""
				},
				{
					"name": "play",
					"description": ""
				},
				{
					"name": "pause",
					"description": ""
				},
				{
					"name": "timeupdate",
					"description": ""
				},
				{
					"name": "ended",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/audio.html"
				}
			]
		},
		{
			"name": "camera",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "mode",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "normal"
						},
						{
							"name": "scanCode"
						}
					]
				},
				{
					"name": "resolution",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "low"
						},
						{
							"name": "medium"
						},
						{
							"name": "high"
						}
					]
				},
				{
					"name": "device-position",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "front"
						},
						{
							"name": "back"
						}
					]
				},
				{
					"name": "flash",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "auto"
						},
						{
							"name": "on"
						},
						{
							"name": "off"
						},
						{
							"name": "torch"
						}
					]
				},
				{
					"name": "frame-size",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "small"
						},
						{
							"name": "medium"
						},
						{
							"name": "large"
						}
					]
				}
			],
			"events": [
				{
					"name": "stop",
					"description": ""
				},
				{
					"name": "error",
					"description": ""
				},
				{
					"name": "initdone",
					"description": ""
				},
				{
					"name": "scancode",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
				}
			]
		},
		{
			"name": "image",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "src",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "mode",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "scaleToFill"
						},
						{
							"name": "aspectFit"
						},
						{
							"name": "aspectFill"
						},
						{
							"name": "widthFix"
						},
						{
							"name": "heightFix"
						},
						{
							"name": "top"
						},
						{
							"name": "bottom"
						},
						{
							"name": "center"
						},
						{
							"name": "left"
						},
						{
							"name": "right"
						},
						{
							"name": "top left"
						},
						{
							"name": "top right"
						},
						{
							"name": "bottom left"
						},
						{
							"name": "bottom right"
						}
					]
				},
				{
					"name": "webp",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "lazy-load",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "show-menu-by-longpress",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
					"values": [
						{
							"name": "true"
						},
						{
							"name": "false"
						}
					]
				}
			],
			"events": [
				{
					"name": "error",
					"description": ""
				},
				{
					"name": "load",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
				}
			]
		},
		{
			"name": "live-player",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "src",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "mode",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "live"
						},
						{
							"name": "RTC"
						}
					]
				},
				{
					"name": "autoplay",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "muted",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "orientation",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "vertical"
						},
						{
							"name": "horizontal"
						}
					]
				},
				{
					"name": "object-fit",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "contain"
						},
						{
							"name": "fillCrop"
						}
					]
				},
				{
					"name": "background-mute",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "min-cache",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "max-cache",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "sound-mode",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "speaker"
						},
						{
							"name": "ear"
						}
					]
				},
				{
					"name": "auto-pause-if-navigate",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "auto-pause-if-open-native",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "picture-in-picture-mode",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "[]"
						},
						{
							"name": "push"
						},
						{
							"name": "pop"
						}
					]
				},
				{
					"name": "referrer-policy",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "origin"
						},
						{
							"name": "no-referrer"
						}
					]
				}
			],
			"events": [
				{
					"name": "audiovolumenotify",
					"description": ""
				},
				{
					"name": "enterpictureinpicture",
					"description": ""
				},
				{
					"name": "leavepictureinpicture",
					"description": ""
				},
				{
					"name": "statechange",
					"description": ""
				},
				{
					"name": "fullscreenchange",
					"description": ""
				},
				{
					"name": "netstatus",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
				}
			]
		},
		{
			"name": "live-push",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "url",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "mode",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "autopush",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "muted",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "enable-camera",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "auto-focus",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "orientation",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "vertical"
						},
						{
							"name": "horizontal"
						}
					]
				},
				{
					"name": "beauty",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "whiteness",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "aspect",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "min-bitrate",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "max-bitrate",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "audio-quality",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "waiting-image",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "waiting-image-hash",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "zoom",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "device-position",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "background-mute",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "mirror",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "remote-mirror",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "local-mirror",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "auto"
						},
						{
							"name": "enable"
						},
						{
							"name": "disable"
						}
					]
				},
				{
					"name": "audio-reverb-type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "0"
						},
						{
							"name": "1"
						},
						{
							"name": "2"
						},
						{
							"name": "3"
						},
						{
							"name": "4"
						},
						{
							"name": "5"
						},
						{
							"name": "6"
						},
						{
							"name": "7"
						}
					]
				},
				{
					"name": "enable-mic",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "enable-agc",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "enable-ans",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "audio-volume-type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "auto"
						},
						{
							"name": "media"
						},
						{
							"name": "voicecall"
						}
					]
				},
				{
					"name": "video-width",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "video-height",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "beauty-style",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "smooth"
						},
						{
							"name": "nature"
						}
					]
				},
				{
					"name": "filter",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "standard"
						},
						{
							"name": "pink"
						},
						{
							"name": "nostalgia"
						},
						{
							"name": "blues"
						},
						{
							"name": "romantic"
						},
						{
							"name": "cool"
						},
						{
							"name": "fresher"
						},
						{
							"name": "solor"
						},
						{
							"name": "aestheticism"
						},
						{
							"name": "whitening"
						},
						{
							"name": "cerisered"
						}
					]
				}
			],
			"events": [
				{
					"name": "statechange",
					"description": ""
				},
				{
					"name": "netstatus",
					"description": ""
				},
				{
					"name": "error",
					"description": ""
				},
				{
					"name": "bgmstart",
					"description": ""
				},
				{
					"name": "bgmprogress",
					"description": ""
				},
				{
					"name": "bgmcomplete",
					"description": ""
				},
				{
					"name": "audiovolumenotify",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-push.html"
				}
			]
		},
		{
			"name": "video",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "src",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "duration",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "controls",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "danmu-list",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "danmu-btn",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "enable-danmu",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "autoplay",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "loop",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "muted",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "initial-time",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "page-gesture",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "direction",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "0"
						},
						{
							"name": "90"
						},
						{
							"name": "-90"
						}
					]
				},
				{
					"name": "show-progress",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "show-fullscreen-btn",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "show-play-btn",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "show-center-play-btn",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "enable-progress-gesture",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "object-fit",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "contain"
						},
						{
							"name": "fill"
						},
						{
							"name": "cover"
						}
					]
				},
				{
					"name": "poster",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "show-mute-btn",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "title",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "play-btn-position",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "bottom"
						},
						{
							"name": "center"
						}
					]
				},
				{
					"name": "enable-play-gesture",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "auto-pause-if-navigate",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "auto-pause-if-open-native",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "vslide-gesture",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "vslide-gesture-in-fullscreen",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "ad-unit-id",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "poster-for-crawler",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "show-casting-button",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "picture-in-picture-mode",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "[]"
						},
						{
							"name": "push"
						},
						{
							"name": "pop"
						}
					]
				},
				{
					"name": "picture-in-picture-show-progress",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "enable-auto-rotation",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "show-screen-lock-button",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "show-snapshot-button",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "show-background-playback-button",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "background-poster",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "referrer-policy",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "origin"
						},
						{
							"name": "no-referrer"
						}
					]
				},
				{
					"name": "is-drm",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "provision-url",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "certificate-url",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "license-url",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				}
			],
			"events": [
				{
					"name": "enterpictureinpicture",
					"description": ""
				},
				{
					"name": "leavepictureinpicture",
					"description": ""
				},
				{
					"name": "seekcomplete",
					"description": ""
				},
				{
					"name": "play",
					"description": ""
				},
				{
					"name": "pause",
					"description": ""
				},
				{
					"name": "ended",
					"description": ""
				},
				{
					"name": "timeupdate",
					"description": ""
				},
				{
					"name": "fullscreenchange",
					"description": ""
				},
				{
					"name": "waiting",
					"description": ""
				},
				{
					"name": "error",
					"description": ""
				},
				{
					"name": "progress",
					"description": ""
				},
				{
					"name": "loadedmetadata",
					"description": ""
				},
				{
					"name": "controlstoggle",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
				}
			]
		},
		{
			"name": "voip-room",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "openid",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "mode",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "device-position",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				}
			],
			"events": [
				{
					"name": "error",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html"
				}
			]
		},
		{
			"name": "map",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "longitude",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "latitude",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "scale",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "min-scale",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "max-scale",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "markers",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "covers",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "polyline",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "circles",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "controls",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "include-points",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "show-location",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "polygons",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "subkey",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "layer-style",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "rotate",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "skew",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "enable-3D",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "show-compass",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "show-scale",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "enable-overlooking",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "enable-zoom",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "enable-scroll",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "enable-rotate",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "enable-satellite",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "enable-traffic",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "enable-poi",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "enable-building",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
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
					"name": "setting",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				}
			],
			"events": [
				{
					"name": "tap",
					"description": ""
				},
				{
					"name": "markertap",
					"description": ""
				},
				{
					"name": "labeltap",
					"description": ""
				},
				{
					"name": "controltap",
					"description": ""
				},
				{
					"name": "callouttap",
					"description": ""
				},
				{
					"name": "updated",
					"description": ""
				},
				{
					"name": "regionchange",
					"description": ""
				},
				{
					"name": "poitap",
					"description": ""
				},
				{
					"name": "anchorpointtap",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
				}
			]
		},
		{
			"name": "canvas",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "canvas-id",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "disable-scroll",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"valueSet": "boolean",
					"values": [
						{
							"name": "true"
						},
						{
							"name": "false"
						}
					]
				}
			],
			"events": [
				{
					"name": "touchstart",
					"description": ""
				},
				{
					"name": "touchmove",
					"description": ""
				},
				{
					"name": "touchend",
					"description": ""
				},
				{
					"name": "touchcancel",
					"description": ""
				},
				{
					"name": "longtap",
					"description": ""
				},
				{
					"name": "error",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"
				}
			]
		},
		{
			"name": "ad",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "unit-id",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "ad-intervals",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "ad-type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "ad-theme",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				}
			],
			"events": [
				{
					"name": "load",
					"description": ""
				},
				{
					"name": "error",
					"description": ""
				},
				{
					"name": "close",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/ad.html"
				}
			]
		},
		{
			"name": "ad-custom",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "unit-id",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "ad-intervals",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				}
			],
			"events": [
				{
					"name": "load",
					"description": ""
				},
				{
					"name": "error",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/ad-custom.html"
				}
			]
		},
		{
			"name": "official-account",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [],
			"events": [
				{
					"name": "load",
					"description": ""
				},
				{
					"name": "error",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html"
				}
			]
		},
		{
			"name": "open-data",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "type",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "groupName"
						},
						{
							"name": "userNickName"
						},
						{
							"name": "userAvatarUrl"
						},
						{
							"name": "userGender"
						},
						{
							"name": "userCity"
						},
						{
							"name": "userProvince"
						},
						{
							"name": "userCountry"
						},
						{
							"name": "userLanguage"
						}
					]
				},
				{
					"name": "open-gid",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "lang",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					},
					"values": [
						{
							"name": "en"
						},
						{
							"name": "zh_CN"
						},
						{
							"name": "zh_TW"
						}
					]
				},
				{
					"name": "default-text",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "default-avatar",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				}
			],
			"events": [
				{
					"name": "error",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"
				}
			]
		},
		{
			"name": "web-view",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "src",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				}
			],
			"events": [
				{
					"name": "message",
					"description": ""
				},
				{
					"name": "load",
					"description": ""
				},
				{
					"name": "error",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html"
				}
			]
		},
		{
			"name": "page-meta",
			"description": {
				"kind": "markdown",
				"value": ""
			},
			"attributes": [
				{
					"name": "background-text-style",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "background-color",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "background-color-top",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "background-color-bottom",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "root-background-color",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "scroll-top",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "scroll-duration",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "page-style",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "page-font-size",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "root-font-size",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				},
				{
					"name": "page-orientation",
					"description": {
						"kind": "markdown",
						"value": "| 类型 | 默认值 | 必填 | 说明 | 最低版本 | \n| ---- | ---- | ---- | ---- | ---- \n| | | | |"
					}
				}
			],
			"events": [
				{
					"name": "resize",
					"description": ""
				},
				{
					"name": "scroll",
					"description": ""
				},
				{
					"name": "scrolldone",
					"description": ""
				}
			],
			"references": [
				{
					"name": "微信官方组件",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html"
				}
			]
		}
	],
	globalAttributes: [
		{
			name: "class",
			description: "样式类名"
		},
		{
			name: "style",
			description: "样式"
		},
	],
	globalEvents: [
		{
			"name": "touchstart",
			"description": "手指触摸动作开始",
		},
		{
			"name": "touchmove",
			"description": "手指触摸后移动"
		},
		{
			"name": "touchcancel",
			"description": "手指触摸动作被打断，如来电提醒，弹窗"
		},
		{
			"name": "touchend",
			"description": "手指触摸动作结束"
		},
		{
			"name": "tap",
			"description": "手指触摸后马上离开"
		},
		{
			"name": "longpress",
			"description": "手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发"
		},
		{
			"name": "longtap",
			"description": "手指触摸后，超过350ms再离开（推荐使用longpress事件代替）"
		},
		{
			"name": "transitionend",
			"description": "会在 WXSS transition 或 wx.createAnimation 动画结束后触发"
		},
		{
			"name": "animationstart",
			"description": "会在一个 WXSS animation 动画开始时触发"
		},
		{
			"name": "animationiteration",
			"description": "会在一个 WXSS animation 一次迭代结束时触发"
		},
		{
			"name": "animationend",
			"description": "会在一个 WXSS animation 动画完成时触发"
		},
		{
			"name": "touchforcechange",
			"description": "在支持 3D Touch 的 iPhone 设备，重按时会触发"
		}
	]
};