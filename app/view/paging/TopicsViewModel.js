Ext.define('MI.view.paging.TopicsViewModel', {
    extend: 'Ext.app.ViewModel',
    requires: ['MI.model.Topic'],

    stores: {
        topics: {
            model: 'MI.model.Topic',
        }
    },
    data: {
        expanded: true
    }
})