import { WXMLData } from '../../modes/wxml/IWXMLLanguageTypes';
import { commonValueSets } from './common';

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
				"value": "覆盖在原生组件之上的图片视图。\n\n目前原生组件均已支持同层渲染，建议使用 `image` 替代。可覆盖的原生组件同`cover-view`，支持嵌套在`cover-view`里。"
			},
			"attributes": [
				{
					"name": "src",
					"description": {
						"kind": "markdown",
						"value": "**v1.4.0**\n\n图标路径，支持临时路径、网络地址（1.6.0起支持）、云文件ID（2.2.3起支持）。"
					}
				},
				{
					"name": "referrer-policy",
				"valueSet": "referrer-policy",
					"description": {
						"kind": "markdown",
						"value": "**v1.1.0**\n\n格式固定为 https://servicewechat.com/{appid}/{version}/page-frame.html，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本"
					},
				}
			],
			"events": [
				{
					"name": "load",
					"description": "图片加载成功时触发"
				},
				{
					"name": "error",
					"description": "图片加载失败时触发"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html"
				}
			]
		},
		{
			"name": "cover-view",
			"description": {
				"kind": "markdown",
				"value": "覆盖在原生组件之上的文本视图。"
			},
			"attributes": [
				{
					"name": "scroll-top",
					"description": {
						"kind": "markdown",
						"value": "**v2.1.0**\n\n设置顶部滚动偏移量，仅在设置了 overflow-y: scroll 成为滚动元素后生效"
					}
				}
			],
			"events": [],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html"
				}
			]
		},
		{
			"name": "match-media",
			"description": {
				"kind": "markdown",
				"value": "media query 匹配检测节点。可以指定一组 media query 规则，满足时，这个节点才会被展示。\n\n通过这个节点可以实现“页面宽高在某个范围时才展示某个区域”这样的效果"
			},
			"attributes": [
				{
					"name": "min-width",
					"description": {
						"kind": "markdown",
						"value": "**v2.11.1**\n\n页面最小宽度（ px 为单位）"
					}
				},
				{
					"name": "max-width",
					"description": {
						"kind": "markdown",
						"value": "**v2.11.1**\n\n页面最大宽度（ px 为单位）"
					}
				},
				{
					"name": "width",
					"description": {
						"kind": "markdown",
						"value": "**v2.11.1**\n\n页面宽度（ px 为单位）"
					}
				},
				{
					"name": "min-height",
					"description": {
						"kind": "markdown",
						"value": "**v2.11.1**\n\n页面最小高度（ px 为单位）"
					}
				},
				{
					"name": "max-height",
					"description": {
						"kind": "markdown",
						"value": "**v2.11.1**\n\n页面最大高度（ px 为单位）"
					}
				},
				{
					"name": "height",
					"description": {
						"kind": "markdown",
						"value": "**v2.11.1**\n\n页面高度（ px 为单位）"
					}
				},
				{
					"name": "orientation",
					"description": {
						"kind": "markdown",
						"value": "**v2.11.1**\n\n屏幕方向（ landscape 或 portrait ）"
					},
					"values": [
						{
							"name": "landscape",
							"description": "横向"
						},
						{
							"name": "portrait",
							"description": "纵向"
						}
					]
				}
			],
			"events": [],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html"
				}
			]
		},
		{
			"name": "moveable-area",
			"description": {
				"kind": "markdown",
				"value": "movable-view的可移动区域。"
			},
			"attributes": [
				{
					"name": "scale-area",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.90**\n\n当里面的movable-view设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个movable-area"
					}
				}
			],
			"events": [],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/moveable-area.html"
				}
			]
		},
		{
			"name": "moveable-view",
			"description": {
				"kind": "markdown",
				"value": "可移动的视图容器，在页面中可以拖拽滑动。movable-view必须在 movable-area 组件中，并且必须是直接子节点，否则不能移动。"
			},
			"attributes": [
				{
					"name": "direction",
					"description": {
						"kind": "markdown",
						"value": "**v1.2.0**\n\nmovable-view的移动方向，属性值有all、vertical、horizontal、none"
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
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.2.0**\n\nmovable-view是否带有惯性"
					}
				},
				{
					"name": "out-of-bounds",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.2.0**\n\n超过可移动区域后，movable-view是否还可以移动"
					}
				},
				{
					"name": "x",
					"description": {
						"kind": "markdown",
						"value": "**v1.2.0**\n\n定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画；单位支持px（默认）、rpx；"
					}
				},
				{
					"name": "y",
					"description": {
						"kind": "markdown",
						"value": "**v1.2.0**\n\n定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画；单位支持px（默认）、rpx；"
					}
				},
				{
					"name": "damping",
					"description": {
						"kind": "markdown",
						"value": "**v1.2.0**\n\n阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快"
					}
				},
				{
					"name": "friction",
					"description": {
						"kind": "markdown",
						"value": "**v1.2.0**\n\n摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.90**\n\n是否禁用"
					}
				},
				{
					"name": "scale",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.90**\n\n是否支持双指缩放，默认缩放手势生效区域是在movable-view内"
					}
				},
				{
					"name": "scale-min",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.90**\n\n定义缩放倍数最小值"
					}
				},
				{
					"name": "scale-max",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.90**\n\n定义缩放倍数最大值"
					}
				},
				{
					"name": "scale-value",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.90**\n\n定义缩放倍数，取值范围为 0.5 - 10"
					}
				},
				{
					"name": "animation",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.1.0**\n\n是否使用动画"
					}
				}
			],
			"events": [
				{
					"name": "change",
					"description": "拖动过程中触发的事件，event.detail = {x, y, source}"
				},
				{
					"name": "scale",
					"description": "缩放过程中触发的事件，event.detail = {x, y, scale}，x和y字段在2.1.0之后支持"
				},
				{
					"name": "htouchmove",
					"description": "初次手指触摸后移动为横向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch"
				},
				{
					"name": "vtouchmove",
					"description": "初次手指触摸后移动为纵向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/moveable-view.html"
				}
			]
		},
		{
			"name": "page-container",
			"description": {
				"kind": "markdown",
				"value": "页面容器。\n\n小程序如果在页面内进行复杂的界面设计（如在页面内弹出半屏的弹窗、在页面内加载一个全屏的子页面等），用户进行返回操作会直接离开当前页面，不符合用户预期，预期应为关闭当前弹出的组件。 为此提供“假页”容器组件，效果类似于 popup 弹出层，页面内存在该容器时，当用户进行返回操作，关闭该容器不关闭页面。返回操作包括三种情形，右滑手势、安卓物理返回键和调用 navigateBack 接口。"
			},
			"attributes": [
				{
					"name": "show",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.16.0**\n\n是否显示容器组件"
					}
				},
				{
					"name": "duration",
					"description": {
						"kind": "markdown",
						"value": "**v2.16.0**\n\n动画时长，单位毫秒"
					}
				},
				{
					"name": "z-index",
					"description": {
						"kind": "markdown",
						"value": "**v2.16.0**\n\nz-index 层级"
					}
				},
				{
					"name": "position",
					"description": {
						"kind": "markdown",
						"value": "**v2.16.0**\n\n弹出位置，可选值为 top bottom right center"
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
					"name": "round",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.16.0**\n\n是否显示圆角"
					}
				},
				{
					"name": "close-on-slideDown",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.16.0**\n\n是否在下滑一段距离后关闭"
					}
				},
				{
					"name": "overlay-style",
					"description": {
						"kind": "markdown",
						"value": "**v2.16.0**\n\n自定义遮罩层样式"
					}
				},
				{
					"name": "custom-style",
					"description": {
						"kind": "markdown",
						"value": "**v2.16.0**\n\n自定义弹出层样式"
					}
				}
			],
			"events": [
				{
					"name": "beforeenter",
					"description": "进入前触发"
				},
				{
					"name": "enter",
					"description": "进入中触发"
				},
				{
					"name": "afterenter",
					"description": "进入后触发"
				},
				{
					"name": "beforeleave",
					"description": "离开前触发"
				},
				{
					"name": "leave",
					"description": "离开中触发"
				},
				{
					"name": "afterleave",
					"description": "离开后触发"
				},
				{
					"name": "clickoverlay",
					"description": "点击遮罩层时触发"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html"
				}
			]
		},
		{
			"name": "scroll-view",
			"description": {
				"kind": "markdown",
				"value": "可滚动视图区域。使用竖向滚动时，需要给scroll-view一个固定高度，通过 WXSS 设置 height。组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。"
			},
			"attributes": [
				{
					"name": "scroll-x",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n允许横向滚动"
					}
				},
				{
					"name": "scroll-y",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n允许纵向滚动"
					}
				},
				{
					"name": "upper-threshold",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n距顶部/左边多远时，触发 scrolltoupper 事件"
					}
				},
				{
					"name": "lower-threshold",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n距底部/右边多远时，触发 scrolltolower 事件"
					}
				},
				{
					"name": "scroll-top",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n设置竖向滚动条位置"
					}
				},
				{
					"name": "scroll-left",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n设置横向滚动条位置"
					}
				},
				{
					"name": "scroll-into-view",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素"
					}
				},
				{
					"name": "scroll-with-animation",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n在设置滚动条位置时使用动画过渡"
					}
				},
				{
					"name": "enable-back-to-top",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\niOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向"
					}
				},
				{
					"name": "enable-flex",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.7.3**\n\n启用 flexbox 布局。开启后，当前节点声明了 display: flex 就会成为 flex container，并作用于其孩子节点。"
					}
				},
				{
					"name": "scroll-anchoring",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.8.2**\n\n开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效，安卓下可参考 CSS overflow-anchor 属性。"
					}
				},
				{
					"name": "refresher-enabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.10.1**\n\n开启自定义下拉刷新"
					}
				},
				{
					"name": "refresher-threshold",
					"description": {
						"kind": "markdown",
						"value": "**v2.10.1**\n\n设置自定义下拉刷新阈值"
					}
				},
				{
					"name": "refresher-default-style",
					"description": {
						"kind": "markdown",
						"value": "**v2.10.1**\n\n设置自定义下拉刷新默认样式，支持设置 black | white | none， none 表示不使用默认样式"
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
					],
				},
				{
					"name": "refresher-background",
					"description": {
						"kind": "markdown",
						"value": "**v2.10.1**\n\n设置自定义下拉刷新区域背景颜色"
					}
				},
				{
					"name": "refresher-triggered",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.10.1**\n\n设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发"
					}
				},
				{
					"name": "enhanced",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.12.0**\n\n启用 scroll-view 增强特性，启用后可通过 ScrollViewContext 操作 scroll-view"
					}
				},
				{
					"name": "bounces",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.12.0**\n\niOS 下 scroll-view 边界弹性控制 (同时开启 enhanced 属性后生效)"
					}
				},
				{
					"name": "show-scrollbar",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.12.0**\n\n滚动条显隐控制 (同时开启 enhanced 属性后生效)"
					}
				},
				{
					"name": "paging-enabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.12.0**\n\n分页滑动效果 (同时开启 enhanced 属性后生效)"
					}
				},
				{
					"name": "fast-deceleration",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.12.0**\n\n滑动减速速率控制 (同时开启 enhanced 属性后生效)"
					}
				}
			],
			"events":[
				{
					"name": "dragstart",
					"description": "滑动开始事件 (同时开启 enhanced 属性后生效) detail { scrollTop, scrollLeft }"
				},
				{
					"name": "dragging",
					"description": "滑动事件 (同时开启 enhanced 属性后生效) detail { scrollTop, scrollLeft }"
				},
				{
					"name": "dragend",
					"description": "滑动结束事件 (同时开启 enhanced 属性后生效) detail { scrollTop, scrollLeft, velocity }"
				},
				{
					"name": "scrolltoupper",
					"description": "滚动到顶部/左边时触发"
				},
				{
					"name": "scrolltolower",
					"description": "滚动到底部/右边时触发"
				},
				{
					"name": "scroll",
					"description": "滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}"
				},
				{
					"name": "refresherpulling",
					"description": "自定义下拉刷新控件被下拉"
				},
				{
					"name": "refresherrefresh",
					"description": "自定义下拉刷新被触发"
				},
				{
					"name": "refresherrestore",
					"description": "自定义下拉刷新被复位"
				},
				{
					"name": "refresherabort",
					"description": "自定义下拉刷新被中止"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
				}
			]
		},
		{
			"name": "share-element",
			"description": "共享元素。",
			"attributes": [
				{
					"name": "key",
					"description": {
						"kind": "markdown",
						"value": "**v2.16.0**\n\n映射标记"
					}
				},
				{
					"name": "transform",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.16.0**\n\n是否进行动画"
					}
				},
				{
					"name": "duration",
					"description": {
						"kind": "markdown",
						"value": "**v2.16.0**\n\n动画时长，单位毫秒"
					}
				},
				{
					"name": "easing-function",
					"description": {
						"kind": "markdown",
						"value": "**v2.16.0**\n\ncss缓动函数"
					}
				}
			],
			"events": [],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/share-element.html"
				}
			]
		},
		{
			"name": "swiper",
			"description": "滑块视图容器。其中只可放置swiper-item组件，否则会导致未定义的行为。",
			"attributes": [
				{
					"name": "indicator-dots",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n是否显示面板指示点"
					}
				},
				{
					"name": "indicator-color",
					"description": {
						"kind": "markdown",
						"value": "**v1.1.0**\n\n指示点颜色"
					}
				},
				{
					"name": "indicator-active-color",
					"description": {
						"kind": "markdown",
						"value": "**v1.1.0**\n\n当前选中的指示点颜色"
					}
				},
				{
					"name": "autoplay",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n是否自动切换"
					}
				},
				{
					"name": "current",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n当前所在滑块的 index"
					}
				},
				{
					"name": "interval",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n自动切换时间间隔"
					}
				},
				{
					"name": "duration",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n滑动动画时长"
					}
				},
				{
					"name": "circular",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n是否采用衔接滑动"
					}
				},
				{
					"name": "vertical",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n滑动方向是否为纵向"
					}
				},
				{
					"name": "previous-margin",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.0**\n\n前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值"
					}
				},
				{
					"name": "next-margin",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.0**\n\n后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值"
					}
				},
				{
					"name": "snap-to-edge",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.12.1**\n\n当 swiper-item 的个数大于等于 2，关闭 circular 并且开启 previous-margin 或 next-margin 的时候，可以指定这个边距是否应用到第一个、最后一个元素"
					}
				},
				{
					"name": "display-multiple-items",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.0**\n\n同时显示的滑块数量"
					}
				},
				{
					"name": "easing-function",
					"description": {
						"kind": "markdown",
						"value": "**v2.6.5**\n\n指定 swiper 切换缓动动画类型"
					}
				}
			],
			"events": [
				{
					"name": "change",
					"description": "current 改变时会触发 change 事件，event.detail = {current, source}"
				},
				{
					"name": "transition",
					"description": "swiper-item 的位置发生改变时会触发 transition 事件，event.detail = {dx: dx, dy: dy}"
				},
				{
					"name": "animationfinish",
					"description": "动画结束时会触发 animationfinish 事件，event.detail 同上"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
				}
			]
		},
		{
			"name": "swiper-item",
			"description": "仅可放置在swiper组件中，宽高自动设置为100%。",
			"attributes": [
				{
					"name": "item-id",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.0**\n\n该 swiper-item 的标识符"
					}
				},
				{
					"name": "skip-hidden-item-layout",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.0**\n\n是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息"
					}
				}
			],
			"events": [],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html"
				}
			]
		},
		{
			"name": "view",
			"description": {
				"kind": "markdown",
				"value": "视图容器"
			},
			"attributes": [
				{
					"name": "hover-class",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n指定按下去的样式类。当 hover-class=\"none\" 时，没有点击态效果"
					}
				},
				{
					"name": "hover-stop-propagation",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.5.0**\n\n指定是否阻止本节点的祖先节点出现点击态"
					}
				},
				{
					"name": "hover-start-time",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n按住后多久出现点击态，单位毫秒"
					}
				},
				{
					"name": "hover-stay-time",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n手指松开后点击态保留时间，单位毫秒"
					}
				}
			],
			"events": [],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/view.html"
				}
			]
		},
		{
			"name": "icon",
			"description": {
				"kind": "markdown",
				"value": "图标。组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。"
			},
			"attributes": [
				{
					"name": "type",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\nicon的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear"
					}
				},
				{
					"name": "size",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\nicon的大小"
					}
				},
				{
					"name": "color",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\nicon的颜色，同css的color"
					}
				}
			],
			"events": [],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/icon.html"
				}
			]
		},
		{
			"name": "progress",
			"description": {
				"kind": "markdown",
				"value": "进度条。组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。"
			},
			"attributes": [
				{
					"name": "percent",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n百分比0~100"
					}
				},
				{
					"name": "show-info",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n在进度条右侧显示百分比"
					}
				},
				{
					"name": "border-radius",
					"description": {
						"kind": "markdown",
						"value": "**v2.3.1**\n\n圆角大小"
					}
				},
				{
					"name": "font-size",
					"description": {
						"kind": "markdown",
						"value": "**v2.3.1**\n\n右侧百分比字体大小"
					}
				},
				{
					"name": "stroke-width",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n进度条线的宽度"
					}
				},
				{
					"name": "color",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n进度条颜色（请使用activeColor）"
					}
				},
				{
					"name": "activeColor",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n已选择的进度条的颜色"
					}
				},
				{
					"name": "backgroundColor",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n未选择的进度条的颜色"
					}
				},
				{
					"name": "active",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n进度条从左往右的动画"
					}
				},
				{
					"name": "active-mode",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\nbackwards: 动画从头播；forwards：动画从上次结束点接着播"
					}
				},
				{
					"name": "duration",
					"description": {
						"kind": "markdown",
						"value": "**v2.8.2**\n\n进度增加1%所需毫秒数"
					}
				}
			],
			"events": [
				{
					"name": "activeend",
					"description": "动画完成事件"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/progress.html"
				}
			]
		},
		{
			"name": "rich-text",
			"description": "富文本。",
			"attributes": [
				{
					"name": "nodes",
					"description": {
						"kind": "markdown",
						"value": "**v1.4.0**\n\n节点列表/HTML String"
					}
				},
				{
					"name": "space",
					"valueSet": "space",
					"description": {
						"kind": "markdown",
						"value": "**v2.4.1**\n\n显示连续空格"
					},
				}
			]
			,
			"events": [],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html"
				}
			]
		},
		{
			"name": "text",
			"description": "文本。",
			"attributes": [
				{
					"name": "selectable",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.1.0**\n\n文本是否可选 (已废弃)"
					}
				},
				{
					"name": "user-select",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.12.1**\n\n文本是否可选，该属性会使文本节点显示为 inline-block"
					}
				},
				{
					"name": "space",
					"valueSet": "space",
					"description": {
						"kind": "markdown",
						"value": "**v1.4.0**\n\n显示连续空格"
					}
				},
				{
					"name": "decode",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.4.0**\n\n是否解码"
					}
				}
			],
			"events": [],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/text.html"
				}
			]
		},
		{
			"name": "button",
			"description": "按钮。",
			"attributes": [
				{
					"name": "size",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n按钮的大小"
					},
					"values": [
						{ "name": "default", "description": "默认大小" },
						{ "name": "mini", "description": "小尺寸" },
					]
				},
				{
					"name": "type",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n按钮的样式类型"
					},
					"values": [
						{ "name": "primary", "description": "绿色" },
						{ "name": "default", "description": "白色" },
						{ "name": "warn", "description": "红色" },
					]
				},
				{
					"name": "plain",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n按钮是否镂空，背景色透明"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n是否禁用"
					}
				},
				{
					"name": "loading",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n名称前是否带 loading 图标"
					}
				},
				{
					"name": "form-type",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件"
					},
					"values": [
						{ "name": "submit", "description": "提交表单" },
						{ "name": "reset", "description": "重置表单" },
					]
				},
				{
					"name": "open-type",
					"valueSet": "open-type",
					"description": {
						"kind": "markdown",
						"value": "**v1.1.0**\n\n微信开放能力"
					}
				},
				{
					"name": "hover-class",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n指定按钮按下去的样式类。当 hover-class=\"none\" 时，没有点击态效果"
					}
				},
				{
					"name": "hover-stop-propagation",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.5.0**\n\n指定是否阻止本节点的祖先节点出现点击态"
					}
				},
				{
					"name": "hover-start-time",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n按住后多久出现点击态，单位毫秒"
					}
				},
				{
					"name": "hover-stay-time",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n手指松开后点击态保留时间，单位毫秒"
					}
				},
				{
					"name": "lang",
					"valueSet": "lang",
					"description": {
						"kind": "markdown",
						"value": "**v1.3.0**\n\n指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。"
					}
				},
				{
					"name": "session-from",
					"description": {
						"kind": "markdown",
						"value": "**v1.4.0**\n\n会话来源，open-type=\"contact\"时有效"
					}
				},
				{
					"name": "send-message-title",
					"description": {
						"kind": "markdown",
						"value": "**v1.5.0**\n\n会话内消息卡片标题，open-type=\"contact\"时有效"
					}
				},
				{
					"name": "send-message-path",
					"description": {
						"kind": "markdown",
						"value": "**v1.5.0**\n\n会话内消息卡片点击跳转小程序路径，open-type=\"contact\"时有效"
					}
				},
				{
					"name": "send-message-img",
					"description": {
						"kind": "markdown",
						"value": "**v1.5.0**\n\n会话内消息卡片图片，open-type=\"contact\"时有效"
					}
				},
				{
					"name": "app-parameter",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.5**\n\n打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效"
					}
				},
				{
					"name": "show-message-card",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.5.0**\n\n是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示\"可能要发送的小程序\"提示，用户点击后可以快速发送小程序消息，open-type=\"contact\"时有效"
					}
				}
			],
			"events": [
				{
					"name": "getuserinfo",
					"description": "用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致，open-type=\"getUserInfo\"时有效"
				},
				{
					"name": "contact",
					"description": "客服消息回调，open-type=\"contact\"时有效"
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
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
				}
			]
		},
		{
			"name": "checkbox",
			"description": "多选项目。",
			"attributes": [
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\ncheckbox标识，选中时触发checkbox-group的 change 事件，并携带 checkbox 的 value"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n是否禁用"
					}
				},
				{
					"name": "checked",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n当前是否选中，可用来设置默认选中"
					}
				},
				{
					"name": "color",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\ncheckbox的颜色，同css的color"
					}
				}
			],
			"events": [],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html"
				}
			]
		},
		{
			"name": "checkbox-group",
			"description": "多项选择器，内部由多个checkbox组成。",
			"attributes": [],
			"events": [
				{
					"name": "change",
					"description": "checkbox-group中选中项发生改变时触发 change 事件，detail = {value:[选中的checkbox的value的数组]}"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/checkbox-group.html"
				}
			]
		},
		{
			"name": "editor",
			"description": "富文本编辑器，可以对图片、文字进行编辑。",
			"attributes": [
				{
					"name": "read-only",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.7.0**\n\n设置编辑器为只读"
					}
				},
				{
					"name": "placeholder",
					"description": {
						"kind": "markdown",
						"value": "**v2.7.0**\n\n提示信息"
					}
				},
				{
					"name": "show-img-size",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.7.0**\n\n点击图片时显示图片大小控件"
					}
				},
				{
					"name": "show-img-toolbar",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.7.0**\n\n点击图片时显示工具栏控件"
					}
				},
				{
					"name": "show-img-resize",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.7.0**\n\n点击图片时显示修改尺寸控件"
					}
				}
			],
			"events": [
				{
					"name": "ready",
					"description": "编辑器初始化完成时触发"
				},
				{
					"name": "focus",
					"description": "编辑器聚焦时触发，event.detail = {html, text, delta}"
				},
				{
					"name": "blur",
					"description": "编辑器失去焦点时触发，detail = {html, text, delta}"
				},
				{
					"name": "input",
					"description": "编辑器内容改变时触发，detail = {html, text, delta}"
				},
				{
					"name": "statuschange",
					"description": "通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/editor.html"
				}
			]
		},
		{
			"name": "form",
			"description": "表单。",
			"attributes": [
				{
					"name": "report-submit",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n是否返回 formId 用于发送模板消息"
					}
				},
				{
					"name": "report-submit-timeout",
					"description": {
						"kind": "markdown",
						"value": "**v2.6.2**\n\n等待一段时间（毫秒数）以确认 formId 是否生效。如果未指定这个参数，formId 有很小的概率是无效的（如遇到网络失败的情况）。指定这个参数将可以检测 formId 是否有效，以这个参数的时间作为这项检测的超时时间。如果失败，将返回 requestFormId:fail 开头的 formId"
					}
				}
			],
			"events": [
				{
					"name": "submit",
					"description": "携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'} , formId: ''}"
				},
				{
					"name": "reset",
					"description": "表单重置时会触发 reset 事件"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/form.html"
				}
			]
		},
		{
			"name": "input",
			"description": "输入框。该组件是原生组件，使用时请注意相关限制",
			"attributes": [
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n输入框的初始内容"
					}
				},
				{
					"name": "type",
					"valueSet": "input-type",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\ninput 的类型"
					}
				},
				{
					"name": "password",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n是否是密码类型"
					}
				},
				{
					"name": "placeholder",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n输入框为空时占位符"
					}
				},
				{
					"name": "placeholder-style",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n指定 placeholder 的样式"
					}
				},
				{
					"name": "placeholder-class",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n指定 placeholder 的样式类"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n是否禁用"
					}
				},
				{
					"name": "maxlength",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n最大输入长度，设置为 -1 的时候不限制最大长度"
					}
				},
				{
					"name": "cursor-spacing",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离"
					}
				},
				{
					"name": "auto-focus",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n(即将废弃，请直接使用 focus )自动聚焦，拉起键盘"
					}
				},
				{
					"name": "focus",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n获取焦点"
					}
				},
				{
					"name": "confirm-type",
					"description": {
						"kind": "markdown",
						"value": "**v1.1.0**\n\n设置键盘右下角按钮的文字，仅在type='text'时生效"
					}
				},
				{
					"name": "always-embed",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.10.4**\n\n强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)"
					}
				},
				{
					"name": "confirm-hold",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.1.0**\n\n点击键盘右下角按钮时是否保持键盘不收起"
					}
				},
				{
					"name": "cursor",
					"description": {
						"kind": "markdown",
						"value": "**v1.5.0**\n\n指定focus时的光标位置"
					}
				},
				{
					"name": "selection-start",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.0**\n\n光标起始位置，自动聚集时有效，需与selection-end搭配使用"
					}
				},
				{
					"name": "selection-end",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.0**\n\n光标结束位置，自动聚集时有效，需与selection-start搭配使用"
					}
				},
				{
					"name": "adjust-position",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.90**\n\n键盘弹起时，是否自动上推页面"
					}
				},
				{
					"name": "hold-keyboard",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.8.2**\n\nfocus时，点击页面的时候不收起键盘"
					}
				},
				{
					"name": "safe-password-cert-path",
					"description": {
						"kind": "markdown",
						"value": "**v2.18.0**\n\n安全键盘加密公钥的路径，只支持包内路径"
					}
				},
				{
					"name": "safe-password-length",
					"description": {
						"kind": "markdown",
						"value": "**v2.18.0**\n\n安全键盘输入密码长度"
					}
				},
				{
					"name": "safe-password-time-stamp",
					"description": {
						"kind": "markdown",
						"value": "**v2.18.0**\n\n安全键盘加密时间戳"
					}
				},
				{
					"name": "safe-password-nonce",
					"description": {
						"kind": "markdown",
						"value": "**v2.18.0**\n\n安全键盘加密盐值"
					}
				},
				{
					"name": "safe-password-salt",
					"description": {
						"kind": "markdown",
						"value": "**v2.18.0**\n\n安全键盘计算hash盐值，若指定custom-hash 则无效"
					}
				},
				{
					"name": "safe-password-custom-hash",
					"description": {
						"kind": "markdown",
						"value": "**v2.18.0**\n\n安全键盘计算hash的算法表达式，如 md5(sha1('foo' + sha256(sm3(password + 'bar'))))"
					}
				}
			],
			"events": [
				{
					"name": "input",
					"description": "键盘输入时触发，event.detail = {value, cursor, keyCode}，keyCode 为键值，2.1.0 起支持，处理函数可以直接 return 一个字符串，将替换输入框的内容。"
				},
				{
					"name": "focus",
					"description": "输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度，在基础库 1.9.90 起支持"
				},
				{
					"name": "blur",
					"description": "输入框失去焦点时触发，event.detail = { value, encryptedValue, encryptError }"
				},
				{
					"name": "confirm",
					"description": "点击完成按钮时触发，event.detail = { value }"
				},
				{
					"name": "keyboardheightchange",
					"description": "键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration}"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
				}
			]
		},
		{
			"name": "keyboard-accessory",
			"description": "设置 input / textarea 聚焦时键盘上方 cover-view / cover-image 工具栏视图",
			"attributes": [],
			"events": [],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/keyboard-accessory.html"
				}
			]
		},
		{
			"name": "label",
			"description": {
				"kind": "markdown",
				"value": "用来改进表单组件的可用性。\n\n使用for属性找到对应的id，或者将控件放在该标签下，当点击时，就会触发对应的控件。 for优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。 目前可以绑定的控件有：button, checkbox, radio, switch。"
			},
			"attributes": [
				{
					"name": "for",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n绑定控件的 id"
					}
				}
			],
			"events": [],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/label.html"
				}
			]
		},
		{
			"name": "picker",
			"description": "从底部弹起的滚动选择器。",
			"attributes": [
				{
					"name": "header-text",
					"description": {
						"kind": "markdown",
						"value": "**v2.11.0**\n\n选择器的标题，仅安卓可用"
					}
				},
				{
					"name": "mode",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n选择器类型"
					},
					"values": [
						{
							"name": "selector",
							"description": "普通选择器"
						},
						{
							"name": "multiSelector",
							"description": "多列选择器"
						},
						{
							"name": "time",
							"description": "时间选择器"
						},
						{
							"name": "date",
							"description": "日期选择器"
						},
						{
							"name": "region",
							"description": "省市区选择器"
						}
					]
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n是否禁用"
					}
				}
			],
			"events": [
				{
					"name": "change",
					"description": "value 改变时触发 change 事件，event.detail = {value}"
				},
				{
					"name": "cancel",
					"description": "取消选择时触发"
				},
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker.html"
				}
			]
		},
		{
			"name": "picker-view",
			"description": "嵌入页面的滚动选择器。其中只可放置 picker-view-column组件，其它节点不会显示。",
			"attributes": [
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。"
					}
				},
				{
					"name": "indicator-style",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n设置选择器中间选中框的样式"
					}
				},
				{
					"name": "indicator-class",
					"description": {
						"kind": "markdown",
						"value": "**v1.1.0**\n\n设置选择器中间选中框的类名"
					}
				},
				{
					"name": "mask-style",
					"description": {
						"kind": "markdown",
						"value": "**v1.5.0**\n\n设置蒙层的样式"
					}
				},
				{
					"name": "mask-class",
					"description": {
						"kind": "markdown",
						"value": "**v1.5.0**\n\n设置蒙层的类名"
					}
				}
			],
			"events": [
				{
					"name": "change",
					"description": "滚动选择时触发change事件，event.detail = {value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）"
				},
				{
					"name": "pickstart",
					"description": "当滚动选择开始时候触发事件"
				},
				{
					"name": "pickend",
					"description": "当滚动选择结束时候触发事件"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html"
				}
			]
		},
		{
			"name": "picker-view-column",
			"description": {
				"kind": "markdown",
				"value": "滚动选择器子项。仅可放置于picker-view中，其孩子节点的高度会自动设置成与picker-view的选中框的高度一致"
			},
			"attributes": [],
			"events": [],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker-view-column.html"
				}
			]
		},
		{
			"name": "radio",
			"description": "单选项目。",
			"attributes": [
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\nradio 标识。当该radio 选中时，radio-group 的 change 事件会携带radio的value"
					}
				},
				{
					"name": "checked",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n当前是否选中"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n是否禁用"
					}
				},
				{
					"name": "color",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\nradio的颜色，同css的color"
					}
				}
			],
			"events": [],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/radio.html"
				}
			]
		},
		{
			"name": "radio-group",
			"description": "单项选择器，内部由多个 radio 组成。",
			"attributes": [],
			"events": [
				{
					"name": "change",
					"description": "radio-group中选中项发生改变时触发 change 事件，detail = {value:[选中的radio的value的数组]}"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/radio-group.html"
				}
			]
		},
		{
			"name": "slider",
			"description": "滑动选择器。",
			"attributes": [
				{
					"name": "min",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n最小值"
					}
				},
				{
					"name": "max",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n最大值"
					}
				},
				{
					"name": "step",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n步长，取值必须大于 0，并且可被(max - min)整除"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n是否禁用"
					}
				},
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n当前取值"
					}
				},
				{
					"name": "color",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n背景条的颜色（请使用 backgroundColor）"
					}
				},
				{
					"name": "selected-color",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n已选择的颜色（请使用 activeColor）"
					}
				},
				{
					"name": "activeColor",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n已选择的颜色"
					}
				},
				{
					"name": "backgroundColor",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n背景条的颜色"
					}
				},
				{
					"name": "block-size",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.0**\n\n滑块的大小，取值范围为 12 - 28"
					}
				},
				{
					"name": "block-color",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.0**\n\n滑块的颜色"
					}
				},
				{
					"name": "show-value",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n是否显示当前 value"
					}
				}
			],
			"events": [
				{
					"name": "change",
					"description": "完成一次拖动后触发的事件，event.detail = {value}"
				},
				{
					"name": "changing",
					"description": "拖动过程中触发的事件，event.detail = {value}"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/slider.html"
				}
			]
		},
		{
			"name": "switch",
			"description": "开关选择器。",
			"attributes": [
				{
					"name": "checked",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n是否选中"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n是否禁用"
					}
				},
				{
					"name": "type",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n样式，有效值：switch, checkbox"
					}
				},
				{
					"name": "color",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\nswitch 的颜色，同 css 的 color"
					}
				}
			],
			"events": [
				{
					"name": "change",
					"description": "checked 改变时触发 change 事件，event.detail={ value}"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/switch.html"
				}
			]
		},
		{
			"name": "textarea",
			"description": "多行输入框。该组件是原生组件，使用时请注意相关限制",
			"attributes": [
				{
					"name": "value",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n输入框的内容"
					}
				},
				{
					"name": "placeholder",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n输入框为空时占位符"
					}
				},
				{
					"name": "placeholder-style",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n指定 placeholder 的样式，目前仅支持color,font-size和font-weight"
					}
				},
				{
					"name": "placeholder-class",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n指定 placeholder 的样式类"
					}
				},
				{
					"name": "disabled",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n是否禁用"
					}
				},
				{
					"name": "maxlength",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n最大输入长度，设置为 -1 的时候不限制最大长度"
					}
				},
				{
					"name": "auto-focus",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n自动聚焦，拉起键盘。"
					}
				},
				{
					"name": "focus",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n获取焦点"
					}
				},
				{
					"name": "auto-height",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n是否自动增高，设置auto-height时，style.height不生效"
					}
				},
				{
					"name": "fixed",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true"
					}
				},
				{
					"name": "cursor-spacing",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n指定光标与键盘的距离。取textarea距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离"
					}
				},
				{
					"name": "cursor",
					"description": {
						"kind": "markdown",
						"value": "**v1.5.0**\n\n指定focus时的光标位置"
					}
				},
				{
					"name": "show-confirm-bar",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.6.0**\n\n是否显示键盘上方带有”完成“按钮那一栏"
					}
				},
				{
					"name": "selection-start",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.0**\n\n光标起始位置，自动聚集时有效，需与selection-end搭配使用"
					}
				},
				{
					"name": "selection-end",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.0**\n\n光标结束位置，自动聚集时有效，需与selection-start搭配使用"
					}
				},
				{
					"name": "adjust-position",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.90**\n\n键盘弹起时，是否自动上推页面"
					}
				},
				{
					"name": "hold-keyboard",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.8.2**\n\nfocus时，点击页面的时候不收起键盘"
					}
				},
				{
					"name": "disable-default-padding",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.10.0**\n\n是否去掉 iOS 下的默认内边距"
					}
				},
				{
					"name": "confirm-type",
					"description": {
						"kind": "markdown",
						"value": "**v2.13.0**\n\n设置键盘右下角按钮的文字"
					},
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
						},
						{
							"name": "return",
							"description": "右下角按钮为“换行”"
						}
					]
				},
				{
					"name": "confirm-hold",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.16.0**\n\n点击键盘右下角按钮时是否保持键盘不收起"
					}
				}
			],
			"events": [
				{
					"name": "focus",
					"description": "输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度，在基础库 1.9.90 起支持"
				},
				{
					"name": "blur",
					"description": "输入框失去焦点时触发，event.detail = {value, cursor}"
				},
				{
					"name": "linechange",
					"description": "输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}"
				},
				{
					"name": "input",
					"description": "当键盘输入时，触发 input 事件，event.detail = {value, cursor, keyCode}，keyCode 为键值，目前工具还不支持返回keyCode参数。bindinput 处理函数的返回值并不会反映到 textarea 上"
				},
				{
					"name": "confirm",
					"description": "点击完成时， 触发 confirm 事件，event.detail = {value: value}"
				},
				{
					"name": "keyboardheightchange",
					"description": "键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration}"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
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
						"value": "**v2.0.7**\n\n在哪个目标上发生跳转，默认当前小程序"
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
						"value": "**v1.0.0**\n\n当前小程序内的跳转链接"
					}
				},
				{
					"name": "open-type",
					"valueSet": "navigate-type",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n跳转方式"
					}
				},
				{
					"name": "delta",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n当 open-type 为 'navigateBack' 时有效，表示回退的层数"
					}
				},
				{
					"name": "app-id",
					"description": {
						"kind": "markdown",
						"value": "**v2.0.7**\n\n当target=\"miniProgram\"时有效，要打开的小程序 appId"
					}
				},
				{
					"name": "path",
					"description": {
						"kind": "markdown",
						"value": "**v2.0.7**\n\n当target=\"miniProgram\"时有效，打开的页面路径，如果为空则打开首页"
					}
				},
				{
					"name": "extra-data",
					"description": {
						"kind": "markdown",
						"value": "**v2.0.7**\n\n当target=\"miniProgram\"时有效，需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。详情"
					}
				},
				{
					"name": "version",
					"valueSet": "version",
					"description": {
						"kind": "markdown",
						"value": "**v2.0.7**\n\n当target=\"miniProgram\"时有效，要打开的小程序版本"
					}
				},
				{
					"name": "short-link",
					"description": {
						"kind": "markdown",
						"value": "**v2.18.1**\n\n当target=\"miniProgram\"时有效，当传递该参数后，可以不传 app-id 和 path。链接可以通过【小程序菜单】->【复制链接】获取。"
					}
				},
				{
					"name": "hover-class",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n指定点击时的样式类，当hover-class=\"none\"时，没有点击态效果"
					}
				},
				{
					"name": "hover-stop-propagation",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.5.0**\n\n指定是否阻止本节点的祖先节点出现点击态"
					}
				},
				{
					"name": "hover-start-time",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n按住后多久出现点击态，单位毫秒"
					}
				},
				{
					"name": "hover-stay-time",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n手指松开后点击态保留时间，单位毫秒"
					}
				},
			],
			"events": [
				{
					"name": "bindsuccess",
					"description": {
						"kind": "markdown",
						"value": "**v2.0.7**\n\n当target=\"miniProgram\"时有效，跳转小程序成功"
					}
				},
				{
					"name": "bindfail",
					"description": {
						"kind": "markdown",
						"value": "**v2.0.7**\n\n当target=\"miniProgram\"时有效，跳转小程序失败"
					}
				},
				{
					"name": "bindcomplete",
					"description": {
						"kind": "markdown",
						"value": "**v2.0.7**\n\n当target=\"miniProgram\"时有效，跳转小程序完成"
					}
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
				}
			]
		},
		{
			"name": "functional-page-navigator",
			"description": "仅在插件中有效，用于跳转到插件功能页。",
			"attributes": [
				{
					"name": "version",
					"valueSet": "version",
					"description": {
						"kind": "markdown",
						"value": "**v2.1.0**\n\n跳转到的小程序版本，线上版本必须设置为 release"
					}			
				},
				{
					"name": "name",
					"description": {
						"kind": "markdown",
						"value": "**v2.1.0**\n\n要跳转到的功能页"
					},
					"values": [
						{
							"name": "loginAndGetUserInfo",
							"description": "用户信息功能页"
						},
						{
							"name": "requestPayment",
							"description": "支付功能页"
						},
						{
							"name": "chooseAddress",
							"description": "收货地址功能页"
						},
						{
							"name": "chooseInvoice",
							"description": "获取发票功能页"
						},
						{
							"name": "chooseInvoiceTitle",
							"description": "获取发票抬头功能页"
						}
					]
				},
				{
					"name": "args",
					"description": {
						"kind": "markdown",
						"value": "**v2.1.0**\n\n功能页参数，参数格式与具体功能页相关"
					}
				}
			],
			"events": [
				{
					"name": "success",
					"description": "功能页返回，且操作成功时触发， detail 格式与具体功能页相关"
				},
				{
					"name": "fail",
					"description": "功能页返回，且操作失败时触发， detail 格式与具体功能页相关"
				},
				{
					"name": "cancel",
					"description": "因用户操作从功能页返回时触发"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html"
				}
			]
		},
		{
			"name": "navigation-bar",
			"description": {
				"kind": "markdown",
				"value": "页面导航条配置节点，用于指定导航栏的一些属性。只能是 page-meta 组件内的第一个节点，需要配合它一同使用。\n\n通过这个节点可以获得类似于调用 wx.setNavigationBarTitle wx.setNavigationBarColor 等接口调用的效果。"
			},
			"attributes": [
				{
					"name": "title",
					"description": {
						"kind": "markdown",
						"value": "**v2.9.0**\n\n导航条标题"
					}
				},
				{
					"name": "loading",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.9.0**\n\n是否在导航条显示 loading 加载提示"
					}
				},
				{
					"name": "front-color",
					"description": {
						"kind": "markdown",
						"value": "**v2.9.0**\n\n导航条前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000"
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
						"value": "**v2.9.0**\n\n导航条背景颜色值，有效值为十六进制颜色"
					}
				},
				{
					"name": "color-animation-duration",
					"description": {
						"kind": "markdown",
						"value": "**v2.9.0**\n\n改变导航栏颜色时的动画时长，默认为 0 （即没有动画效果）"
					}
				},
				{
					"name": "color-animation-timing-func",
					"description": {
						"kind": "markdown",
						"value": "**v2.9.0**\n\n改变导航栏颜色时的动画方式，支持 linear 、 easeIn 、 easeOut 和 easeInOut"
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
					"name": "小程序组件官方文档",
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
						"value": "**v1.0.0**\n\naudio 组件的唯一标识符"
					}
				},
				{
					"name": "src",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n要播放音频的资源地址"
					}
				},
				{
					"name": "loop",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n是否循环播放"
					}
				},
				{
					"name": "controls",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n是否显示默认控件"
					}
				},
				{
					"name": "poster",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效"
					}
				},
				{
					"name": "name",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效"
					}
				},
				{
					"name": "author",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效"
					}
				}
			],
			"events": [
				{
					"name": "error",
					"description": "当发生错误时触发 error 事件，detail = {errMsg:MediaError.code}"
				},
				{
					"name": "play",
					"description": "当开始/继续播放时触发play事件"
				},
				{
					"name": "pause",
					"description": "当暂停播放时触发 pause 事件"
				},
				{
					"name": "timeupdate",
					"description": "当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration}"
				},
				{
					"name": "ended",
					"description": "当播放到末尾时触发 ended 事件"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/audio.html"
				}
			]
		},
		{
			"name": "camera",
			"description": {
				"kind": "markdown",
				"value": "系统相机。扫码二维码功能，需升级微信客户端至6.7.3。需要用户授权 scope.camera。 2.10.0起 initdone 事件返回 maxZoom，最大变焦范围"
			},
			"attributes": [
				{
					"name": "mode",
					"description": {
						"kind": "markdown",
						"value": "**v2.1.0**\n\n应用模式，只在初始化时有效，不能动态变更"
					},
					"values": [
						{
							"name": "normal",
							"description": "相机模式"
						},
						{
							"name": "scanCode",
							"description": "扫码模式"
						}
					]
				},
				{
					"name": "resolution",
					"description": {
						"kind": "markdown",
						"value": "**v2.10.0**\n\n分辨率，不支持动态修改"
					},
					"values": [
						{
							"name": "low",
							"description": "低"
						},
						{
							"name": "medium",
							"description": "中"
						},
						{
							"name": "high",
							"description": "高"
						}
					]
				},
				{
					"name": "device-position",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n摄像头朝向"
					},
					"values": [
						{
							"name": "front",
							"description": "前置"
						},
						{
							"name": "back",
							"description": "后置"
						}
					]
				},
				{
					"name": "flash",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n闪光灯，值为auto, on, off"
					},
					"values": [
						{
							"name": "auto",
							"description": "自动"
						},
						{
							"name": "on",
							"description": "打开"
						},
						{
							"name": "off",
							"description": "关闭"
						},
						{
							"name": "torch",
							"description": "常亮"
						}
					]
				},
				{
					"name": "frame-size",
					"description": {
						"kind": "markdown",
						"value": "**v2.7.0**\n\n指定期望的相机帧数据尺寸"
					},
					"values": [
						{
							"name": "small",
							"description": "小尺寸帧数据"
						},
						{
							"name": "medium",
							"description": "中尺寸帧数据"
						},
						{
							"name": "large",
							"description": "大尺寸帧数据"
						}
					]
				}
			],
			"events": [
				{
					"name": "stop",
					"description": "摄像头在非正常终止时触发，如退出后台等情况"
				},
				{
					"name": "error",
					"description": "用户不允许使用摄像头时触发"
				},
				{
					"name": "initdone",
					"description": "相机初始化完成时触发，e.detail = {maxZoom}"
				},
				{
					"name": "scancode",
					"description": "在扫码识别成功时触发，仅在 mode=\"scanCode\" 时生效"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
				}
			]
		},
		{
			"name": "image",
			"description": "图片。支持 JPG、PNG、SVG、WEBP、GIF 等格式，2.3.0 起支持云文件ID。",
			"attributes": [
				{
					"name": "src",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n图片资源地址"
					}
				},
				{
					"name": "mode",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n图片裁剪、缩放的模式"
					},
					"values": [
						{
							"name": "scaleToFill",
							"description": "缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素"
						},
						{
							"name": "aspectFit",
							"description": "缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。"
						},
						{
							"name": "aspectFill",
							"description": "缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。"
						},
						{
							"name": "widthFix",
							"description": "缩放模式，宽度不变，高度自动变化，保持原图宽高比不变"
						},
						{
							"name": "heightFix",
							"description": "缩放模式，高度不变，宽度自动变化，保持原图宽高比不变"
						},
						{
							"name": "top",
							"description": "裁剪模式，不缩放图片，只显示图片的顶部区域"
						},
						{
							"name": "bottom",
							"description": "裁剪模式，不缩放图片，只显示图片的底部区域"
						},
						{
							"name": "center",
							"description": "裁剪模式，不缩放图片，只显示图片的中间区域"
						},
						{
							"name": "left",
							"description": "裁剪模式，不缩放图片，只显示图片的左边区域"
						},
						{
							"name": "right",
							"description": "裁剪模式，不缩放图片，只显示图片的右边区域"
						},
						{
							"name": "top left",
							"description": "裁剪模式，不缩放图片，只显示图片的左上边区域"
						},
						{
							"name": "top right",
							"description": "裁剪模式，不缩放图片，只显示图片的右上边区域"
						},
						{
							"name": "bottom left",
							"description": "裁剪模式，不缩放图片，只显示图片的左下边区域"
						},
						{
							"name": "bottom right",
							"description": "裁剪模式，不缩放图片，只显示图片的右下边区域"
						}
					]
				},
				{
					"name": "webp",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.9.0**\n\n默认不解析 webP 格式，只支持网络资源"
					}
				},
				{
					"name": "lazy-load",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.5.0**\n\n图片懒加载，在即将进入一定范围（上下三屏）时才开始加载"
					}
				},
				{
					"name": "show-menu-by-longpress",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.7.0**\n\n长按图片显示发送给朋友、收藏、保存图片、搜一搜、打开名片/前往群聊/打开小程序（若图片中包含对应二维码或小程序码）的菜单。\n支持识别的码：小程序码\n仅小程序支持识别的码：微信个人码、微信群码、企业微信个人码、 企业微信群码与企业微信互通群码；"
					}
				}
			],
			"events": [
				{
					"name": "error",
					"description": "当错误发生时触发，event.detail = {errMsg}"
				},
				{
					"name": "load",
					"description": "当图片载入完毕时触发，event.detail = {height, width}"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
				}
			]
		},
		{
			"name": "live-player",
			"description": {
				"kind": "markdown",
				"value": "实时音视频播放（v2.9.1 起支持同层渲染）。\n\n暂只针对国内主体如下类目的小程序开放，需要先通过类目审核，再在小程序管理后台，「开发」-「接口设置」中自助开通该组件权限。"
			},
			"attributes": [
				{
					"name": "src",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n音视频地址。目前仅支持 flv, rtmp 格式"
					}
				},
				{
					"name": "mode",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n模式"
					},
					"values": [
						{
							"name": "live",
							"description": "直播"
						},
						{
							"name": "RTC",
							"description": "实时通话，该模式时延更低"
						}
					]
				},
				{
					"name": "autoplay",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n自动播放"
					}
				},
				{
					"name": "muted",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n是否静音"
					}
				},
				{
					"name": "orientation",
					"valueSet": "orientation",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n画面方向"
					},
				},
				{
					"name": "object-fit",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n填充模式，可选值有 contain，fillCrop"
					},
					"values": [
						{
							"name": "contain",
							"description": "图像长边填满屏幕，短边区域会被填充⿊⾊"
						},
						{
							"name": "fillCrop",
							"description": "图像铺满屏幕，超出显示区域的部分将被截掉"
						}
					]
					
				},
				{
					"name": "background-mute",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n进入后台时是否静音（已废弃，默认退后台静音）"
					}
				},
				{
					"name": "min-cache",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n最小缓冲区，单位s（RTC 模式推荐 0.2s）"
					}
				},
				{
					"name": "max-cache",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n最大缓冲区，单位s（RTC 模式推荐 0.8s）。缓冲区用来抵抗网络波动，缓冲数据越多，网络抗性越好，但时延越大。"
					}
				},
				{
					"name": "sound-mode",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.90**\n\n声音输出方式"
					},
					"values": [
						{
							"name": "speaker",
							"description": "扬声器"
						},
						{
							"name": "ear",
							"description": "听筒"
						}
					]
				},
				{
					"name": "auto-pause-if-navigate",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.5.0**\n\n当跳转到本小程序的其他页面时，是否自动暂停本页面的实时音视频播放"
					}
				},
				{
					"name": "auto-pause-if-open-native",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.5.0**\n\n当跳转到其它微信原生页面时，是否自动暂停本页面的实时音视频播放"
					}
				},
				{
					"name": "picture-in-picture-mode",
					"description": {
						"kind": "markdown",
						"value": "**v2.10.3**\n\n设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： [\"push\", \"pop\"]）"
					},
					"values": [
						{
							"name": "[]",
							"description": "取消小窗"
						},
						{
							"name": "push",
							"description": "路由 push 时触发小窗"
						},
						{
							"name": "pop",
							"description": "路由 pop 时触发小窗"
						}
					]
				},
				{
					"name": "referrer-policy",
					"valueSet": "referrer-policy",
					"description": {
						"kind": "markdown",
						"value": "**v2.13.0**\n\n格式固定为 https://servicewechat.com/{appid}/{version}/page-frame.html，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本；"
					}
				}
			],
			"events": [
				{
					"name": "statechange",
					"description": "播放状态变化事件，detail = {code}"
				},
				{
					"name": "fullscreenchange",
					"description": "全屏变化事件，detail = {direction, fullScreen}"
				},
				{
					"name": "netstatus",
					"description": "网络状态通知，detail = {info}"
				},
				{
					"name": "audiovolumenotify",
					"description": "播放音量大小通知，detail = {}"
				},
				{
					"name": "enterpictureinpicture",
					"description": "播放器进入小窗"
				},
				{
					"name": "leavepictureinpicture",
					"description": "播放器退出小窗"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
				}
			]
		},
		{
			"name": "live-pusher",
			"description": {
				"kind": "markdown",
				"value": "实时音视频录制（v2.9.1 起支持同层渲染）。需要用户授权 scope.camera、scope.record。\n\n暂只针对国内主体如下类目的小程序开放，需要先通过类目审核，再在小程序管理后台，「开发」-「接口设置」中自助开通该组件权限。"
			},
			"attributes": [
				{
					"name": "url",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n推流地址。目前仅支持 rtmp 格式"
					}
				},
				{
					"name": "mode",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\nSD（标清）, HD（高清）, FHD（超清）, RTC（实时通话）"
					}
				},
				{
					"name": "autopush",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n自动推流"
					}
				},
				{
					"name": "muted",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n是否静音。即将废弃，可用 enable-mic 替代"
					}
				},
				{
					"name": "enable-camera",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n开启摄像头"
					}
				},
				{
					"name": "auto-focus",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n自动聚集"
					}
				},
				{
					"name": "orientation",
					"valueSet": "orientation",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n画面方向"
					},
				},
				{
					"name": "beauty",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n美颜，取值范围 0-9 ，0 表示关闭"
					}
				},
				{
					"name": "whiteness",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n美白，取值范围 0-9 ，0 表示关闭"
					}
				},
				{
					"name": "aspect",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n宽高比，可选值有 3:4, 9:16"
					}
				},
				{
					"name": "min-bitrate",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n最小码率"
					}
				},
				{
					"name": "max-bitrate",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n最大码率"
					}
				},
				{
					"name": "audio-quality",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n高音质(48KHz)或低音质(16KHz)，值为high, low"
					}
				},
				{
					"name": "waiting-image",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n进入后台时推流的等待画面"
					}
				},
				{
					"name": "waiting-image-hash",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n等待画面资源的MD5值"
					}
				},
				{
					"name": "zoom",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.1.0**\n\n调整焦距"
					}
				},
				{
					"name": "device-position",
					"description": {
						"kind": "markdown",
						"value": "**v2.3.0**\n\n前置或后置，值为front, back"
					}
				},
				{
					"name": "background-mute",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n进入后台时是否静音（已废弃，默认退后台静音）"
					}
				},
				{
					"name": "mirror",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.7.0**\n\n设置推流画面是否镜像，产生的效果在 live-player 反应到"
					}
				},
				{
					"name": "remote-mirror",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.10.0**\n\n同 mirror 属性，后续 mirror 将废弃"
					}
				},
				{
					"name": "local-mirror",
					"description": {
						"kind": "markdown",
						"value": "**v2.10.0**\n\n控制本地预览画面是否镜像"
					},
					"values": [
						{
							"name": "auto",
							"description": "前置摄像头镜像，后置摄像头不镜像"
						},
						{
							"name": "enable",
							"description": "前后置摄像头均镜像"
						},
						{
							"name": "disable",
							"description": "前后置摄像头均不镜像"
						}
					]
				},
				{
					"name": "audio-reverb-type",
					"description": {
						"kind": "markdown",
						"value": "**v2.10.0**\n\n音频混响类型"
					},
					"values": [
						{
							"name": "0",
							"description": "关闭"
						},
						{
							"name": "1",
							"description": "KTV"
						},
						{
							"name": "2",
							"description": "小房间"
						},
						{
							"name": "3",
							"description": "大会堂"
						},
						{
							"name": "4",
							"description": "低沉"
						},
						{
							"name": "5",
							"description": "洪亮"
						},
						{
							"name": "6",
							"description": "金属声"
						},
						{
							"name": "7",
							"description": "磁性"
						}
					]
				},
				{
					"name": "enable-mic",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.10.0**\n\n开启或关闭麦克风"
					}
				},
				{
					"name": "enable-agc",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.10.0**\n\n是否开启音频自动增益"
					}
				},
				{
					"name": "enable-ans",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.10.0**\n\n是否开启音频噪声抑制"
					}
				},
				{
					"name": "audio-volume-type",
					"description": {
						"kind": "markdown",
						"value": "**v2.10.0**\n\n音量类型"
					},
					"values": [
						{
							"name": "auto",
							"description": "自动"
						},
						{
							"name": "media",
							"description": "媒体音量"
						},
						{
							"name": "voicecall",
							"description": "通话音量"
						}
					]
				},
				{
					"name": "video-width",
					"description": {
						"kind": "markdown",
						"value": "**v2.10.0**\n\n上推的视频流的分辨率宽度"
					}
				},
				{
					"name": "video-height",
					"description": {
						"kind": "markdown",
						"value": "**v2.10.0**\n\n上推的视频流的分辨率高度"
					}
				},
				{
					"name": "beauty-style",
					"description": {
						"kind": "markdown",
						"value": "**v2.12.0**\n\n设置美颜类型"
					},
					"values": [
						{
							"name": "smooth",
							"description": "光滑美颜"
						},
						{
							"name": "nature",
							"description": "自然美颜"
						}
					]
				},
				{
					"name": "filter",
					"description": {
						"kind": "markdown",
						"value": "**v2.12.0**\n\n设置色彩滤镜"
					},
					"values": [
						{
							"name": "standard",
							"description": "标准"
						},
						{
							"name": "pink",
							"description": "粉嫩"
						},
						{
							"name": "nostalgia",
							"description": "怀旧"
						},
						{
							"name": "blues",
							"description": "蓝调"
						},
						{
							"name": "romantic",
							"description": "浪漫"
						},
						{
							"name": "cool",
							"description": "清凉"
						},
						{
							"name": "fresher",
							"description": "清新"
						},
						{
							"name": "solor",
							"description": "日系"
						},
						{
							"name": "aestheticism",
							"description": "唯美"
						},
						{
							"name": "whitening",
							"description": "美白"
						},
						{
							"name": "cerisered",
							"description": "樱红"
						}
					]
				}
			],
			"events": [
				{
					"name": "statechange",
					"description": "状态变化事件，detail = {code}"
				},
				{
					"name": "netstatus",
					"description": "网络状态通知，detail = {info}"
				},
				{
					"name": "error",
					"description": "渲染错误事件，detail = {errMsg, errCode}"
				},
				{
					"name": "bgmstart",
					"description": "背景音开始播放时触发"
				},
				{
					"name": "bgmprogress",
					"description": "背景音进度变化时触发，detail = {progress, duration}"
				},
				{
					"name": "bgmcomplete",
					"description": "背景音播放完成时触发"
				},
				{
					"name": "audiovolumenotify",
					"description": "返回麦克风采集的音量大小"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-push.html"
				}
			]
		},
		{
			"name": "video",
			"description": "视频（v2.4.0 起支持同层渲染）。",
			"attributes": [
				{
					"name": "src",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n要播放视频的资源地址，支持网络路径、本地临时路径、云文件ID（2.3.0）"
					}
				},
				{
					"name": "duration",
					"description": {
						"kind": "markdown",
						"value": "**v1.1.0**\n\n指定视频时长"
					}
				},
				{
					"name": "controls",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n是否显示默认播放控件（播放/暂停按钮、播放进度、时间）"
					}
				},
				{
					"name": "danmu-list",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n弹幕列表"
					}
				},
				{
					"name": "danmu-btn",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n是否显示弹幕按钮，只在初始化时有效，不能动态变更"
					}
				},
				{
					"name": "enable-danmu",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n是否展示弹幕，只在初始化时有效，不能动态变更"
					}
				},
				{
					"name": "autoplay",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n是否自动播放"
					}
				},
				{
					"name": "loop",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.4.0**\n\n是否循环播放"
					}
				},
				{
					"name": "muted",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.4.0**\n\n是否静音播放"
					}
				},
				{
					"name": "initial-time",
					"description": {
						"kind": "markdown",
						"value": "**v1.6.0**\n\n指定视频初始播放位置"
					}
				},
				{
					"name": "page-gesture",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.6.0**\n\n在非全屏模式下，是否开启亮度与音量调节手势（废弃，见 vslide-gesture）"
					}
				},
				{
					"name": "direction",
					"description": {
						"kind": "markdown",
						"value": "**v1.7.0**\n\n设置全屏时视频的方向，不指定则根据宽高比自动判断"
					},
					"values": [
						{
							"name": "0",
							"description": "正常竖向"
						},
						{
							"name": "90",
							"description": "屏幕逆时针90度"
						},
						{
							"name": "-90",
							"description": "屏幕顺时针90度"
						}
					]
				},
				{
					"name": "show-progress",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.0**\n\n若不设置，宽度大于240时才会显示"
					}
				},
				{
					"name": "show-fullscreen-btn",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.0**\n\n是否显示全屏按钮"
					}
				},
				{
					"name": "show-play-btn",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.0**\n\n是否显示视频底部控制栏的播放按钮"
					}
				},
				{
					"name": "show-center-play-btn",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.0**\n\n是否显示视频中间的播放按钮"
					}
				},
				{
					"name": "enable-progress-gesture",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.0**\n\n是否开启控制进度的手势"
					}
				},
				{
					"name": "object-fit",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n当视频大小与 video 容器大小不一致时，视频的表现形式"
					},
					"values": [
						{
							"name": "contain",
							"description": "包含"
						},
						{
							"name": "fill",
							"description": "填充"
						},
						{
							"name": "cover",
							"description": "覆盖"
						}
					]
				},
				{
					"name": "poster",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n视频封面的图片网络资源地址或云文件ID（2.3.0）。若 controls 属性值为 false 则设置 poster 无效"
					}
				},
				{
					"name": "show-mute-btn",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.4.0**\n\n是否显示静音按钮"
					}
				},
				{
					"name": "title",
					"description": {
						"kind": "markdown",
						"value": "**v2.4.0**\n\n视频的标题，全屏时在顶部展示"
					}
				},
				{
					"name": "play-btn-position",
					"description": {
						"kind": "markdown",
						"value": "**v2.4.0**\n\n播放按钮的位置"
					},
					"values": [
						{
							"name": "bottom",
							"description": "controls bar上"
						},
						{
							"name": "center",
							"description": "视频中间"
						}
					]					
				},
				{
					"name": "enable-play-gesture",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.4.0**\n\n是否开启播放手势，即双击切换播放/暂停"
					}
				},
				{
					"name": "auto-pause-if-navigate",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.5.0**\n\n当跳转到本小程序的其他页面时，是否自动暂停本页面的视频播放"
					}
				},
				{
					"name": "auto-pause-if-open-native",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.5.0**\n\n当跳转到其它微信原生页面时，是否自动暂停本页面的视频"
					}
				},
				{
					"name": "vslide-gesture",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.6.2**\n\n在非全屏模式下，是否开启亮度与音量调节手势（同 page-gesture）"
					}
				},
				{
					"name": "vslide-gesture-in-fullscreen",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.6.2**\n\n在全屏模式下，是否开启亮度与音量调节手势"
					}
				},
				{
					"name": "ad-unit-id",
					"description": {
						"kind": "markdown",
						"value": "**v2.8.1**\n\n视频前贴广告单元ID，更多详情可参考开放能力视频前贴广告"
					}
				},
				{
					"name": "poster-for-crawler",
					"description": {
						"kind": "markdown",
						"value": "**v**\n\n用于给搜索等场景作为视频封面展示，建议使用无播放 icon 的视频封面图，只支持网络地址"
					}
				},
				{
					"name": "show-casting-button",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.10.2**\n\n显示投屏按钮。安卓在同层渲染下生效，支持 DLNA 协议；iOS 支持 AirPlay 和 DLNA 协议"
					}
				},
				{
					"name": "picture-in-picture-mode",
					"description": {
						"kind": "markdown",
						"value": "**v2.11.0**\n\n设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： [\"push\", \"pop\"]）"
					},
					"values": [
						{
							"name": "[]",
							"description": "取消小窗"
						},
						{
							"name": "push",
							"description": "路由 push 时触发小窗"
						},
						{
							"name": "pop",
							"description": "路由 pop 时触发小窗"
						}
					]
				},
				{
					"name": "picture-in-picture-show-progress",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.11.0**\n\n是否在小窗模式下显示播放进度"
					}
				},
				{
					"name": "enable-auto-rotation",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.11.0**\n\n是否开启手机横屏时自动全屏，当系统设置开启自动旋转时生效"
					}
				},
				{
					"name": "show-screen-lock-button",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.11.0**\n\n是否显示锁屏按钮，仅在全屏时显示，锁屏后控制栏的操作"
					}
				},
				{
					"name": "show-snapshot-button",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.13.0**\n\n是否显示截屏按钮，仅在全屏时显示"
					}
				},
				{
					"name": "show-background-playback-button",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.14.3**\n\n是否展示后台音频播放按钮"
					}
				},
				{
					"name": "background-poster",
					"description": {
						"kind": "markdown",
						"value": "**v2.14.3**\n\n进入后台音频播放后的通知栏图标（Android 独有）"
					}
				},
				{
					"name": "referrer-policy",
					"valueSet": "referrer-policy",
					"description": {
						"kind": "markdown",
						"value": "**v2.13.0**\n\n格式固定为 https://servicewechat.com/{appid}/{version}/page-frame.html，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本；"
					}
				},
				{
					"name": "is-drm",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.19.3**\n\n是否是 DRM 视频源"
					}
				},
				{
					"name": "provision-url",
					"description": {
						"kind": "markdown",
						"value": "**v2.19.3**\n\nDRM 设备身份认证 url，仅 is-drm 为 true 时生效 (Android)"
					}
				},
				{
					"name": "certificate-url",
					"description": {
						"kind": "markdown",
						"value": "**v2.19.3**\n\nDRM 设备身份认证 url，仅 is-drm 为 true 时生效 (iOS)"
					}
				},
				{
					"name": "license-url",
					"description": {
						"kind": "markdown",
						"value": "**v2.19.3**\n\nDRM 获取加密信息 url，仅 is-drm 为 true 时生效"
					}
				}
			],
			"events": [
				{
					"name": "play",
					"description": "当开始/继续播放时触发play事件"
				},
				{
					"name": "pause",
					"description": "当暂停播放时触发 pause 事件"
				},
				{
					"name": "ended",
					"description": "当播放到末尾时触发 ended 事件"
				},
				{
					"name": "timeupdate",
					"description": "播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次"
				},
				{
					"name": "fullscreenchange",
					"description": "视频进入和退出全屏时触发，event.detail = {fullScreen, direction}，direction 有效值为 vertical 或 horizontal"
				},
				{
					"name": "waiting",
					"description": "视频出现缓冲时触发"
				},
				{
					"name": "error",
					"description": "视频播放出错时触发"
				},
				{
					"name": "progress",
					"description": "加载进度变化时触发，只支持一段加载。event.detail = {buffered}，百分比"
				},
				{
					"name": "loadedmetadata",
					"description": "视频元数据加载完成时触发。event.detail = {width, height, duration}"
				},
				{
					"name": "controlstoggle",
					"description": "切换 controls 显示隐藏时触发。event.detail = {show}"
				},
				{
					"name": "enterpictureinpicture",
					"description": "播放器进入小窗"
				},
				{
					"name": "leavepictureinpicture",
					"description": "播放器退出小窗"
				},
				{
					"name": "seekcomplete",
					"description": "seek 完成时触发 (position iOS 单位 s, Android 单位 ms)"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
				}
			]
		},
		{
			"name": "voip-room",
			"description": {
				"kind": "markdown",
				"value": "多人音视频对话。需用户授权 scope.camera、scope.record。\n\n暂只针对国内主体如下类目的小程序开放，需要先通过类目审核，再在小程序管理后台，「开发」-「接口设置」中自助开通该组件权限。"
			},
			"attributes": [
				{
					"name": "openid",
					"description": {
						"kind": "markdown",
						"value": "**v2.11.0**\n\n进入房间用户的 openid"
					}
				},
				{
					"name": "mode",
					"description": {
						"kind": "markdown",
						"value": "**v2.11.0**\n\n对话窗口类型，自身传入 camera，其它用户传入 video"
					}
				},
				{
					"name": "device-position",
					"description": {
						"kind": "markdown",
						"value": "**v2.11.0**\n\n仅在 mode 为 camera 时有效，前置或后置，值为front, back"
					}
				}
			],
			"events": [
				{
					"name": "error",
					"description": "创建对话窗口失败时触发"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html"
				}
			]
		},
		{
			"name": "map",
			"description": {
				"kind": "markdown",
				"value": "地图（v2.7.0 起支持同层渲染）"
			},
			"attributes": [
				{
					"name": "longitude",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n中心经度"
					}
				},
				{
					"name": "latitude",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n中心纬度"
					}
				},
				{
					"name": "scale",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n缩放级别，取值范围为3-20"
					}
				},
				{
					"name": "min-scale",
					"description": {
						"kind": "markdown",
						"value": "**v2.13.0**\n\n最小缩放级别"
					}
				},
				{
					"name": "max-scale",
					"description": {
						"kind": "markdown",
						"value": "**v2.13.0**\n\n最大缩放级别"
					}
				},
				{
					"name": "markers",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n标记点"
					}
				},
				{
					"name": "covers",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n即将移除，请使用 markers"
					}
				},
				{
					"name": "polyline",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n路线"
					}
				},
				{
					"name": "circles",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n圆"
					}
				},
				{
					"name": "controls",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n控件（即将废弃，建议使用 cover-view 代替）"
					}
				},
				{
					"name": "include-points",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n缩放视野以包含所有给定的坐标点"
					}
				},
				{
					"name": "show-location",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n显示带有方向的当前定位点"
					}
				},
				{
					"name": "polygons",
					"description": {
						"kind": "markdown",
						"value": "**v2.3.0**\n\n多边形"
					}
				},
				{
					"name": "subkey",
					"description": {
						"kind": "markdown",
						"value": "**v2.3.0**\n\n个性化地图使用的key"
					}
				},
				{
					"name": "layer-style",
					"description": {
						"kind": "markdown",
						"value": "**v**\n\n个性化地图配置的 style，不支持动态修改"
					}
				},
				{
					"name": "rotate",
					"description": {
						"kind": "markdown",
						"value": "**v2.5.0**\n\n旋转角度，范围 0 ~ 360, 地图正北和设备 y 轴角度的夹角"
					}
				},
				{
					"name": "skew",
					"description": {
						"kind": "markdown",
						"value": "**v2.5.0**\n\n倾斜角度，范围 0 ~ 40 , 关于 z 轴的倾角"
					}
				},
				{
					"name": "enable-3D",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.3.0**\n\n展示3D楼块(工具暂不支持）"
					}
				},
				{
					"name": "show-compass",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.3.0**\n\n显示指南针"
					}
				},
				{
					"name": "show-scale",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.8.0**\n\n显示比例尺，工具暂不支持"
					}
				},
				{
					"name": "enable-overlooking",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.3.0**\n\n开启俯视"
					}
				},
				{
					"name": "enable-zoom",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.3.0**\n\n是否支持缩放"
					}
				},
				{
					"name": "enable-scroll",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.3.0**\n\n是否支持拖动"
					}
				},
				{
					"name": "enable-rotate",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.3.0**\n\n是否支持旋转"
					}
				},
				{
					"name": "enable-satellite",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.7.0**\n\n是否开启卫星图"
					}
				},
				{
					"name": "enable-traffic",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.7.0**\n\n是否开启实时路况"
					}
				},
				{
					"name": "enable-poi",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.14.0**\n\n是否展示 POI 点"
					}
				},
				{
					"name": "enable-building",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v2.14.0**\n\n是否展示建筑物"
					}
				},
				{
					"name": "setting",
					"description": {
						"kind": "markdown",
						"value": "**v2.8.2**\n\n配置项"
					}
				}
			],
			"events": [
				{
					"name": "tap",
					"description": "点击地图时触发，2.9.0起返回经纬度信息"
				},
				{
					"name": "markertap",
					"description": "点击标记点时触发，e.detail = {markerId}"
				},
				{
					"name": "labeltap",
					"description": "点击label时触发，e.detail = {markerId}"
				},
				{
					"name": "controltap",
					"description": "点击控件时触发，e.detail = {controlId}"
				},
				{
					"name": "callouttap",
					"description": "点击标记点对应的气泡时触发e.detail = {markerId}"
				},
				{
					"name": "updated",
					"description": "在地图渲染更新完成时触发"
				},
				{
					"name": "regionchange",
					"description": "视野发生变化时触发，"
				},
				{
					"name": "poitap",
					"description": "点击地图poi点时触发，e.detail = {name, longitude, latitude}"
				},
				{
					"name": "anchorpointtap",
					"description": "点击定位标时触发，e.detail = {longitude, latitude}"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
				}
			]
		},
		{
			"name": "canvas",
			"description": {
				"kind": "markdown",
				"value": "画布。2.9.0 起支持一套新 Canvas 2D 接口（需指定 type 属性），同时支持同层渲染，原有接口不再维护。"
			},
			"attributes": [
				{
					"name": "type",
					"description": {
						"kind": "markdown",
						"value": "**v2.7.0**\n\n指定 canvas 类型，支持 2d (2.9.0) 和 webgl (2.7.0)"
					}
				},
				{
					"name": "canvas-id",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\ncanvas 组件的唯一标识符，若指定了 type 则无需再指定该属性"
					}
				},
				{
					"name": "disable-scroll",
					"valueSet": "boolean",
					"description": {
						"kind": "markdown",
						"value": "**v1.0.0**\n\n当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新"
					}
				}
			],
			"events": [
				{
					"name": "touchstart",
					"description": "手指触摸动作开始"
				},
				{
					"name": "touchmove",
					"description": "手指触摸后移动"
				},
				{
					"name": "touchend",
					"description": "手指触摸动作结束"
				},
				{
					"name": "touchcancel",
					"description": "手指触摸动作被打断，如来电提醒，弹窗"
				},
				{
					"name": "longtap",
					"description": "手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动"
				},
				{
					"name": "error",
					"description": "当发生错误时触发 error 事件，detail = {errMsg}"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"
				}
			]
		},
		{
			"name": "ad",
			"description": "Banner 广告。",
			"attributes": [
				{
					"name": "unit-id",
					"description": {
						"kind": "markdown",
						"value": "**v1.9.94**\n\n广告单元id，可在小程序管理后台的流量主模块新建"
					}
				},
				{
					"name": "ad-intervals",
					"description": {
						"kind": "markdown",
						"value": "**v2.3.1**\n\n广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（该参数不传入时 Banner 广告不会自动刷新）"
					}
				},
				{
					"name": "ad-type",
					"description": {
						"kind": "markdown",
						"value": "**v2.8.0**\n\n广告类型，默认为展示banner，可通过设置该属性为video展示视频广告, grid为格子广告"
					}
				},
				{
					"name": "ad-theme",
					"description": {
						"kind": "markdown",
						"value": "**v2.8.0**\n\n"
					}
				}
			],
			"events": [
				{
					"name": "load",
					"description": "广告加载成功的回调"
				},
				{
					"name": "error",
					"description": "广告加载失败的回调，event.detail = {errCode: 1002}"
				},
				{
					"name": "close",
					"description": "广告关闭的回调"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/ad.html"
				}
			]
		},
		{
			"name": "ad-custom",
			"description": {
				"kind": "markdown",
				"value": "原生模板 广告。"
			},
			"attributes": [
				{
					"name": "unit-id",
					"description": {
						"kind": "markdown",
						"value": "**v2.10.4**\n\n广告单元id，可在小程序管理后台的流量主模块新建"
					}
				},
				{
					"name": "ad-intervals",
					"description": {
						"kind": "markdown",
						"value": "**v2.10.4**\n\n广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（该参数不传入时 模板 广告不会自动刷新）"
					}
				}
			],
			"events": [
				{
					"name": "load",
					"description": "广告加载成功的回调"
				},
				{
					"name": "error",
					"description": "广告加载失败的回调，event.detail = {errCode: 1002}"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/ad-custom.html"
				}
			]
		},
		{
			"name": "official-account",
			"description": "公众号关注组件。",
			"attributes": [],
			"events": [
				{
					"name": "load",
					"description": "组件加载成功时触发"
				},
				{
					"name": "error",
					"description": "组件加载失败时触发"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html"
				}
			]
		},
		{
			"name": "open-data",
			"description": {
				"kind": "markdown",
				"value": "用于展示微信开放的数据。\n\n小程序插件中不能使用。"
			},
			"attributes": [
				{
					"name": "type",
					"description": {
						"kind": "markdown",
						"value": "**v1.4.0**\n\n开放数据类型"
					},
					"values": [
						{
							"name": "groupName",
							"description": "拉取群名称"
						},
						{
							"name": "userNickName",
							"description": "用户昵称"
						},
						{
							"name": "userAvatarUrl",
							"description": "用户头像"
						},
						{
							"name": "userGender",
							"description": "用户性别"
						},
						{
							"name": "userCity",
							"description": "用户所在城市"
						},
						{
							"name": "userProvince",
							"description": "用户所在省份"
						},
						{
							"name": "userCountry",
							"description": "用户所在国家"
						},
						{
							"name": "userLanguage",
							"description": "用户的语言"
						}
					]
				},
				{
					"name": "open-gid",
					"description": {
						"kind": "markdown",
						"value": "**v1.4.0**\n\n当 type=\"groupName\" 时生效, 群id"
					}
				},
				{
					"name": "lang",
					"valueSet": "lang",
					"description": {
						"kind": "markdown",
						"value": "**v1.4.0**\n\n当 type=\"user*\" 时生效，以哪种语言展示 userInfo"
					}
				},
				{
					"name": "default-text",
					"description": {
						"kind": "markdown",
						"value": "**v2.8.1**\n\n数据为空时的默认文案"
					}
				},
				{
					"name": "default-avatar",
					"description": {
						"kind": "markdown",
						"value": "**v2.8.1**\n\n用户头像为空时的默认图片，支持相对路径和网络图片路径"
					}
				}
			],
			"events": [
				{
					"name": "error",
					"description": "群名称或用户信息为空时触发"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"
				}
			]
		},
		{
			"name": "web-view",
			"description": {
				"kind": "markdown",
				"value": "承载网页的容器。会自动铺满整个小程序页面，**个人类型的小程序暂不支持使用**。\n\n客户端 6.7.2 版本开始，navigationStyle: custom 对 web-view 组件无效\n\n小程序插件中不能使用。"
			},
			"attributes": [
				{
					"name": "src",
					"description": {
						"kind": "markdown",
						"value": "**v1.6.4**\n\nwebview 指向网页的链接。可打开关联的公众号的文章，其它网页需登录小程序管理后台配置业务域名。"
					}
				}
			],
			"events": [
				{
					"name": "message",
					"description": "网页向小程序 postMessage 时，会在特定时机（小程序后退、组件销毁、分享）触发并收到消息。e.detail = { data }，data是多次 postMessage 的参数组成的数组"
				},
				{
					"name": "load",
					"description": "网页加载成功时候触发此事件。e.detail = { src }"
				},
				{
					"name": "error",
					"description": "网页加载失败的时候触发此事件。e.detail = { src }"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html"
				}
			]
		},
		{
			"name": "page-meta",
			"description": {
				"kind": "markdown",
				"value": "页面属性配置节点，用于指定页面的一些属性、监听页面事件。只能是页面内的第一个节点。可以配合 `navigation-bar` 组件一同使用。\n\n通过这个节点可以获得类似于调用 wx.setBackgroundTextStyle wx.setBackgroundColor 等接口调用的效果。"
			},
			"attributes": [
				{
					"name": "background-text-style",
					"description": {
						"kind": "markdown",
						"value": "**v2.9.0**\n\n下拉背景字体、loading 图的样式，仅支持 dark 和 light"
					}
				},
				{
					"name": "background-color",
					"description": {
						"kind": "markdown",
						"value": "**v2.9.0**\n\n窗口的背景色，必须为十六进制颜色值"
					}
				},
				{
					"name": "background-color-top",
					"description": {
						"kind": "markdown",
						"value": "**v2.9.0**\n\n顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持"
					}
				},
				{
					"name": "background-color-bottom",
					"description": {
						"kind": "markdown",
						"value": "**v2.9.0**\n\n底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持"
					}
				},
				{
					"name": "root-background-color",
					"description": {
						"kind": "markdown",
						"value": "**v2.12.1**\n\n页面内容的背景色，用于页面中的空白部分和页面大小变化 resize 动画期间\b的临时空闲区域"
					}
				},
				{
					"name": "scroll-top",
					"description": {
						"kind": "markdown",
						"value": "**v2.9.0**\n\n滚动位置，可以使用 px 或者 rpx 为单位，在被设置时，页面会滚动到对应位置"
					}
				},
				{
					"name": "scroll-duration",
					"description": {
						"kind": "markdown",
						"value": "**v2.9.0**\n\n滚动动画时长"
					}
				},
				{
					"name": "page-style",
					"description": {
						"kind": "markdown",
						"value": "**v2.9.0**\n\n页面根节点样式，页面根节点是所有页面节点的祖先节点，相当于 HTML 中的 body 节点"
					}
				},
				{
					"name": "page-font-size",
					"description": {
						"kind": "markdown",
						"value": "**v2.11.0**\n\n页面 page 的字体大小，可以设置为 system ，表示使用当前用户设置的微信字体大小"
					}
				},
				{
					"name": "root-font-size",
					"description": {
						"kind": "markdown",
						"value": "**v2.9.0**\n\n页面的根字体大小，页面中的所有 rem 单位，将使用这个字体大小作为参考值，即 1rem 等于这个字体大小；自小程序版本 2.11.0 起，也可以设置为 system"
					}
				},
				{
					"name": "page-orientation",
					"description": {
						"kind": "markdown",
						"value": "**v2.12.0**\n\n页面的方向，可为 auto portrait 或 landscape"
					}
				}
			],
			"events": [
				{
					"name": "resize",
					"description": "页面尺寸变化时会触发 resize 事件， event.detail = { size: { windowWidth, windowHeight } }"
				},
				{
					"name": "scroll",
					"description": "页面滚动时会触发 scroll 事件， event.detail = { scrollTop }"
				},
				{
					"name": "scrolldone",
					"description": "如果通过改变 scroll-top 属性来使页面滚动，页面滚动结束后会触发 scrolldone 事件"
				}
			],
			"references": [
				{
					"name": "小程序组件官方文档",
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
	],
	valueSets: [
		...commonValueSets,
		{
			"name": "referrer-policy",
			"values": [
				{
					"name": "origin",
					"description": "发送完整的referrer"
				},
				{
					"name": "no-referrer",
					"description": "不发送"
				}
			]
		},
		{
			"name": "space",
			"values": [
				{ "name": "space", "description": "中文字符空格一半大小" },
				{ "name": "emsp", "description": "中文字符空格大小" },
				{ "name": "nbsp", "description": "根据字体设置的空格大小" },
			]
		},
		{
			"name": "version",
			"values": [
				{
					"name": "develop",
					"description": "开发版"
				},
				{
					"name": "trial",
					"description": "体验版"
				},
				{
					"name": "release",
					"description": "正式版"
				}
			]
		},
		{
			"name": "orientation",
			"values": [
				{
					"name": "vertical",
					"description": "竖直"
				},
				{
					"name": "horizontal",
					"description": "水平"
				}
			]
		}
	]
};