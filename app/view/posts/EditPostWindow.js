Ext.define('MI.view.posts.EditPostWindow',{
    extend: 'Ext.window.Window',
    title: 'ახალი პოსტის დამატება',
    modal: true,
    layout: 'fit',
    width: 500,
    height: 400,
    config: {
        post:null
    },
    controller: {
        xclass: 'MI.view.posts.EditPostWindowController'
    },
    items: [{
        xtype: 'form',
        reference: 'form',
        bodyPadding: 10,
        fieldDefaults: {
            anchor: '100%',
            allowBlank: false
        },

        listeners: {
            afterrender: 'formAfterRender'
        },

        items: [{
            xtype: 'numberfield',
            name: 'userId',
            fieldLabel: 'User ID',

        }, {
            xtype: 'textfield',
            name: 'title',
            fieldLabel: 'Title'
        }, {
            xtype: 'textarea',
            name: 'body',
            fieldLabel: 'Body'
        }],
        buttons: [{
            text: 'შენახვა',
            handler: 'savePost'
        }],

    }]
})