Ext.define('MyApp.store.override.Windows_has_Rolls', {
    override: 'MyApp.store.Windows_has_Rolls',

     constructor: function() {
        this.callParent(arguments);
        this.setProxy({
            type: 'syncstorage',
            id: 'Window_has_Rolls',
            owner: 'user',
            access: 'private'
    });
    }
   
    
});