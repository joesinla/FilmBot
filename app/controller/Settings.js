/*
 * File: app/controller/Settings.js
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

Ext.define('MyApp.controller.Settings', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            tabbar: '#SettingsTabBar'
        },

        control: {
            "#SettingsTabBar": {
                activeitemchange: 'onTabpanelActiveItemChange'
            }
        }
    },

    onTabpanelActiveItemChange: function(container, value, oldValue, eOpts) {
        var x = this.getTabbar().getActiveItem();
        var button = x;
        if(x.id == 'SettingsAction'){
            var settings = button.settingsPanel;
            if (!settings) {
                settings = button.settingsPanel = Ext.widget('ordersettings');
                settings.showBy(button);
            }else{
                settings.hide();
            }
        }


    }

});