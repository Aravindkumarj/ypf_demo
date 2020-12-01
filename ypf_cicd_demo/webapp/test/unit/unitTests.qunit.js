/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ypf/ypf_cicd_demo/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});