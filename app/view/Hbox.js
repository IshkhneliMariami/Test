Ext.define('MI.view.Hbox',{
    extend:"Ext.panel.Panel",
    border:false,
    layout:"fit",

    items: [{
        layout: {
            type: 'hbox',
            align: 'stretch',
        },
        defaults: {
            frame: true,
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
