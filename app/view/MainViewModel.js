Ext.define('MI.view.MainViewModel', {
  extend: 'Ext.app.ViewModel',
  requires: ['MI.model.Post'],


  stores: {
    posts: {
      model: 'MI.model.Post',
      autoLoad: true
    },


    navItems: {
      type: 'tree',
      root: {
        expanded: true,
        children: [{
          text: 'Vbox',
          className: 'MI.view.Vbox',
          leaf: true
        }, {
          text: 'Hbox',
          className: 'MI.view.Hbox',
          leaf: true
        }, {
          text: 'Fit',
          className: 'MI.view.Fit',
          leaf: true
        }, {
          text: 'Accordion',
          className: 'MI.view.Accordion',
          leaf: true
        },{
          text: 'Posts-Grid',
          iconCls: 'fa fa-comments',
          className: 'MI.view.posts.PostPanel',
          leaf: true
        }, {
          text: 'Forms',
          className: 'MI.view.forms.MainForm',
          leaf: true
        },{
          text: 'კონვერტაცია',
          className: 'MI.view.forms.Currency',
          leaf: true
        },{
          text: 'რეგისტრაცია',
          className: 'MI.view.registration.Customers',
          leaf: true
        },{
          text: 'Topics',
          className: 'MI.view.paging.Topics',
          leaf: true
        }]
      }
    }
  }
})
