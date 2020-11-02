Ext.define('MI.view.posts.Grid', {
    extend: 'Ext.grid.Panel',
    reference: 'mainGrid',
    bind: '{posts}',
    controller: {
        xclass: 'MI.view.posts.GridController'
    },
    tbar: [{
        text: 'დამატება',
        handler: 'addPost'
    }, {
        text: 'წაშლა',
        bind: {
            disabled: '{!mainGrid.selection}'
        },
        handler: 'deletePost'
    },{

            text: 'რედაქტირება',
        bind:{
                disabled: '{!mainGrid.selection}'
        },
            handler: 'editPost',

    }],


    columns: [{
        text: 'ID',
        width: 50,
        dataIndex: 'id'
    }, {
        text: 'user ID',
        dataIndex: 'userId',
        flex: 1,
    }, {
        text: 'Title',
        dataIndex: 'title',
        flex: 1
    }, {
        text: 'Body',
        dataIndex: 'body',
        flex: 2
    }]
});
