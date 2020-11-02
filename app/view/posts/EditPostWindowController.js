Ext.define('MI.view.posts.EditPostWindowController', {
    extend: 'Ext.app.ViewController',

    formAfterRender: function () {
        const form = this.lookup('form');
        let Post = this.getView().getPost();
        if (!Post) {
            Post = Ext.create('MI.model.Post');
        }
        form.loadRecord(Post);
    },

    savePost: function () {
        const me = this;
        const form = this.lookup('form');
        if (!form.isValid()) return;
        form.setLoading('მიმდინარეობს შენახვა...');
        const Post = form.getForm().getRecord();
        form.updateRecord(Post);
        Post.save({
            success: function () {
                Ext.Msg.alert('სტატუსი', 'წარმატებით დასრულდა');
                me.getView().close();
            },
            failure: function () {
                Ext.Msg.alert('შეცდომა', 'error');
                form.setLoading(false);
            }
        })
    }
})

