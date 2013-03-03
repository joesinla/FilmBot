/*
 * File: app/controller/MyController.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.MyController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "button[action=addRecord]": {
                tap: 'addRecord'
            },
            "button[action=refreshList]": {
                tap: 'refreshStore'
            }
        }
    },

    addRecord: function(target) {
        var store = Ext.getStore("MyStore");

        Ext.Msg.prompt(
        'Add Record',
        'Enter some Text',
        function (buttonId, value) {
            if(value && value.length > 0) {
                store.add({label: value});
                store.sync();
            }
        },
        null,
        false,
        null,
        { autoCapitalize : true, placeHolder : 'Save something' }
        );


    },

    refreshStore: function(target) {
        var store = Ext.getStore("MyStore");

        store.sync(function(){ console.log("sync complete");
        });
    }

});