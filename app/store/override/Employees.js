Ext.define('MyApp.store.override.Employees', {
    override: 'MyApp.store.Employees',
    
    constructor: function() {
        this.callParent(arguments);
        this.setProxy({
            type: 'syncstorage',
            id: 'Employees',
            owner: 'user',
            access: 'private'
    });
    }
    
});