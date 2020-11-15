Ext.define('MI.view.registration.CustomerViewModel', {
    extend: 'Ext.app.ViewModel',
    requires: ['MI.model.District','MI.model.Region','MI.model.Customer'],

    stores: {
        districts: {
            model: 'MI.model.District',
           
        },
        regions: {
            model: 'MI.model.Region',
        },
        customers: {
            model: 'MI.model.Customer',
        }

    },

    formulas: {
        individualIsActive: function (get) {
            return get('type.value') === 'INDIVIDUAL';
        }
    },
})