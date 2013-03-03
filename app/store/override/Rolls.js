Ext.define('MyApp.store.override.Rolls', {
    override: 'MyApp.store.Rolls',

     constructor: function() {
        this.callParent(arguments);
        this.setProxy({
            type: 'syncstorage',
            id: 'Rolls',
            owner: 'user',
            access: 'private'
        });
    }
   

});