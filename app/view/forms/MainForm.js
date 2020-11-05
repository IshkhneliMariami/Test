Ext.define('MI.view.forms.MainForm', {
    extend: 'Ext.panel.Panel',
    controller: {
        search: function () {
            const form = this.lookup('form');
            if (!form.isValid()) {
                Ext.Msg.alert('შეცდომა', 'ფორმა არ არის ვალიდური');
            }
        }
    },
    items: [{
        xtype: 'form',
        border: false,
        reference: 'form',
        bodyPadding: 20,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        defaults: {
            margin: 5,
            flex: 1

        },
        fieldDefaults: {
            anchor: '100%',
            labelAlign: 'top',
            msgTarget: 'side'
        },
        items: [{
            xtype: 'fieldset',
            border: false,
            items: [{
                xtype: 'textfield',
                name: 'title',
                fieldLabel: 'სათაური',
                value: 'სათაური'
            }, {
                xtype: 'textfield',
                name: 'username',
                fieldLabel: 'მომხმარებელი',
            }, {
                // xtype: 'numberfield',
                // xtype: 'datefield',
                xtype: 'fieldcontainer',
                fieldLabel: 'დაბადების თარიღი',
                defaultType: 'numberfield',
                layout: 'hbox',
                defaults: {
                    flex: 1,
                    margin: '0 5 0 0'
                },
                items: [{
                    name: 'Day',
                    validator: function (v) {
                        return v > 31 ? 'იუთითეთ 31-ზე ნაკლები რიცხვი' : true
                    }
                }, {
                    name: 'Month'
                }, {
                    name: 'Year',
                    margin: 0
                }]
            }]
        }, {
            xtype: 'fieldset',
            border: false,
            items: [{
                xtype: 'textfield',
                name: 'title',
                fieldLabel: 'სათაური',
                emptyText: 'Title ...',
                allowBlank: false,
                regex: /^[a-zA-Zა-ჰ0-9 ]+$/

            }, {
                xtype: 'textfield',
                name: 'email',
                fieldLabel: 'ელ ფოსტა',
                allowBlank: false,
                vtype: 'email'
            }, {
                xtype: 'numberfield',
                name: 'age',
                fieldLabel: 'ასაკი',
                minValue: 18,
                maxValue: 65
            }]
        }, {
            bodyPadding: 10,
            border: false,
            items: [{
                xtype: 'fieldcontainer',
                fieldLabel: 'სქესი',
                items: [{
                    xtype: 'radiofield',
                    name: 'gender',
                    value: 'female',
                    boxLabel: 'მდედრობითი',
                    inputValue: 'female'

                }, {
                    xtype: 'radiofield',
                    name: 'gender',
                    value: 'male',
                    boxLabel: 'მამრობითი'

                }]
            }, {
                xtype: 'checkbox',
                fieldLabel: 'check',
                name: 'active',
                boxLabel: 'active',
                checked: true
            }, {
                xtype: 'checkbox',
                // fieldLabel: 'check',
                name: 'active',
                boxLabel: 'active'
            }]
        }],
        buttons: [{
            text: 'search',
            handler: 'search'
        }]
    }],


})