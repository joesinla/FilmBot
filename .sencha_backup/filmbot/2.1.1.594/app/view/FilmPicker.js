/*
 * File: app/view/FilmPicker.js
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

Ext.define('MyApp.view.FilmPicker', {
    extend: 'Ext.picker.Picker',
    alias: 'widget.FilmPicker',

    config: {
        id: 'FilmPicker',
        hideOnMaskTap: true,
        slots: [
            {
                xtype: 'pickerslot',
                id: 'MnfSlot',
                itemId: 'mypickerslot',
                useComponents: false,
                data: [
                    
                ],
                name: 'mnfSlot',
                title: 'mnfSlot'
            },
            {
                xtype: 'pickerslot',
                id: 'TypeSlot',
                data: [
                    
                ],
                name: 'typeSlot',
                title: 'typeSlot'
            },
            {
                xtype: 'pickerslot',
                id: 'ShadeSlot',
                data: [
                    
                ],
                name: 'shadeSlot',
                title: 'shadeSlot'
            }
        ],
        listeners: [
            {
                fn: 'onFilmPickerInitialize',
                event: 'initialize'
            },
            {
                fn: 'onFilmPickerChange',
                event: 'change'
            }
        ]
    },

    onFilmPickerInitialize: function(component, options) {
        /*
        var slot = this.down('#MnfSlot');
        var el = slot.element;

        var onDragend = function(x) {
        component.fireEvent('dragend');
        };

        el.addListener('dragend', onDragend);
        */
    },

    onFilmPickerChange: function(picker, value, options) {
        //console.log('picker change');
    }

});