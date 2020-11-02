Ext.define('MI.view.posts.GridController',{
    extend: 'Ext.app.ViewController',

    addPost: function(){
      Ext.create('MI.view.posts.EditPostWindow',{
          autoShow: true,

      })
    },

    editPost: function(view, record) {
        Ext.create('MI.view.posts.EditPostWindow', {
            autoShow: true,

        });

    },
    deletePost: function() {
        const grid = this.getView();
        const selected = grid.getSelectionModel().getSelection()[0];
        if(!selected) return ;

        grid.setLoading('მიმდინარეობს წაშლა...');

        selected.erase({
            success: function() {
                Ext.Msg.alert('სტატუსი', 'წარმატებით დასრულდა');
            },
            failure: function(record, operation) {
                Ext.Msg.alert('შეცდომა', operation.error.response.statusText);
                grid.getStore().reload();
            },
            callback: function() {
                grid.setLoading(false);
            }
        });
    },


})