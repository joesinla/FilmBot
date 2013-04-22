Ext.define('MyApp.store.override.Windows', {
    override: 'MyApp.store.Windows',

    constructor: function() {
        this.callParent(arguments);
        this.setProxy({
            type: 'syncstorage',
            id: 'Windows',
            owner: 'user',
            access: 'private'
    });
    }
});