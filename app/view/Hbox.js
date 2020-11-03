Ext.define('MI.view.Hbox', {
    extend: "Ext.panel.Panel",
    border: false,
    layout: {
        type: 'hbox',
        align: 'stretch',
    },
    defaults: {
        frame: true,
        bodyPadding: 10,
        padding: 10,
        flex: 1,
    },
    items: [{
        title: 'Panel1',
        html: `
            <h1>Card Title 1</h1>
            <p>This is a wider card with supporting text below as 
            a natural lead-in to additional content. This content is a little bit longer.</p>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content.
             This content is a little bit longer.</p>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content.
             This content is a little bit longer.</p>
       `,
        bbar: {
            xtype: 'container',
            padding:10,
            style: 'background-color:lightgray',
            html: 'Last updated 3 mins ago'
        }
    }, {
        title: 'Panel2',
        html: `
            <h1>Card Title 2</h1>
            <p>This is a wider card with supporting text below as 
            a natural lead-in to additional content. This content is a little bit longer.</p>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content.
             This content is a little bit longer.</p>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content.
             This content is a little bit longer.</p>
       `,
        bbar: {
            xtype: 'container',
            padding:10,
            style: 'background-color:lightgray',
            html: 'Last updated 3 mins ago'
        }
    }, {
        title: 'Panel3',
        html: `
            <h1>Card Title 3</h1>
            <p>This is a wider card with supporting text below as 
            a natural lead-in to additional content. This content is a little bit longer.</p>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content.
             This content is a little bit longer.</p>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content.
             This content is a little bit longer.</p>
       `,
        bbar: {
            xtype: 'container',
            padding:10,
            style: 'background-color:lightgray',
            html: 'Last updated 3 mins ago'
        }
    }]
})
