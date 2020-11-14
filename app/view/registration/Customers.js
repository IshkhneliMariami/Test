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
            fieldLabel: 'სახელი',

        }, {
            xtype: 'textfield',
            reference: 'lastName',
            fieldLabel: 'გვარი',

        }, {
            xtype: 'textfield',
            reference: 'privateNumber',
            fieldLabel: 'პირადი ნომერი',

        }, {
            xtype: 'combo',
            fieldLabel: 'რეგიონი',
            reference: 'region',
            // bind: {
            //     store: '{regions}'
            // }
        }, {
            xtype: 'combo',
            fieldLabel: 'რაიონები',
            reference: 'districts',
            // bind: {
            //     store: '{districts}'
            // }
        }, {
            xtype: 'combo',
            fieldLabel: 'სამართლებრივი ფორმა',
            reference: 'orgType',
            store: {
                fields: ['id', 'name'],
                data: [{id: 1, name: 'შპს'}, {id: 2, name: 'სს'}, {id: 3, name: 'იმ'},
                    {id: 4, name: 'სსიპ'}]
            },
            queryMode: 'local',
            valueField: 'id',
            displayField: 'name',
            // bind:{
            //     hidden:'{individualIsActive}',
            //     disabled: '{individualIsActive}'
            // }

        }, {
            xtype: 'textfield',
            reference: 'name',
            fieldLabel: 'დასახელება',
            // bind:{
            //     hidden:'{individualIsActive}',
            //     disabled: '{individualIsActive}'
            // }

        }, {
            xtype: 'textfield',
            reference: 'idNumber',
            fieldLabel: 'საიდენტიფიკაციო ნომერი',
            // bind:{
            //     hidden:'{individualIsActive}',
            //     disabled: '{individualIsActive}'
            // }

        }, {
            xtype: 'button',
            text: 'შენახვა',
            handler: 'save'
        }]

    }],



})