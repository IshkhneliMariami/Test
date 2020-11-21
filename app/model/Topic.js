Ext.define('MI.model.Topic', {
    extend: 'Ext.data.Model',

    idProperty: 'threadid',

    fields: [{
        name: 'threadid',
        type: 'number'
    }, {
        name: 'title',
        type: 'string'
    }, {
        name: 'username',
        type: 'string'
    }, {
        name: 'userid',
        type: 'number'
    }, {
        name: 'dateline',
        type: 'number'
    }, {
        name: 'forumtitle',
        type: 'string'
    }, {
        name: 'postid',
        type: 'number'
    }, {
        name: 'forumid',
        type: 'number'
    }, {
        name: 'replycount',
        type: 'number'
    }, {
        name: 'lastpost',
        type: 'date',
        dateFormat: 'timestamp'
    }, {
        name: 'lastposter',
        type: 'string'
    }, {
        name: 'excerpt',
        type: 'string'
    }],

    proxy: {
        url: 'https://softlab-api.softgen.ge/sencha/topics',
        type: 'rest',
        reader: {
            rootProperty: 'topics',
            totalProperty: 'totalCount'
        }
    },
})