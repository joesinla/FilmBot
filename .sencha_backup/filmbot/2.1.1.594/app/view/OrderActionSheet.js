/*
 * File: app/view/OrderActionSheet.js
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

Ext.define('MyApp.view.OrderActionSheet', {
    extend: 'Ext.ActionSheet',
    alias: 'widget.orderAction',

    config: {
        hidden: true,
        id: 'ActionPanel',
        autoDestroy: false,
        hideOnMaskTap: false,
        items: [
            {
                xtype: 'button',
                id: 'ActionDelete',
                ui: 'decline',
                text: 'Delete'
            },
            {
                xtype: 'button',
                id: 'ActionEmail',
                ui: 'action',
                text: 'Email'
            },
            {
                xtype: 'button',
                id: 'ActionSave',
                itemId: 'ActionSave',
                ui: 'action',
                text: 'Save'
            },
            {
                xtype: 'button',
                id: 'CancelButton',
                text: 'Cancel'
            }
        ],
        listeners: [
            {
                fn: 'onActionCancelButtonTap',
                event: 'tap',
                delegate: '#CancelButton'
            }
        ]
    },

    onActionCancelButtonTap: function(button, e, options) {
        button.up('#ActionPanel').hide();
    }

});