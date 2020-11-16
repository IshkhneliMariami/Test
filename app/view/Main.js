Ext.define('MI.view.Main', {
    extend: 'Ext.panel.Panel',
    layout: 'border',
    controller: {
        xclass: 'MI.view.MainController',
    },
    viewModel: {
        xclass: 'MI.view.MainViewModel'
    },
    items: [{
        xtype: 'panel',
        reference: 'header',
        bodyPadding: 10,
        region: 'north',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'label',
            flex: 1,
            html: '<strong>Mariam Ishkhneli</strong>',
            padding: 8
        }, {
            xtype: 'button',
            text: 'search',
        }]
    }, {
        xtype: 'panel',
        width: 200,
        title: 'Menu',
        split: true,
        collapsible: true,
        region: 'west',
        layout: {
            type: 'vbox',
            align: 'stretch',
        },
        items: [{
            xtype: 'treelist',
            flex: 1,
            bind: '{navItems}',
            listeners: {
                selectionchange: 'selectionChange'
            }

        }]
    }, {
        xtype: 'tabpanel',
        reference: 'mainTabPanel',
        region: 'center',
        items: []
    // }, {
    //     region: 'south',
    //     html: 'footer',
    //     bodyPadding: 10
    }]

});
