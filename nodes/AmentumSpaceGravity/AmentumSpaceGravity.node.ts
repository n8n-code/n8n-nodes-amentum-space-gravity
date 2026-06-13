import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { egm2008Description } from './resources/egm-2008';

export class AmentumSpaceGravity implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Amentum Space Gravity',
                name: 'N8nDevAmentumSpaceGravity',
                icon: { light: 'file:./amentum-space-gravity.svg', dark: 'file:./amentum-space-gravity.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Earth\'s gravitational field is non-uniform; the geoid is its shape.',
                defaults: { name: 'Amentum Space Gravity' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAmentumSpaceGravityApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Egm 2008",
					"value": "Egm 2008",
					"description": "Calculate geoid height and gravity anomaly values using the EGM2008 model\n"
				}
			],
			"default": ""
		},
		...egm2008Description
                ],
        };
}
