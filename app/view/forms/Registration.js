Ext.define('MI.view.forms.Registration', {
    extend: 'Ext.panel.Panel',
    requires: ['MI.model.Distinct'],

    controler: {
        save: function () {
            const form = this.lookup('form');
            const values = form.getForm().getValues();

            const clientID = values.client[0];
            const store = this.getViewModel().getStore();
            const client = store.getByID(clientID);
            this.getViewModel('client', client)

        }

    },


    viewModel: {
        stores: {
            distincts: {
                model: 'MI.model.Distinct',
            }

        },
        data: {
            client: null
        }
    },

    items: [{
        xtype: 'form',
        border: false,
        reference: 'form',
        bodyPadding: 20,
        layout: {
            type: 'vbox',
            // align: 'stretch'
        },
        defaults: {
            margin: 5,

        },
        fieldDefaults: {
            anchor: '100%',
            labelAlign: 'top',
            msgTarget: 'side'
        },
        items: [{
            xtype: 'combo',
            fieldLabel: 'კლიენტის ტიპი',
            store: {
                fields: ['id', 'type'],
                data: [{id: 1, type: 'ფიზიკური პირი'}, {id: 2, type: 'იურიდიული პირი'}]
            },
            typeAhead: true,
            queryMode: 'local',
            name: 'client',
            forceSelection: true,
            valueField: 'id',
            displayField: 'type',
            reference: 'clientField'

        }, {
            xtype: 'combo',
            fieldLabel: 'სამართლებლივი ფორმა',
            store: {
                fields: ['id', 'name'],
                data: [{id: 1, name: 'შპს'}, {id: 2, name: 'სს'}, {id: 3, name: 'იმ'},
                    {id: 4, name: 'სსიპ'}]
            },
            typeAhead: true,
            queryMode: 'local',
            forceSelection: true,
            valueField: 'id',
            displayField: 'name',

        }, {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'სახელი',
            bind: {
                hidden: '{!client.type}'
            },

        }, {

            xtype: 'textfield',
            name: 'surname',
            fieldLabel: 'გვარი',
            // hidden: true,
        }, {
            xtype: 'numberfield',
            name: 'personalNumber',
            fieldLabel: 'პირადი ნომერი',
            emptyText: '0000000000',
            maxLength: 11

        }, {
            xtype: 'combo',
            fieldLabel: 'რეგიონი',
            store: {
                fields: ['id', 'name'],
                data: [{id: 1, name: 'სამეგრელო-ზემო სვანეთი'}, {id: 2, name: 'კახეთი'}, {
                    id: 3,
                    name: 'ქვემო ქართლი'
                },
                    {id: 4, name: 'მცხეთა-მთიანეთი'}, {id: 5, name: 'აფხაზეთი'}, {id: 6, name: 'შიდა ქართლი'}]
            },
            typeAhead: true,
            queryMode: 'local',
            forceSelection: true,
            valueField: 'id',
            displayField: 'name'

        }, {
            xtype: 'combo',
            fieldLabel: 'რაიონი',
            bind: {
                store: '{distincts}'
            }
        }, {
            xtype: 'button',
            text: 'შენახვა',
            handler: 'save'
        }]
    }]


})