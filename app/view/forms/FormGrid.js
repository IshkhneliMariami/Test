Ext.define('MI.view.forms.FormGrid', {
    extend: 'Ext.grid.Panel',
    reference: 'formGrid',
    bind: '{exchangeOperations}',
    controller: {
        xclass: 'MI.view.forms.FormController'
    },

    columns: [{
        text: 'მისაღები თანხა',
        dataIndex: 'receivableAmount'

    }, {
        text: 'გასაცემი თანხა',
        flex: 1,
        dataIndex: 'issuableAmount'
    }, {
        text: 'კურსი',
        flex: 1,
        dataIndex: 'currency'
    }, {
        xtype: 'booleancolumn',
        text: 'სპეც კურსი',
        flex: 1,
        dataIndex: 'specialCurrency',
        trueText: '✓',
        falseText: '',
    }, {
        xtype: 'booleancolumn',
        text: 'დაზიანებული ვალუტა',
        flex: 1,
        dataIndex: 'damagedCurrency',
        trueText: '✓',
        falseText: '',
    }, {
        xtype: 'datecolumn',
        text: 'თარიღი',
        flex: 1,
        format: 'd.m.Y H:i:s'
    }, {
        xtype: 'actioncolumn',
        width: 50,
        menuDisabled: true,
        sortable: false,
        items: [{
            iconCls: 'fa fa-times-circle',
            handler: 'delete',
            tooltip: 'წაშლა'
        }]
    }]
});
