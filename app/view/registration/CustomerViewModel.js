Ext.define('MI.view.registration.CustomerViewModel', {
    extend: 'Ext.app.ViewModel',
    requires: ['MI.model.District', 'MI.model.Region', 'MI.model.Customer', 'MI.model.Relation'],

    stores: {
        districts: {
            model: 'MI.model.District',
            autoLoad: true,
        },
        regions: {
            model: 'MI.model.Region',
            autoLoad: true,
        },
        customers: {
            model: 'MI.model.Customer',
            autoLoad: true,
        },
        customerTypes: {
            fields: ['id', 'type'],
            data: [{id: 'INDIVIDUAL', type: 'ფიზიკური პირი'}, {id: 'LEGAL_ENTITY', type: 'იურიდიული პირი'}],
        },
        orgTypes: {
            fields: ['id', 'name'],
            data: [{id: 1, name: 'შპს'}, {id: 2, name: 'სს'}, {id: 3, name: 'იმ'}, {id: 4, name: 'სსიპ'}],
        },
        relationTypes: {
            fields: ['id', 'name'],
            data: [
                {id: 1, name: 'დედა'},
                {id: 2, name: 'მამა'},
                {id: 4, name: 'ძმა'},
                {id: 3, name: 'და'},
                {id: 5, name: 'ბიძა'},
                {id: 6, name: 'დეიდა'},
                {id: 7, name: 'პაპა'},
                {id: 8, name: 'ბებია'},
                {id: 9, name: 'მეზობელი'},
            ],
        },
        relations: {
            model: 'MI.model.Relation'
        }
    },

    formulas: {
        individualIsActive: function(get) {
            return get('type.value') === 'INDIVIDUAL';
        },
    },
});
