Ext.define('MI.view.registration.Customers', {
    extend: 'Ext.panel.Panel',

    controller: {
        xclass: 'MI.view.registration.CustomerController',
    },
    viewModel: {
        xclass: 'MI.view.registration.CustomerViewModel'
    },

    items: [{
        xtype: 'form',
        reference: 'form',
        border: false,
        bodyPadding: 20,
        layout: 'hbox',
        defaultType: 'fieldset',
        fieldDefaults: {
            anchor: '100%',
            labelAlign: 'top',
        },
        defaults: {
            border: false,
            flex: 1
        },
        items: [{
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
                displayField: 'type',
                value: 'INDIVIDUAL',
                publishes: [
                    'value'
                ],
                bind: {
                    store: '{customerTypes}'
                }

            }, {
                xtype: 'textfield',
                reference: 'firstName',
                name: 'firstName',
                fieldLabel: 'სახელი',
                allowBlank: false,
                regex: /^[a-zA-Zა-ჰ]+$/,
                bind: {
                    hidden: '{!individualIsActive}',
                    disabled: '{!individualIsActive}'
                },


            }, {
                xtype: 'combo',
                fieldLabel: 'სამართლებრივი ფორმა',
                allowBlank: false,
                reference: 'orgType',
                name: 'orgType',
                queryMode: 'local',
                valueField: 'id',
                displayField: 'name',
                bind: {
                    store: '{orgTypes}',
                    hidden: '{individualIsActive}',
                    disabled: '{individualIsActive}'
                }

            }, {
                xtype: 'textfield',
                reference: 'lastName',
                name: 'lastName',
                fieldLabel: 'გვარი',
                regex: /^[a-zA-Zა-ჰ]+$/,
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
                regex: /^[a-zA-Zა-ჰ]+$/,
                allowBlank: false,
                bind: {
                    hidden: '{individualIsActive}',
                    disabled: '{individualIsActive}'
                },

            },]
        }, {
            items: [{
                xtype: 'numberfield',
                reference: 'privateNumber',
                name: 'privateNumber',
                allowBlank: false,
                minLength: 11,
                maxLength: 11,
                fieldLabel: 'პირადი ნომერი',
                bind: {
                    hidden: '{!individualIsActive}',
                    disabled: '{!individualIsActive}'
                }

            }, {
                xtype: 'numberfield',
                reference: 'idNumber',
                name: 'idNumber',
                allowBlank: false,
                maxLength: 9,
                fieldLabel: 'საიდენტიფიკაციო ნომერი',
                bind: {
                    hidden: '{individualIsActive}',
                    disabled: '{individualIsActive}'
                },
            }, {

                xtype: 'datefield',
                fieldLabel: 'დაბადების თარიღი',
                name: 'birthDate',
                allowBlank: false,
            }]
        }, {
            items: [{
                xtype: 'combo',
                fieldLabel: 'რეგიონი',
                reference: 'region',
                name: 'region',
                allowBlank: false,
                valueField: 'id',
                displayField: 'name',
                bind: {
                    store: '{regions}'
                },
                listeners: {
                    change: 'changeRegion'
                },
            }, {
                xtype: 'combo',
                fieldLabel: 'რაიონი',
                reference: 'district',
                name: 'district',
                valueField: 'id',
                displayField: 'name',
                allowBlank: false,
                bind: {
                    store: '{districts}',
                    readOnly: '{!region.selection}'
                }
            }]
        }, {
            items: [{
                xtype: 'button',
                text: 'შენახვა',
                handler: 'save',
                scale: 'medium',
                margin: '25 0 0 0'

            }]
        }]

    }, {
        xtype: 'grid',
        xclass: 'MI.view.registration.CustomerGrid',
        // autoLoad: true,
        flex: 1,


    }]

})