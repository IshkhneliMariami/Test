Ext.define('MI.view.registration.CustomerViewModel', {
    extend: 'Ext.app.ViewModel',
    requires: ['MI.model.District', 'MI.model.Region', 'MI.model.Customer'],

    stores: {
        districts: {
            model: 'MI.model.District',

        },
        regions: {
            model: 'MI.model.Region',
        },
        customers: {
            model: 'MI.model.Customer',
            // autoLoad: true
        },
        customerTypes: {
            fields: ['id', 'type'],
            data: [{id: 'INDIVIDUAL', type: 'ფიზიკური პირი'}, {id: 'LEGAL_ENTITY', type: 'იურიდიული პირი'}]
        },
        orgTypes: {
            fields: ['id', 'name'],
            data: [{id: 1, name: 'შპს'}, {id: 2, name: 'სს'}, {id: 3, name: 'იმ'}, {id: 4, name: 'სსიპ'}]
        }

    },

    formulas: {
        individualIsActive: function (get) {
            return get('type.value') === 'INDIVIDUAL';
        }
    },
})