// Downloads button script for Firefox 60+ by Aris
//
// left-click on custom downloads button: opens downloads library
// middle-click on custom downloads button: opens 'about:downloads' in a new tab
// right-click on custom downloads button: no special function

(function() {

try {
  Components.utils.import("resource:///modules/CustomizableUI.jsm");
  ChromeUtils.importESModule("resource:///modules/CustomizableUI.sys.mjs");
  var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);
  
  var button_label = "Go";

CustomizableUI.createWidget({
	id: "go-button", // button id
	defaultArea: CustomizableUI.AREA_NAVBAR,
	removable: true,
	label: button_label, // button title
	tooltiptext: button_label, // tooltip title
	onClick: function(event) {
	  
	  var cancelQuit   = Components.classes["@mozilla.org/supports-PRBool;1"].createInstance(Components.interfaces.nsISupportsPRBool);
	  var observerSvc  = Components.classes["@mozilla.org/observer-service;1"].getService(Components.interfaces.nsIObserverService);
	  
	  if(event.button=='0') { // left/middle-click - restart
		gURLBar.handleCommand(event);
	  }
	},
	onCreated: function(button) {
	  return button;
	}
		
  });
  
} catch (e) {
	Components.utils.reportError(e);
};

})();