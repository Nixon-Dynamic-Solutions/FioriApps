sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,History) {
        "use strict";

        return Controller.extend("testapp01.controller.Detail", {
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("detail").attachMatched(this._onRouteMatched, this);
            },
            _onRouteMatched: function (oEvent) {
                var oArgs, oView;
                oArgs = oEvent.getParameter("arguments");
                var uri = "https://54.179.37.19:8443/B1iXcellerator/exec/ipo/.DEV.ACD.IGT.ACD.Transactions/com.sap.b1i.dev.scenarios.setup/ACD.IGT/ACD.Transactions.ipo/IGT.ACD.GetSOList?ApprovalStatus=false&DocEntry="+oArgs.docEntry;
                var model = new JSONModel();
                  var oHeaders = {
                    "Authorization": "Basic SUdUOkFjY2Vzc0AxMjM="
                  };
                
                  this.getView().setModel(model, "SOObject")
                  model.loadData(uri, null, true, "GET", null, false, oHeaders);
                console.log(model)
            },
            onCloseDetailPress:function(){
                console.log("Clicked")
                var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
            console.log(oHistory)
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("test", {}, true);
			}
            }
        });
    });
