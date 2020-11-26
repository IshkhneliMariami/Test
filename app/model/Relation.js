Ext.define('MI.model.Relation', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'firstName',
        type: 'string'
    }, {
        name: 'lastName',
        type: 'string'
    }, {
        name: 'id',
        type: 'integer'
    }, {
        name: 'type',
        type: 'integer',
        allowNull: true,
    }, {
        name: 'birthDate',
        type: 'date',
        dateFormat: 'C',
    }],
    validators: {
        type: 'presence',
        firstName: 'presence',
        lastName: 'presence',
    },
});
