Ext.define("MyApp.view.Main_View", {
    extend: 'Ext.ux.slidenavigation.View',
    
    requires: [
        'Ext.Container',
        'Ext.MessageBox',
        'Ext.Panel',
        'Ext.Toolbar',
        'Ext.event.publisher.Dom'
    ],
    
    config: {
        fullscreen: true,
         
        /**
         *  Any component within the container with an 'x-toolbar' class
         *  will be draggable.  To disable draggin all together, set this
         *  to false.
         */
        slideSelector: 'x-toolbar',
        
        /**
         *  Time in milliseconds to animate the closing of the container
         *  after an item has been clicked on in the list.
         */
        selectSlideDuration: 200,

        /**
         *  Enable content masking when container is open.
         *
         *  @since 0.2.0
         */
        itemMask: true,

        /**
         *  Define the default slide button config.  Any item that has
         *  a `slideButton` value that is either `true` or a button config
         *  will use these values at the default.
         */
        slideButtonDefaults: {
            selector: 'toolbar'
        },
         
        /**
         *  This allows us to configure how the actual list container
         *  looks.  Here we've added a custom search field and have
         *  modified the width.
         */
        list: {
            maxDrag: 400,
            width: 200,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light',                    
                title: {
                    title: 'FilmBot',
                    centered: false,
                    width: 200,
                    left: 0
                },
                
                /**
                 *  Here's an example of how to add a different type of
                 *  component into the toolbar of the list.
                 */
                /*
                items: [{
                    docked: 'top',
                    xtype: 'searchfield',
                    placeHolder: 'search',
                    width: 180
                }]
                */
            }]
            
        },
        
        /**
         *  Example of how to re-order the groups.
         */
        //groups: {
        //    'Group 1': 1,
        //    'Group 2': 3,
        //    'Group 3': 2
        //},
        
        /**
         *  These are the default values to apply to the items within the
         *  container.
         */
        defaults: {
            style: 'background: #fff',
            xtype: 'container'
        },
        	//start of menu items
        items: [
		{
            title: 'Home',
            group: 'Group 1',

            // Enable the slide button using the defaults defined above in
            // `slideButtonDefaults`.
            slideButton: true,
            items: [{
                xtype: 'toolbar',
                title: '',
                docked: 'top'
            },{
                xtype: 'home',
             // Mask this item when the container is opened
                maskOnOpen: true
            }]
			},
		{
            title: 'Inventory',
            group: 'Group 1',

            // Enable the slide button using the defaults defined above in
            // `slideButtonDefaults`.
            slideButton: true,
            items: [{
                xtype: 'toolbar',
                title: 'Inventory',
                docked: 'top'
            },{
                xtype: 'inventory',
             // Mask this item when the container is opened
                maskOnOpen: true
            }]
			},
			//start orders item
		{
            title: 'Orders',
            group: 'Group 1',

            // Enable the slide button using the defaults defined above in
            // `slideButtonDefaults`.
            slideButton: true,
            items: [{
                xtype: 'toolbar',
                title: 'Orders',
                docked: 'top'
            },{
                xtype: 'orders',
                // Mask this item when the container is opened
                maskOnOpen: true
            }]
		},//end orders item
		//start Settings item
	{
        title: 'Settings',
        group: 'Group 1',

        // Enable the slide button using the defaults defined above in
        // `slideButtonDefaults`.
        slideButton: true,
        items: [{
            xtype: 'toolbar',
            title: 'Settings',
            docked: 'top'
        },{
            xtype: 'settings',
            // Mask this item when the container is opened
            maskOnOpen: true
        }]
	}//end orders item
		
	]}//end config
});//end of define