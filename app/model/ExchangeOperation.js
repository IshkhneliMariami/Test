Ext.define('MI.model.ExchangeOperation', {
    extend: 'Ext.data.Model',
    fields: ['id','receivableAmount', 'issuableAmount', 'currency','specialCurrency','damagedCurrency'],
});