Ext.define('MI.view.MainController',{
    extend: 'Ext.app.ViewController',

    selectionChange: function(view,record){
        const className = record.get("className");
        const title = record.get("text");
        const tabPanel = this.lookup("mainTabPanel");
        let tab = this.lookup(className);
        if(!tab){
            tab = Ext.create(className,{
                reference: className,
                closable: true,
                title: title
            })
            tabPanel.add(tab);
        }
        tabPanel.setActiveTab(tab);
    }



});