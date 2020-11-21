Ext.application({
    name: 'MI',
    appFolder: 'app',
    requires: [
        'MI.view.Main'
    ],
    mainView: 'MI.view.Main',
});


const username = 'admin';
const password = 'admin';
const base64 = btoa(`${username}:${password}`);

Ext.Ajax.on({
    beforerequest: function (conn, options) {
        options.headers = options.headers || {};
        options.headers['Authorization'] = `Basic ${base64}`
    },
    requestexception: function (conn, response, options) {
        let errorMsg;
        try {
            const data = Ext.decode(response.responseText);
            errorMsg = data.message;
        } catch (e) {
            errorMsg = response.statusText;
        }
        Ext.Msg.alert('შეცდომა', `${response.status} ${errorMsg}`)
    }
})
