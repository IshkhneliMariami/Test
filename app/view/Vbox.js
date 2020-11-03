Ext.define('MI.view.Vbox', {
    extend: "Ext.panel.Panel",
    border: false,
    layout: {
        type: 'vbox',
        align: 'stretch',
    },
    defaults: {
        bodyPadding: 10,
        padding: 10,
        flex: 1
    },
    items: [{
        xtype: 'panel',
        title: 'Featured',
        html: `
        <h1>Special Title Treatment</h1>
        <p>With supporting text below as a natural lead-in to additional content.</p>
        `,
        flex: 2,
        items: [{
            xtype: 'button',
            scale: 'large',
            text: 'Go somewhere',
        }]
    }, {
        xtype: 'panel',
        title: 'Quote 1',
        html: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        `
    }, {
        xtype: 'panel',
        title: 'Quote 2',
        html: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        `
    }]

})
