/*
 * File: app.js
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

//@require @packageOverrides
Ext.Loader.setConfig({
    paths: {
        'Ext.ux': './ux',
        'Ext.io': './io'
    }
});

Ext.application({

    requires: [
        'Ext.ux.Fileup'
    ],
    io: {
        appId: '3410023f-0a0f-40e1-be94-9492e9354e37',
        url: 'https://api.sencha.io'
    },
    models: [
        'Roll',
        'Order',
        'Window',
        'Window_has_Roll',
        'Employee'
    ],
    stores: [
        'Orders',
        'Rolls',
        'temp',
        'Windows',
        'Employees'
    ],
    views: [
        'Main_View',
        'FilmPicker',
        'Inventory',
        'Stats',
        'Settings',
        'Home',
        'Orders',
        'ioLoginbutton',
        'Customers',
        'Employees',
        'MyContainer5'
    ],
    controllers: [
        'Orders',
        'Inventory',
        'Navigation',
        'Calc',
        'Ext.io.Controller',
        'ioControl',
        'Home',
        'Employee'
    ],
    name: 'MyApp',

    launch: function() {
        Ext.Viewport.add( Ext.create('MyApp.view.Main_View'));
    }

});
