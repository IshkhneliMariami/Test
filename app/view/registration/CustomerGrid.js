xt.define('MI.view.registration.CustomerGrid', {
    extend: 'Ext.grid.Panel',
    //bind: '{}',


    columns: [{
        text: 'კლიენტის ტიპი',
        dataIndex: 'type'

    }, {
        text: 'დასახელება',
        flex: 1,
        dataIndex: 'name'
    }, {
        text: 'რეგიონი',
        flex: 1,
        dataIndex: 'region'
    },{
        text: 'რაიონი',
        flex: 1,
        dataIndex: 'district'
    }]
});