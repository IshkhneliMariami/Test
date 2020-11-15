Ext.define('MI.model.Customer', {
    extend: 'Ext.data.Model',
    fields: ['id', 'type', 'firstName', 'lastName', 'name', 'orgType', 'privateNumber', 'idNumber',
        'region', 'district'],

    proxy: {
        url: 'https://softlab-api.softgen.ge/mariami/customers',
        type: 'rest',
    },
    writer: {
        writeAllFields: true,
        writeRecordId: false,
    }
})