jQuery.sap.declare("hcm.myteamcalendar.HCM_TEAM_CALExtension.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "hcm.myteamcalendar",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/HCM_TEAM_CAL"
		// we use a URL relative to our own component
		// extension application is deployed with customer namespace
});

this.hcm.myteamcalendar.Component.extend("hcm.myteamcalendar.HCM_TEAM_CALExtension.Component", {
	metadata: {
		version: "1.0.0"
	},
	init: function(){
		//This will add a class to the whole app. This class will be used to add custom colors. 
		this.getRootControl().addStyleClass("customLegendColors");
		
		//Load the CSS file. Manifets.json is somehow not loading the CSS file. Workaround
		jQuery.sap.includeStyleSheet("css/custom.css","id");
	}
});