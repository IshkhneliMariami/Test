Ext.define('MI.view.registration.CustomerGrid', {
    extend: 'Ext.grid.Panel',
    bind: {
        store: '{customers}'
    },

    columns: [{
        text: 'ID',
        dataIndex: 'id',

    }, {
        text: 'კლიენტის ტიპი',
        dataIndex: 'type',
        flex:1

    }, {
        text: 'დასახელება',
        dataIndex: 'name',
        flex:1

    }, {
        text: 'საიდ. ნომერი',
        dataIndex: 'idNumber',
        flex:1

    }, {
        text: 'რეგიონი',
        dataIndex: 'region',
        flex:1

    }, {
        text: 'რაიონი',
        dataIndex: 'district',
        flex:1

    }, {
        text: 'დაბადების თარიღი',
        dataIndex: 'birthDate',
        flex:1
    }]
})