Ext.define('MI.view.registration.CustomerController', {
    extend: 'Ext.app.ViewController',

    changeRegion: function () {
        const values = this.lookup('form').getValues();
        const store = this.getViewModel().getStore('districts');
        store.clearFilter();
        store.filterBy(function (rec) {
            return rec.get('region_id') === values.region;
        })
    },

    save: function () {
        const form = this.lookup('form');
        if (!form.isValid()) {
            Ext.Msg.alert('შეცდომა', 'ფორმა არ არის ვალიდური');
        } else {
            const values = form.getForm().getValues();
            const store = this.getViewModel().getStore('customers');
            const newCustomer = Ext.create('MI.model.Customer', values);
            store.removeAll();
            store.sync();
            newCustomer.save({
                success: function () {
                    Ext.Msg.alert('სტატუსი', 'მონაცემები წარმატებით შეინახა');
                    store.load();
                },
                failure: function () {
                    Ext.Msg.alert('სტატუსი', 'შეცდომა');

                }
            })
        }
    }
})