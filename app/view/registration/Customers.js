Ext.define('MI.view.registration.Customers', {
    extend: 'Ext.panel.Panel',

    controller: {
        xclass: 'MI.view.registration.CustomerController',
    },
    viewModel: {
        xclass: 'MI.view.registration.CustomerViewModel'
    },


    items: [{

        items: [{
            xtype: 'form',
            border: false,
            reference: 'form',
            bodyPadding: 20,
            layout: {
                type: 'vbox',
                // align: 'stretch'
            },
            fieldDefaults: {
                anchor: '100%',
                labelAlign: 'top',
            },

            items: [{
                xtype: 'combo',
                fieldLabel: 'კლიენტის ტიპი',
                reference: 'type',
                name: 'type',
                emptyText: 'კლიენტის ტიპი',
                typeAhead: true,
                queryMode: 'local',
                forceSelection: true,
                valueField: 'id',
                displayField: 'name',
                value: 'INDIVIDUAL',
                publishes: [
                    'value'
                ],
                store: {
                    fields: ['id', 'name'],
                    data: [{id: 'INDIVIDUAL', name: 'ფიზიკური პირი'}, {id: 'LEGAL_ENTITY', name: 'იურიდიული პირი'}]
                },

            }, {
                xtype: 'textfield',
                reference: 'firstName',
                name: 'firstName',
                fieldLabel: 'სახელი',
                bind: {
                    hidden: '{!individualIsActive}',
                    disabled: '{!individualIsActive}'
                },
                allowBlank: false,

            }, {
                xtype: 'textfield',
                reference: 'lastName',
                name: 'lastName',
                fieldLabel: 'გვარი',
                bind: {
                    hidden: '{!individualIsActive}',
                    disabled: '{!individualIsActive}'
                },
                allowBlank: false,

            }, {
                xtype: 'combo',
                fieldLabel: 'სამართლებრივი ფორმა',
                reference: 'orgType',
                name: 'orgType',
                store: {
                    fields: ['id', 'name'],
                    data: [{id: 1, name: 'შპს'}, {id: 2, name: 'სს'}, {id: 3, name: 'იმ'},
                        {id: 4, name: 'სსიპ'}]
                },
                queryMode: 'local',
                valueField: 'id',
                displayField: 'name',
                bind: {
                    hidden: '{individualIsActive}',
                    disabled: '{individualIsActive}'
                },
                allowBlank: false,

            }, {
                xtype: 'textfield',
                reference: 'privateNumber',
                name: 'privateNumber',
                fieldLabel: 'პირადი ნომერი',
                bind: {
                    hidden: '{!individualIsActive}',
                    disabled: '{!individualIsActive}'
                },
                allowBlank: false,

            }, {
                xtype: 'textfield',
                reference: 'name',
                name: 'name',
                fieldLabel: 'დასახელება',
                allowBlank: false,
                bind: {
                    hidden: '{individualIsActive}',
                    disabled: '{individualIsActive}'
                },

            }, {
                xtype: 'numberfield',
                reference: 'idNumber',
                name: 'idNumber',
                fieldLabel: 'საიდენტიფიკაციო ნომერი',
                bind: {
                    hidden: '{individualIsActive}',
                    disabled: '{individualIsActive}'
                },
                allowBlank: false,
                maxLength: 9

            }, {
                xtype: 'datefield',
                fieldLabel: 'დაბადების თარიღი',
                name: 'birthDate',
                allowBlank: false,

            }, {
                xtype: 'combo',
                fieldLabel: 'რეგიონი',
                reference: 'region',
                name: 'region',
                bind: {
                    store: '{regions}'
                },
                valueField: 'id',
                displayField: 'name',
                listeners: {
                    change: 'changeRegion'
                },
                allowBlank: false,
            }, {
                xtype: 'combo',
                fieldLabel: 'რაიონი',
                reference: 'district',
                name: 'district',
                bind: {
                    store: '{districts}'
                },
                valueField: 'id',
                displayField: 'name',
                allowBlank: false,

            }, {
                xtype: 'button',
                text: 'შენახვა',
                handler: 'save',
                scale: 'medium',
                margin: '10 0 0 0'
            }]

        }]
    }, {
        xtype: 'grid',
        xclass: 'MI.view.registration.CustomerGrid',
        flex: 1,
        border: false,
    }]

})