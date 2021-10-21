export const CONFIG_SCHEMA_URI = 'wya://server/config.schema.json';
export const CONFIG_SCHEMA = {
	"type": "object",
	"properties": {
		"component": {
			"type": "boolean",
		},
		"componentPlaceholder": {
			"type": "object"
		},
		"navigationBarBackgroundColor": {
			"type": "string",
		},
		"navigationBarTextStyle": {
			"type": "string",
			"enum": ["black", "white"]
		},
		"navigationBarTitleText": {
			"type": "string",
		},
		"navigationStyle": {
			"type": "string",
			"enum": ["default", "custom"]
		},
		"backgroundColor": {
			"type": "string",
		},
		"backgroundTextStyle": {
			"type": "string",
			"enum": ["dark", "light"]
		},
		"backgroundColorTop": {
			"type": "string",
		},
		"backgroundColorBottom": {
			"type": "string",
		},
		"enablePullDownRefresh": {
			"type": "boolean",
			"enum": [true, false]
		},
		"onReachBottomDistance": {
			"type": "string",
		},
		"pageOrientation": {
			"type": "string",
			"enum": ["auto", "portrait", "landscape"]
		},
		"disableScroll": {
			"type": "boolean",
			"enum": [true, false]
		},
		"usingComponents": {
			"type": "object",
		},
		"initialRenderingCache": {
			"type": "string",
			"enum": ["static", "dynamic"]
		},
		"style": {
			"type": "string",
		},
		"singlePage": {
			"type": "object",
			"properties": {
				"navigationBarFit": {
					"type": "string",
					"enum": ["float", "squeezed"]
				}
			}
		},
		"restartStrategy": {
			"type": "string",
			"enum": ["homePage", "homePageAndLatestPage"]
		},
	}
};