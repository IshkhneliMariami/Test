Ext.define('MI.view.Fit', {
    extend: 'Ext.panel.Panel',
    layout: 'fit',
    autoScroll: true,
    bodyPadding: 10,
    items: [{
        xtype: 'component',
        autoEl: 'h1',
        html: 'Hello, World!'
    }, {
        xtype: 'component',
        autoEl: 'p',
        html: 'This is a simple hero unit,' +
            ' a simple jumbotron-style component for calling extra attention to ' +
            'featured content or information.'
    }, {
        xtype: 'component',
        autoEl:{
            tag: 'hr'
        }
    }],

});