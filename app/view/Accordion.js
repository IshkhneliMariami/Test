Ext.define('MI.view.Accordion', {
    extend: "Ext.panel.Panel",
    layout: 'border',
    defaults: {
        bodyPadding: 10,
    },
    items: [{
        region: 'center',
        flex: 2,
        bodyPadding: 10,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaults: {
            margin: '0 0 10 0',
            bodyPadding: 10
        },
        items: [{
            xtype: 'panel',
            bodyStyle: 'background-color: #fff1cf',
            bodyPadding: 10,
            html: 'A simple warning alert!'
        }, {
            flex: 2,
            bodyStyle: 'background-color: lightgray',
            items: [{
                xtype: 'component',
                style: 'font-size: 50px',
                autoEl: 'h1',
                html: 'Hello, World!'
            }, {
                xtype: 'component',
                autoEl: 'p',
                html: 'This is a wider card with supporting text below as \n' +
                    ' a natural lead-in to additional content. This content is a little bit longer '
            }, {
                xtype: 'component',
                autoEl: 'hr'
            }, {
                xtype: 'component',
                autoEl: 'p',
                html: 'This is a wider card with supporting text below as \n' +
                    ' a natural lead-in to additional content. This content is a little bit longer ',
                flex: 1
            }]
        }, {
            xtype: 'container',
            flex: 1,
            margin: 0,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            defaults: {
                flex: 1,
                bodyPadding: 10
            },
            items: [{
                margin: '0 10 0 0',
                items: [{
                    xtype: 'component',
                    autoEl: 'h1',
                    html: 'Special title treatment'
                }, {
                    xtype: 'component',
                    autoEl: 'p',
                    html: 'This is a wider card with supporting text below '

                }, {
                    xtype: 'button',
                    scale: 'large',
                    html: 'Go somwhere',

                }]

            }, {
                items: [{
                    xtype: 'component',
                    autoEl: 'h1',
                    html: 'Special title treatment'
                }, {
                    xtype: 'component',
                    autoEl: 'p',
                    html: 'This is a wider card with supporting text below '

                }, {
                    xtype: 'button',
                    scale: 'large',
                    html: 'Go somwhere',

                }]

            }]
        }]
    }, {
        region: 'east',
        flex: 1,
        layout: 'accordion',
        items: [{
            title: 'Group 1',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'component',
                autoEl: 'h1',
                html: 'Card Title 1'
            }, {
                xtype: 'component',
                autoEl: 'p',
                html: 'This is a wider card with supporting text below as \n' +
                    ' a natural lead-in to additional content. This content is a little bit longer '
            }, {
                xtype: 'component',
                autoEl: 'p',
                html: 'This is a wider card with supporting text below as \n' +
                    ' a natural lead-in to additional content. This content is a little bit longer ',
                flex: 1
            }, {
                xtype: 'component',
                margin: '0 0 10 0',
                autoEl: {
                    tag: 'a',
                    href: 'https://softgen.ge',
                    target: '_blank',
                    html: 'Card Link'
                }
            }]
        }, {
            title: 'Group 2',
            html: `
            <h1>Card Title 2</h1>
            <p>This is a wider card with supporting text below as 
            a natural lead-in to additional content. This content is a little bit longer.</p>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content.
             This content is a little bit longer.</p>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content.
             This content is a little bit longer.</p>
       `,
        }, {
            title: 'Group 3',
            html: `
            <h1>Card Title 3</h1>
            <p>This is a wider card with supporting text below as 
            a natural lead-in to additional content. This content is a little bit longer.</p>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content.
             This content is a little bit longer.</p>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content.
             This content is a little bit longer.</p>
       `,
        }, {
            title: 'Group 4',
            html: `
            <h1>Card Title 4</h1>
            <p>This is a wider card with supporting text below as 
            a natural lead-in to additional content. This content is a little bit longer.</p>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content.
             This content is a little bit longer.</p>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content.
             This content is a little bit longer.</p>
       `,
        }]
    }
    ]
})