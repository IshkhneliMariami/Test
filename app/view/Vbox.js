Ext.define('MI.view.Vbox',{
    extend:"Ext.panel.Panel",
    border:false,
    layout:"fit",

    items: [{
        layout: {
            type: 'vbox',
            align: 'stretch',
        },
        defaults: {
            bodyPadding: 10,
            padding: 10

        },
        items: [{
            xtype: 'panel',
            title: 'Panel1',
            html:'Some html for panel 1',
            flex: 1,

        }, {
            xtype: 'panel',
            title: 'Panel2',
            html:'Some html for panel 2',
            flex: 1
        },{
            xtype: 'panel',
            title: 'Panel3',
            html:'Some html for panel 3',
            flex:1
        }]

    }]
})
