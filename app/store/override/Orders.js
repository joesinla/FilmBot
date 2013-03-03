Ext.define('MyApp.store.override.Orders', {
    override: 'MyApp.store.Orders',
    
    constructor: function() {
        this.callParent(arguments);
        this.setProxy({
            type: 'syncstorage',
            id: 'Orders',
            owner: 'user',
            access: 'private'
    });
}
});