Ext.define('MI.view.forms.FormController', {
    extend: 'Ext.app.ViewController',

    reset: function () {
        const form = this.lookup('form');
        form.getForm().reset();
        form.getForm().setValues({
            currency: this.getViewModel().get('currValue')
        })
    },

    convert: function () {
        const form = this.lookup('form');
        if (!form.isValid()) {
            Ext.Msg.alert('შეცდომა', 'ფორმა არ არის ვალიდური');
        } else {
            const values = form.getForm().getValues();
            values.issuableAmount = values.receivableAmount * values.currency;
            this.getViewModel().set('initValue', values.issuableAmount);
            const record = Ext.create('MI.model.ExchangeOperation', values);
            const store = this.getViewModel().getStore('exchangeOperations');
            store.add(record);
        }


    },
    damaged: function () {
        const currency = this.lookup('currency');
        const curr = currency.getValue();
        const damaged = curr * 0.9;
        this.getViewModel().set('currency', damaged);
    },

    delete: function (grid, rowIndex, columnIndex){
        const store = this.getViewModel().getStore('exchangeOperations');
        store.removeAt(rowIndex);
    }

});