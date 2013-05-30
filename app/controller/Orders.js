/*
 * File: app/controller/Orders.js
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

Ext.define('MyApp.controller.Orders', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            orders: '#orders',
            enterOrder: {
                forceCreate: true,
                selector: '#enterOrder'
            },
            TabPanel: '#newOrder',
            windowForm: '#AddWindowPanel',
            ActionPanel: {
                autoCreate: true,
                selector: '#ActionPanel',
                xtype: 'orderaction'
            },
            MnfSlot: '#MnfSlot',
            TypeSlot: '#TypeSlot',
            ShadeSlot: '#ShadeSlot',
            FilmPicker: {
                autoCreate: true,
                selector: '#FilmPicker',
                xtype: 'filmpicker'
            },
            CustomerForm: '#CustomerPanel',
            WindowList: '#WindowList',
            OrderList: '#OrderList'
        },

        control: {
            "#addOrder": {
                tap: 'onAddOrderButtonTap'
            },
            "#closeOrder": {
                tap: 'onCloseOrderButtonTap'
            },
            "#enterOrder": {
                tap: 'onEnterButtonTap'
            },
            "#ActionDelete": {
                tap: 'onActionDeleteButtonTap'
            },
            "#ActionEmail": {
                tap: 'onActionEmailButtonTap'
            },
            "textfield": {
                tap: 'onTextfieldTap'
            },
            "#MnfSlot": {
                slotpick: 'onMnfPickerslotSlotpick'
            },
            "#TypeSlot": {
                slotpick: 'onTypePickerslotSlotpick'
            },
            "#FilmPicker": {
                hide: 'onFilmPickerHide'
            },
            "#actionBttn": {
                tap: 'onActionButtonTap'
            },
            "#ActionSave": {
                tap: 'onActionSaveButtonTap'
            },
            "#OrderList": {
                select: 'onOrderListSelect',
                disclose: 'onOrderListDisclose'
            },
            "#WindowList": {
                disclose: 'onWindowListDisclose'
            },
            "#ActiveBttn": {
                tap: 'onActiveButtonTap'
            },
            "#StatusButtons": {
                toggle: 'onSegmentedbuttonToggle'
            }
        }
    },

    onAddOrderButtonTap: function(button, e, eOpts) {
        this.getOrders().animateActiveItem(1, {type:'slide',direction:'up'});

        var bttn = Ext.getCmp('addOrder');

        bttn.setIconCls('arrow_down');
        bttn.setItemId('closeOrder');
        bttn.setId('closeOrder');

        bttn.observableId = '#closeOrder';

        console.log(this);

        this.clearOrder();

        this.newOrder();
    },

    onCloseOrderButtonTap: function(button, e, eOpts) {
        this.getOrders().animateActiveItem(0, {type:'slide',direction:'down'});

        var bttn = Ext.getCmp('addOrder');

        bttn.setIconCls('add');
        bttn.setItemId('addOrder');
        bttn.setId('addOrder');

        bttn.observableId = '#addOrder';

        this.clearOrder();
    },

    onEnterButtonTap: function(button, e, eOpts) {
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Calculating...'
        });

        new Ext.util.DelayedTask(function () {
            Ext.Viewport.setMasked(false);    
        }).delay(450);


        var form = this.getWindowForm();
        var values = form.getValues();


        var calc = MyApp.app.getController('Calc').calc(values.Type, values.Shade, values.Panes,values.Width,values.Height);

        var windowModel = Ext.create('MyApp.model.Window',{
            Panes: values.Panes,
            Width: values.Width,
            Height: values.Height,
            Manufacturer: values.Manufacturer,
            Type: values.Type,
            Shade: values.Shade,
            Location: values.Location,
            Direction: values.Direction,
            RollSize: calc[0],
            LinearFeet: calc[1],
            Cut: calc[5]

        });


        var tempStore = Ext.getStore('temp').add(windowModel);


        /*
        //reset form
        var z = form.getInnerItems();

        Ext.each(z[0].getInnerItems(), function(item){
            var a = item.getInnerItems();
            Ext.each(a, function(item){
                item.reset();
            });
        });


        //reset window set details

        Ext.each(z[1].getInnerItems(), function(item){

            if(item.id != "FilmSelect"){
                //console.log(item.id);
                item.reset();
            }else{
                item.setPlaceHolder('');
            }
        });

        */
    },

    onActionDeleteButtonTap: function(button, e, eOpts) {
        Ext.Msg.confirm(  
        "Confirm", 
        "Do you wish to delete Order " + this.getCustomerForm().getRecord().getData().Number + " ?", 
        function(button){
            if (button == 'yes') {
                this.deleteOrder();
            } else {
                return false;
            }
        });


    },

    onActionEmailButtonTap: function(button, e, eOpts) {
        console.log('email tap');

        var tempStore = Ext.getStore('temp');

        var records = tempStore.getData().items;

        var tbl = '<table width="316" border="1">'+
        '<tr>'+
        '<th width="99" scope="col">header</th>'+
        '<th width="9" scope="col">1</th>'+
        '<th width="9" scope="col">2</th>'+
        '<th width="9" scope="col">3</th>'+
        '<th width="9" scope="col">4</th>'+
        '<th width="9" scope="col">5</th>'+
        '<th width="9" scope="col">6</th>'+
        '</tr>'+
        '<tr>'+
        '<td>1</td>'+
        '<td>2</td>'+
        '<td>3</td>'+
        '<td>4</td>'+
        '<td>5</td>'+
        '<td>6</td>'+
        '<td>7</td>'+
        '</tr>'+
        '</table>'+
        '</body>'+
        '</html>';





        window.open('mailto:joesinla@gmail.com?Subject=OnlineQuote&body=' + tbl);
    },

    onTextfieldTap: function(textfield) {
        var fPicker = this.getFilmPicker();

        /*
        var store = Ext.getStore('Rolls');

        var typesData = [];
        store.each(function(roll){
        typesData.push(roll.get('Manufacturer'));
        });

        var uniqueArray = typesData.filter(function(elem, pos) {
        return typesData.indexOf(elem) == pos;
        });

        var tData = [{text:"",value:""}];

        Ext.each(uniqueArray,function(elem){
        tData.push({"text":elem,"value":elem});
        });

        console.log(fPicker);

        this.getMnfSlot().setData(tData);
        */

        Ext.Viewport.add(fPicker);
        fPicker.show();
    },

    onMnfPickerslotSlotpick: function(pickerslot, value, node, eOpts) {
        /*
        var mnfSlot = this.getMnfSlot(),
        picker = this.getFilmPicker();

        var mnfValue = mnfSlot.getSelection()[0].getData().value;

        var store = Ext.getStore('Rolls');
        store.clearFilter();

        //store.load();
        store.filter('Manufacturer', mnfValue);

        var types = [];
        Ext.each(store.getData().items, function(obj){
            types.push(obj.getData().Type);
        });

        var uniqueArray = types.filter(function(elem, pos) {
            return types.indexOf(elem) == pos;
        });

        var tData = [{text:"",value:""}];
        Ext.each(uniqueArray,function(elem){
            tData.push({"text":elem,"value":elem});
        });

        picker.slots({
            xtype: 'pickerslot',
            id: 'TypeSlot',
            itemId: 'mypickerslot',
            scrollToTopOnRefresh: false,
            name: 'typeSlot',
            title: 'typeSlot',
            data: tData
        });

        */
    },

    onTypePickerslotSlotpick: function(pickerslot, value, node, eOpts) {
        /*
        var typeSlot = this.getTypeSlot();

        var typeValue = typeSlot.getSelection()[0].getData().value;

        var store = Ext.getStore('Rolls');
        store.filter('Type', typeValue);

        var shades = [];
        Ext.each(store.getData().items, function(obj){
        shades.push(obj.getData().Shade);
        });

        var uniqueArray = shades.filter(function(elem, pos) {
        return shades.indexOf(elem) == pos;
        });

        var tData = [{text:"",value:""}];
        Ext.each(uniqueArray,function(elem){
        tData.push({"text":elem,"value":elem});
        });

        this.getShadeSlot().setData(tData);

        */
    },

    onFilmPickerHide: function(component, eOpts) {
        /*
        this.getTypeSlot().setData([""]);
        this.getShadeSlot().setData([""]);

        var form = this.getWindowForm();

        var mnfValue = this.getMnfSlot().getSelection()[0].getData().value;
        var typeValue = this.getTypeSlot().getSelection()[0].getData().value;
        var shadeValue = this.getShadeSlot().getSelection()[0].getData().value;

        this.getTypeSlot().deselectAll();
        this.getShadeSlot().deselectAll();

        if(mnfValue && typeValue && shadeValue){
        form.setValues({Manufacturer : mnfValue});
        form.setValues({Type : typeValue});
        form.setValues({Shade : shadeValue});

        Ext.getCmp('FilmSelect').setPlaceHolder(typeValue + "  %" + shadeValue);

        //??
        Ext.getStore("Rolls").clearFilter();

    }

    */
    },

    onActionButtonTap: function(button, e, eOpts) {
        var actionSheet = this.getActionPanel();
        Ext.Viewport.add(actionSheet);
        actionSheet.show();
    },

    onActionSaveButtonTap: function(button, e, eOpts) {
        this.saveOrder();

        this.getActionPanel().hide();
    },

    onOrderListSelect: function(dataview, record, eOpts) {
        //animate panel
        this.getOrders().animateActiveItem(1, {type:'slide',direction:'up'});

        var bttn = Ext.getCmp('addOrder');

        bttn.setIconCls('arrow_down');
        bttn.setItemId('closeOrder');
        bttn.setId('closeOrder');

        bttn.observableId = '#closeOrder';


        this.loadOrder(record);

        this.getOrderList().deselectAll();
    },

    onWindowListDisclose: function(list, record, target, index, e, eOpts) {
        Ext.Msg.confirm(
        "Confirm", 
        "Do you wish to delete window?", 
        function(button){
            if (button == 'yes') {
                Ext.getStore('temp').remove(record);


            } else {
                return false;
            }
        });
    },

    onOrderListDisclose: function(list, record, target, index, e, eOpts) {
        var that = this;

        Ext.Msg.confirm(
        "Confirm", 
        "Do you wish to delete Order " + record.getData().Number + " ?", 
        function(button){
            if (button == 'yes') {
                that.deleteOrder(record);
            } else {
                return false;
            }
        });

    },

    onActiveButtonTap: function(button, e, eOpts) {
        console.log('active');
    },

    onSegmentedbuttonToggle: function(segmentedbutton, button, isPressed, eOpts) {
        this.getCustomerForm().getRecord().set('Status', button.getText());

        console.log('event');
    },

    saveOrder: function(order) {
        /*
        * Save Order and Windows
        *
        */ 


        var orderStore = Ext.getStore('Orders');
        var windowStore = Ext.getStore('Windows');
        var tempStore = Ext.getStore('temp');

        console.log('temp store', tempStore);

        var orderModel = this.getCustomerForm().getRecord();

        orderModel.set(this.getCustomerForm().getValues());


        if(orderModel.phantom === false){
            orderModel.set({Updated: Date.now()});
        }

        orderStore.add(orderModel);

        tempStore.each(function(r){
            r.set('orderNumber', orderModel.get('Number'));
            windowStore.add(r);
            console.log('inloop');
        });

        console.log('outloop');
        windowStore.sync();
        orderStore.sync();

        //this.getCustomerForm().setRecord(orderModel);

        //MyApp.app.getController('Inventory').reserveFilm(order);

        return;
    },

    deleteOrder: function(record) {
        //get stores..
        var windowStore = Ext.getStore('Windows');
        var orderStore = Ext.getStore('Orders');
        var tempstore = Ext.getStore('temp');


        //delete record 
        orderStore.remove(record);
        orderStore.sync();

        //load window store
        windowStore.each(function(r){
            if(r.get('orderNumber') === record.get('Number')){
                windowStore.remove(r);
            }
        });

        windowStore.sync();



        //reset all order forms
        this.getCustomerForm().reset();

        var x = this.getWindowForm().getInnerItems();

        Ext.each(x[0].getInnerItems(), function(item){
            var a = item.getInnerItems();
            Ext.each(a, function(item){
                item.reset();
            });
        });

        //reset window set details
        Ext.each(x[1].getInnerItems(), function(item){

            if(item.id != "FilmSelect"){
                item.reset();
            }else{
                item.setPlaceHolder('');
            }
        });


        this.getActionPanel().hide();
    },

    newOrder: function() {

        //new order #
        var orderNumber = Math.floor(Math.random()*90000) + 10000;

        var orderModel = Ext.create('MyApp.model.Order', {
            Number: orderNumber,
            Created: new Date(),
            Status: "Active" 
        });


        //create temp store for windows

        this.getCustomerForm().setRecord(orderModel);
    },

    clearOrder: function() {
        console.log('clear order');

        Ext.getStore('temp').removeAll();

        Ext.getStore('Windows').clearFilter();

        this.getCustomerForm().setRecord(null);

        this.getCustomerForm().reset();


    },

    loadOrder: function(record) {


        var orderStore = Ext.getStore('Orders');
        var windowStore = Ext.getStore('Windows');
        var tempStore = Ext.getStore('temp');

        var orderModel = orderStore.getById(record.getData().id);

        //load ordermodel into form
        this.getCustomerForm().setRecord(orderModel);

        //load window store
        windowStore.clearFilter();
        windowStore.filter('orderNumber', record.getData().Number);
        windowStore.load();



        //var windows = orderModel.windows();
        //fill temp store with windows
        tempStore.removeAll();

        windowStore.each(function(r){
            tempStore.add(r);
        });

        console.log('load temp store', tempStore);

        windowStore.clearFilter();
    }

});