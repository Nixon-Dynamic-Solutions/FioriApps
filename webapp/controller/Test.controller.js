sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,Filter,FilterOperator) {
        "use strict";

        return Controller.extend("testapp01.controller.Test", {
            onInit : function(){
                this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                this._oRouter.attachRouteMatched(this.handleRouteMatched, this);
            },
            
            handleRouteMatched:function(){
                
                var loginDetails=this.getOwnerComponent().getModel("login").getData()
                console.log(this.getOwnerComponent().getModel("login"))
                console.log("INIT Called")
                console.log(loginDetails.loggedIn)
                
                var uri = "https://54.179.37.19:8443/B1iXcellerator/exec/ipo/.DEV.ACD.IGT.ACD.Transactions/com.sap.b1i.dev.scenarios.setup/ACD.IGT/ACD.Transactions.ipo/IGT.ACD.GetSOList?ApprovalStatus=false";
                var model = new JSONModel();
                  var oHeaders = {
                    "Authorization": "Basic SUdUOkFjY2Vzc0AxMjM="
                  };
                
                  this.getView().setModel(model, "SOList")
                  model.loadData(uri, null, true, "GET", null, false, oHeaders);
                 
                  console.log(model)
                
            },
            onFilterPosts : function (oEvent) {

                // build filter array
                var aFilter = [];
                var sQuery = oEvent.getParameter("query");
                if (sQuery) {
                    aFilter.push(new Filter("title", FilterOperator.Contains, sQuery));
                }
    
                // filter binding
                var oList = this.byId("postsList");
                var oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
            },
            onListItemPress:function(oEvent){
                console.log("Pressed : " + oEvent.getSource().getTitle());
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                var selectedDocId = oEvent.getSource().getTitle();
                oRouter.navTo("detail", {
                    docEntry: selectedDocId
                });
            }
        });
    });
