/*
 * File: app/controller/Home.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.Home', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            homeDataView: '#HomeDataView'
        }
    },

    loadStore: function(store) {
        var records = [];

        if(store.getData().length !== 0){

            store.sort('Created', 'ASC');

            for(var i = 0; i<4; i++){
                if(store.getData().items[i]){
                    records.push(store.getData().items[i]);
                }
            }
        }

        var store2 = Ext.create('Ext.data.Store');

        store2.add(records);

        var hdv = this.getHomeDataView();

        if(hdv){
            hdv.setStore(store2);
        }
    }

});