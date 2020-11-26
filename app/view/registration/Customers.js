Ext.define('MI.view.registration.Customers', {
    extend: 'Ext.panel.Panel',

    controller: {
        xclass: 'MI.view.registration.CustomerController',
    },
    viewModel: {
        xclass: 'MI.view.registration.CustomerViewModel'
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [{
        xclass: 'MI.view.registration.CustomerForm',
        reference: 'form',
    }, {
        xclass: 'MI.view.registration.CustomerGrid',
        flex: 1,
    }]

})
