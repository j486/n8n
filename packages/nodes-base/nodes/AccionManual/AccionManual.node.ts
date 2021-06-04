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

export class AccionManual implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'AccionManual',
        name: 'accionManual',
        icon: 'file:friendGrid.svg',
        group: ['transform'],
        version: 1,
        description: 'Acción Manual 1',
        defaults: {
            name: 'AccionManual',
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
            {
				displayName: 'Serie Documental',
				name: 'Serie Documental',
				type: 'multiOptions',
				options: [
					{
						name: 'ATENEA_SERIE_9',
						value: 'ATENEA_SERIE_9',
					},
					{
						name: 'ATM_MIGRACION',
						value: 'ATM_MIGRACION',
					},
					{
						name: 'ATa_PI/EXPR Expropiaciones',
						value: 'ATa_PI/EXPR Expropiaciones',
					},
					{
						name: 'AUDIFILM',
						value: 'AUDIFILM',
					},
                    {
						name: 'AUTOMATICO',
						value: 'AUTOMATICO',
					},
                    {
						name: 'AV_BADAJOZ',
						value: 'AV_BADAJOZ',
					},
                    {
						name: 'AV_PRUEBAS NO PRECARGA',
						value: 'AV_PRUEBAS NO PRECARGA',
					},
                    {
						name: 'AY00 Ordenanzas Municipales',
						value: 'AY00 Ordenanzas Municipales',
					},
                    {
						name: 'A_PR INDICE ELECTRONICO',
						value: 'A_PR INDICE ELECTRONICO',
					},
                    {
						name: 'Abierto_',
						value: 'Abierto_',
					},
				],
				default: [],
			},
            {
				displayName: 'Interactivo (Participa El Usuario',
				name: 'Interactivo (Participa el usuario)',
                description: 'Interactivo (Participa el usuario)',
				type: 'boolean',
				default: false,
			},
        ],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        return [[]];
    }
}