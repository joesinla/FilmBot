Ext.define('MyApp.store.override.Totals', {
    override: 'MyApp.store.Totals',

     constructor: function() {
        this.callParent(arguments);
        this.setProxy({
            type: 'syncstorage',
            id: 'Totals',
            owner: 'user',
            access: 'private'
    });
    }
   
    
});