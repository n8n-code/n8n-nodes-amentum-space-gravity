import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AmentumSpaceGravityApi implements ICredentialType {
        name = 'N8nDevAmentumSpaceGravityApi';

        displayName = 'Amentum Space Gravity API';

        icon: Icon = { light: 'file:../nodes/AmentumSpaceGravity/amentum-space-gravity.svg', dark: 'file:../nodes/AmentumSpaceGravity/amentum-space-gravity.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Amentum Space Gravity API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
