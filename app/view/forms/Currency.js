Ext.define('MI.view.forms.Currency', {
    extend: 'Ext.panel.Panel',

    controller: {
        reset: function () {
            const form = this.lookup('form');
            form.reset()


        },
        convert: function () {
            const receivableAmount = this.lookup('receivableAmount');
            const currency = this.lookup('currency');
            const curr = currency.getValue();
            const recivable = receivableAmount.getValue();
            const issuable = curr * recivable;
            this.getViewModel().set('initValue', issuable);

        },
        damaged: function () {
            const currency = this.lookup('currency');
            const curr = currency.getValue();
            const damaged = curr * 0.9;
            this.getViewModel().set('currValue', damaged);
        }
    },
    viewModel: {
        data: {
            currValue: '3.299',
            initValue: null

        }
    },

    items: [{
        xtype: 'form',
        reference: 'form',
        // border: false,
        bodyPadding: 20,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },

        fieldDefaults: {
            anchor: '100%',
            labelAlign: 'top',
        },

        items: [{
            xtype: 'fieldset',
            border: false,
            items: [{
                xtype: 'textfield',
                name: 'receivableAmount',
                reference: 'receivableAmount',
                fieldLabel: 'მისაღები თანხა (USD)'

            }, {
                xtype: 'textfield',
                name: 'issuableAmount',
                reference: 'issuableAmount',
                fieldLabel: 'გასაცემი თანხა (GEL)',
                bind: {
                    value: '{initValue}'
                },
                editable: false,
            }]
        }, {
            xtype: 'fieldset',
            border: false,
            items: [{
                xtype: 'textfield',
                name: 'currency',
                reference: 'currency',
                fieldLabel: 'კურსი',
                bind: {
                    value: '{currValue}',
                    readOnly: '{!specialCurrency.checked}'
                },


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
                }
            }]
        }, {
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
    }]

})