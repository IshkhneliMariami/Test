Ext.define('MI.view.posts.PostPanel', {
    extend: 'Ext.panel.Panel',
    layout: {
        type: 'vbox',
        align: 'stretch',
    },
    items: [{
        xclass: 'MI.view.posts.Grid',
        flex: 1,
    }],
});
