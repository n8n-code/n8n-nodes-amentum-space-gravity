import type { INodeProperties } from 'n8n-workflow';

export const egm2008Description: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Egm 2008"
					]
				}
			},
			"options": [
				{
					"name": "App API Egm 2008 Endpoints EGM 2008 Calculate Height",
					"value": "App API Egm 2008 Endpoints EGM 2008 Calculate Height",
					"action": "Calculate the geoid height\n",
					"description": "for a given latitude / longitude. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/egm2008/geoid_height"
						}
					}
				},
				{
					"name": "App API Egm 2008 Endpoints EGM 2008 Calculate Anomaly",
					"value": "App API Egm 2008 Endpoints EGM 2008 Calculate Anomaly",
					"action": "Calculate gravity anomaly values\n",
					"description": "for a given latitude / longitude.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/egm2008/gravity_anomaly"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /egm2008/geoid_height",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Egm 2008"
					],
					"operation": [
						"App API Egm 2008 Endpoints EGM 2008 Calculate Height"
					]
				}
			}
		},
		{
			"displayName": "Latitude",
			"name": "latitude",
			"required": true,
			"description": "Geographic latitude (-90 to 90 deg).",
			"default": -45,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "latitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Egm 2008"
					],
					"operation": [
						"App API Egm 2008 Endpoints EGM 2008 Calculate Height"
					]
				}
			}
		},
		{
			"displayName": "Longitude",
			"name": "longitude",
			"required": true,
			"description": "Geographic longitude (-180 to 180 deg).",
			"default": 45,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "longitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Egm 2008"
					],
					"operation": [
						"App API Egm 2008 Endpoints EGM 2008 Calculate Height"
					]
				}
			}
		},
		{
			"displayName": "GET /egm2008/gravity_anomaly",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Egm 2008"
					],
					"operation": [
						"App API Egm 2008 Endpoints EGM 2008 Calculate Anomaly"
					]
				}
			}
		},
		{
			"displayName": "Latitude",
			"name": "latitude",
			"required": true,
			"description": "Geographic latitude (-90 to 90 deg).",
			"default": -45,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "latitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Egm 2008"
					],
					"operation": [
						"App API Egm 2008 Endpoints EGM 2008 Calculate Anomaly"
					]
				}
			}
		},
		{
			"displayName": "Longitude",
			"name": "longitude",
			"required": true,
			"description": "Geographic longitude (-180 to 180 deg).",
			"default": 45,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "longitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Egm 2008"
					],
					"operation": [
						"App API Egm 2008 Endpoints EGM 2008 Calculate Anomaly"
					]
				}
			}
		},
];
