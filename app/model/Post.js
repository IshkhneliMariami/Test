Ext.define('MI.model.Post',{
    extend: 'Ext.data.Model',
    fields: ['id', 'userId', 'title', 'body'],
    proxy: {
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'rest',
        writer: {
            writeRecordId: false,
            writeAllFields: true
        }
    }

})