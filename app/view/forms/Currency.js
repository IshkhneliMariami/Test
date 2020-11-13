Ext.define('MI.view.forms.Currency', {
    extend: 'Ext.panel.Panel',
    requires: ['MI.model.ExchangeOperation'],

    controller: {
        xclass: 'MI.view.forms.FormController'
    },

    viewModel: {
        data: {
            currValue: 3.299,
            initValue: null,
            currency: 3.299,

        },
        stores: {
            exchangeOperations: {
                model: 'MI.model.ExchangeOperation',

            }
        }
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
        },
        items: [{
            items: [{
                xtype: 'numberfield',
                name: 'receivableAmount',
                reference: 'receivableAmount',
                fieldLabel: 'მისაღები თანხა (USD)',
                allowBlank: false
            }, {
                xtype: 'numberfield',
                name: 'issuableAmount',
                reference: 'issuableAmount',
                fieldLabel: 'გასაცემი თანხა (GEL)',
                bind: {
                    value: '{initValue}'
                },
                editable: false,
            }]
        }, {
            items: [{
                xtype: 'numberfield',
                name: 'currency',
                reference: 'currency',
                fieldLabel: 'კურსი',
                bind: {
                    value: '{currency}',
                    readOnly: '{!specialCurrency.checked}'
                },
                decimalPrecision: 4


            }, {
                xtype: 'checkbox',
                name: 'specialCurrency',
                reference: 'specialCurrency',
                boxLabel: 'სპეც კურსი',
            }, {
                xtype: 'checkbox',
                name: 'damagedCurrency',
                reference: 'damagedCurrency',
                boxLabel: 'დაზიანებული ვალუტა',
                listeners: {
                    change: 'damaged',
                    single: true,
                },
                bind: {

                    disabled: '{specialCurrency.checked}'
                }
            }]
        },
            {
                border: false,
                items: [{
                    border: false,
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                    },
                    defaults: {
                        // bodyPadding: 10,
                        // padding: 1,
                        margin: '25 0 20 0',

                    },
                    items: [{
                        xtype: 'button',
                        text: 'კონვერტაცია',
                        handler: 'convert'

                    }, {
                        xtype: 'button',
                        text: 'გასუფთავება',
                        handler: 'reset',
                        margin: '0'
                    }]
                }]
            }]
    }, {
        items: [{
            xclass: 'MI.view.forms.FormGrid',
            flex: 1,
            border: false
        }],
    }]

})