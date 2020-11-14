Ext.define('MI.view.registration.CustomerViewModel', {
    extend: 'Ext.app.ViewModel',
    requires: ['MI.model.District'],
    requires: ['MI.model.Region'],

    stores: {
        districts: {
            model: 'MI.model.District',
        },
        regions: {
            model: 'MI.model.Region',
        }

    },

    formulas: {

        individualIsActive: function (get) {
            if (get('type.value') === 'INDIVIDUAL')
                return true;
            else
                return false
        }
    },
})