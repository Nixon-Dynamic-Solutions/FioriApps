sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "testapp01.view.Login"
	}).then(function (oView) {
		oView.placeAt("content");
	});
});
