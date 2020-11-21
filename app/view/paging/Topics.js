Ext.define('MI.view.paging.Topics', {
    extend: 'Ext.grid.Panel',
    bind: '{topics}',
    controller: {
        xclass: 'MI.view.paging.TopicsController'
    },
    viewModel: {
        xclass: 'MI.view.paging.TopicsViewModel'
    },

    autoLoad: true,
    viewConfig: {
        stripeRows: false
    },

    columns: [{
        xtype: 'templatecolumn',
        text: 'Topic',
        dataIndex: 'title',
        tpl: `<a href="http://sencha.com/forum/showthread.php?t={threadid}" target="_blank">{title}</a>`,
        flex: 2
    }, {
        text: 'Replies',
        dataIndex: 'replycount',
        flex: 1,
    }, {
        xtype: 'templatecolumn',
        text: 'Last Post',
        dataIndex: 'lastpost',
        flex: 1,
        tpl: '{lastpost:date("H:i d.m.Y")} By <strong>{lastposter}</strong>'
    }],
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl: Ext.create('Ext.XTemplate',
            '{excerpt:this.addBreaks}', {
                addBreaks: function (v) {
                    return v.replace(/\n/g, '<br/>');
                }
            }
        )

    }],
    bbar: {
        xtype: 'pagingtoolbar',
    }
});
