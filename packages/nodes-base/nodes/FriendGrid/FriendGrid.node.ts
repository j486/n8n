import {
    IExecuteFunctions,
} from 'n8n-core';

import {
    IDataObject,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
} from 'n8n-workflow';

/*import {
    OptionsWithUri,
} from 'request';*/

export class FriendGrid implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'FriendGrid',
        name: 'friendGrid',
        icon: 'file:friendGrid.svg',
        group: ['transform'],
        version: 1,
        description: 'Acción Manual 1',
        defaults: {
            name: 'FriendGrid',
            color: '#1A82e2',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
        ],
        properties: [
            {
                displayName: 'Nombre',
                name: 'Nombre',
                type: 'string',
                default: '',
                required: true,
                description: 'Nombre acción',
            },
            {
                displayName: 'Tipo',
                name: 'Tipo',
                type: 'string',
                default: '',
                required: true,
                description: 'Tipo acción',
            },
            {
                displayName: 'Descripción',
                name: 'Descripción',
                type: 'string',
                default: '',
                required: true,
                description: 'descripción acción',
            },
        ],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        return [[]];
    }
}