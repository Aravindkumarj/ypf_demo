/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ypf/ypf_cicd_demo/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});