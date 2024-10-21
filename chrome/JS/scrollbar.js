(function () {
	var css = `
		scrollbar {
  -moz-appearance: none !important;
  -moz-binding: url("chrome://global/content/bindings/scrollbar.xml#scrollbar");
  cursor: default !important;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdib3g9IjAgMCAyIDIiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9Ii1tb3otZGlhbG9nIi8+PHJlY3QgZmlsbD0iVGhyZWVESGlnaGxpZ2h0IiB4PSIxIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iLW1vei1kaWFsb2ciLz48cmVjdCBmaWxsPSJUaHJlZURIaWdobGlnaHQiIHg9IjAiIHk9IjEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48L3N2Zz4=") repeat !important;
}

@media all and (-moz-overlay-scrollbars) {
  scrollbar[root="true"] {
    position: relative !important;
    z-index: 2147483647; /* largest positive value of a signed 32-bit integer */
  }

  scrollbar:not([active="true"]),
  scrollbar[disabled="true"] {
    visibility: hidden;
  }
}

scrollbar[orient="vertical"] 
{
   -moz-appearance: none !important;
   min-width: 16px !important;
   max-width: 16px !important;
}
scrollbar[orient="horizontal"] 
{
   -moz-appearance: none !important;
   min-height: 16px !important;
   max-height: 16px !important;
}
/* ::::: borders for thumb and buttons ::::: */

thumb {
	-moz-appearance: none !important;
	position: relative !important;
	background-color: -moz-dialog !important;
	min-height: 16px !important;
        min-width: 16px !important;
  	pointer-events: auto;
	border-top: 1px solid -moz-dialog !important;
	border-left: 1px solid -moz-dialog !important;
	border-right: 1px solid rgb(0, 0, 0) !important;
	border-bottom: 1px solid rgb(0, 0, 0) !important;
	box-shadow: 1px 1px 0 ThreeDHighlight inset, -1px -1px 0 ThreeDShadow inset !important;
}
scrollbarbutton {
	-moz-appearance: none !important;
	background-color: -moz-dialog !important;
	border-top: 1px solid -moz-dialog !important;
	border-left: 1px solid -moz-dialog !important;
	border-right: 1px solid rgb(0, 0, 0) !important;
	border-bottom: 1px solid rgb(0, 0, 0) !important;
	box-shadow: 1px 1px 0 ThreeDHighlight inset, -1px -1px 0 ThreeDShadow inset !important;
  }

scrollbarbutton:not(.disabled):hover:active {
	background-color: -moz-dialog !important;
	border: 1px solid ThreeDShadow !important;
	box-shadow: none !important;
}

/* ::::: slider - a thumb is inside  ::::: */
slider {
  -moz-appearance: none !important;
  background-color: transparent;
}

slider[orient="vertical"] {
  -moz-appearance: none;
}

/* ::::: thumb (horizontal) ::::: */

thumb[orient="vertical"] {
  -moz-appearance: none !important;
  max-width: 16px !important;
  min-height: 8px !important;
}

thumb[orient="horizontal"] {
  -moz-appearance: none !important;
  min-width: 8px;
}

/* ::::: scrollbar button ::::: */

/* ::::: square at the corner of two scrollbars ::::: */

scrollcorner { 
  -moz-appearance: none !important;
  -moz-binding: url(chrome://global/content/bindings/scrollbar.xml#scrollbar-base);
  width: 16px;
  cursor: default;
  background-color: -moz-dialog; !important;
}

/* ..... increment .... */

scrollbarbutton[type="increment"] {
  -moz-appearance: none !important;
  width: 16px !important;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4NCgk8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSI3IiB5PSI0IiB4PSI1IiBmaWxsPSJtZW51dGV4dCIvPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjUiIHk9IjUiIHg9IjYiIGZpbGw9Im1lbnV0ZXh0Ii8+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMyIgeT0iNiIgeD0iNyIgZmlsbD0ibWVudXRleHQiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB5PSI3IiB4PSI4IiBmaWxsPSJtZW51dGV4dCIvPg0KCQ0KCQ0KPC9zdmc+");
}

scrollbarbutton[type="increment"][disabled="true"] {
  -moz-appearance: none !important;
  width: 16px !important;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4NCgk8cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIHdpZHRoPSIxIiBoZWlnaHQ9IjciIHk9IjQiIHg9IjUiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIyIiBmaWxsPSJUaHJlZURIaWdobGlnaHQiIHg9IjYiIHk9IjEwIi8+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMiIgZmlsbD0iVGhyZWVESGlnaGxpZ2h0IiB4PSI3IiB5PSI5Ii8+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMiIgZmlsbD0iVGhyZWVESGlnaGxpZ2h0IiB4PSI4IiB5PSI4Ii8+PHJlY3Qgd2lkdGg9IjEiIGZpbGw9IlRocmVlREhpZ2hsaWdodCIgaGVpZ2h0PSIxIiB5PSI4IiB4PSI5Ii8+PHJlY3QgZmlsbD0iVGhyZWVEU2hhZG93IiB3aWR0aD0iMSIgaGVpZ2h0PSI1IiB5PSI1IiB4PSI2Ii8+PHJlY3QgZmlsbD0iVGhyZWVEU2hhZG93IiB3aWR0aD0iMSIgaGVpZ2h0PSIzIiB5PSI2IiB4PSI3Ii8+PHJlY3QgZmlsbD0iVGhyZWVEU2hhZG93IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB5PSI3IiB4PSI4Ii8+DQoJDQoJDQo8L3N2Zz4=")
}

scrollbar[orient="vertical"] > scrollbarbutton[type="increment"] {
  -moz-appearance: none !important;
  height: 16px !important;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTUiIHdpZHRoPSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4NCgk8cmVjdCBoZWlnaHQ9IjEiIHdpZHRoPSI3IiB4PSIzIiB5PSI1IiBmaWxsPSJtZW51dGV4dCIvPjxyZWN0IGhlaWdodD0iMSIgd2lkdGg9IjUiIHk9IjYiIHg9IjQiIGZpbGw9Im1lbnV0ZXh0Ii8+PHJlY3QgaGVpZ2h0PSIxIiB3aWR0aD0iMyIgeD0iNSIgeT0iNyIgZmlsbD0ibWVudXRleHQiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4PSI2IiB5PSI4IiBmaWxsPSJtZW51dGV4dCIvPg0KCQ0KCQ0KPC9zdmc+");
}

scrollbar[orient="vertical"] > scrollbarbutton[type="increment"][disabled="true"] {
  -moz-appearance: none !important;  
  height: 16px !important;  
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTUiIHdpZHRoPSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4NCgk8cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIGhlaWdodD0iMSIgd2lkdGg9IjciIHg9IjMiIHk9IjUiLz48cmVjdCBmaWxsPSJUaHJlZURIaWdobGlnaHQiIGhlaWdodD0iMSIgd2lkdGg9IjIiIHk9IjYiIHg9IjkiLz48cmVjdCBmaWxsPSJUaHJlZURIaWdobGlnaHQiIGhlaWdodD0iMSIgd2lkdGg9IjIiIHk9IjciIHg9IjgiLz48cmVjdCBmaWxsPSJUaHJlZURIaWdobGlnaHQiIGhlaWdodD0iMSIgd2lkdGg9IjIiIHg9IjciIHk9IjgiLz48cmVjdCBmaWxsPSJUaHJlZURIaWdobGlnaHQiIGhlaWdodD0iMSIgd2lkdGg9IjEiIHg9IjciIHk9IjkiLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIGhlaWdodD0iMSIgd2lkdGg9IjUiIHk9IjYiIHg9IjQiLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIGhlaWdodD0iMSIgd2lkdGg9IjMiIHg9IjUiIHk9IjciLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHg9IjYiIHk9IjgiLz4NCgkNCgkNCjwvc3ZnPg==")
}

/* ..... decrement .... */

scrollbarbutton[type="decrement"] {
  -moz-appearance: none !important;
  width: 16px !important;
   background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTUiIHdpZHRoPSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4NCgk8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSI3IiB5PSI0IiB4PSI4IiBmaWxsPSJtZW51dGV4dCIvPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjUiIHk9IjUiIHg9IjciIGZpbGw9Im1lbnV0ZXh0Ii8+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMyIgeT0iNiIgeD0iNiIgZmlsbD0ibWVudXRleHQiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB5PSI3IiB4PSI1IiBmaWxsPSJtZW51dGV4dCIvPg0KCQ0KCQ0KPC9zdmc+");
}

scrollbarbutton[type="decrement"][disabled="true"] {
   -moz-appearance: none !important;
   width: 16px !important;
   background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTUiIHdpZHRoPSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4NCgk8cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIHdpZHRoPSIxIiBoZWlnaHQ9IjciIHk9IjQiIHg9IjgiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSI3IiBmaWxsPSJUaHJlZURIaWdobGlnaHQiIHk9IjUiIHg9IjkiLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIHdpZHRoPSIxIiBoZWlnaHQ9IjUiIHk9IjUiIHg9IjciLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIHdpZHRoPSIxIiBoZWlnaHQ9IjMiIHk9IjYiIHg9IjYiLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHk9IjciIHg9IjUiLz4NCgkNCgkNCjwvc3ZnPg==")
}

scrollbar[orient="vertical"] > scrollbarbutton[type="decrement"] {
   -moz-appearance: none !important;
   height: 16px !important;
   background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4NCgk8cmVjdCBoZWlnaHQ9IjEiIHdpZHRoPSI3IiB5PSI4IiB4PSIzIiBmaWxsPSJtZW51dGV4dCIvPjxyZWN0IGhlaWdodD0iMSIgd2lkdGg9IjUiIHg9IjQiIHk9IjciIGZpbGw9Im1lbnV0ZXh0Ii8+PHJlY3QgaGVpZ2h0PSIxIiB3aWR0aD0iMyIgeT0iNiIgeD0iNSIgZmlsbD0ibWVudXRleHQiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB5PSI1IiB4PSI2IiBmaWxsPSJtZW51dGV4dCIvPg0KCQ0KCQ0KPC9zdmc+");
}

scrollbar[orient="vertical"] > scrollbarbutton[type="decrement"][disabled="true"] {
   -moz-appearance: none !important;
   height: 16px !important;
   background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4NCgk8cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIGhlaWdodD0iMSIgd2lkdGg9IjciIHk9IjgiIHg9IjMiLz48cmVjdCBmaWxsPSJUaHJlZURIaWdobGlnaHQiIHdpZHRoPSI3IiBoZWlnaHQ9IjEiIHk9IjkiIHg9IjQiLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIGhlaWdodD0iMSIgd2lkdGg9IjUiIHg9IjQiIHk9IjciLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIGhlaWdodD0iMSIgd2lkdGg9IjMiIHk9IjYiIHg9IjUiLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHk9IjUiIHg9IjYiLz4NCgkNCgkNCjwvc3ZnPg==") !important;
}


		}
	`;
	var sss = Cc['@mozilla.org/content/style-sheet-service;1'].getService(Ci.nsIStyleSheetService);
	var uri = makeURI('data:text/css;charset=UTF=8,' + encodeURIComponent(css));

	sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);

})();