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

        return Controller.extend("testapp01.controller.Dashboard", {
            onInit: function () {
                
               var modelData={
                   "Targets":[]
               };
               var model= new JSONModel(modelData);
               var tilesModel = new JSONModel();
                $.ajax({

                    url: "https://54.179.37.19:8443/B1iXcellerator/exec/ipo/.DEV.ACD.IGT.ACD.Dashboard/com.sap.b1i.dev.scenarios.setup/ACD.IGT/ACD.Dashboard.ipo/IGT.ACD.SalesTargetvsActual?SlpId=42", 
                    dataType: 'json',
                    beforeSend:sap.ui.core.BusyIndicator.show(),
                    headers: {
                        "Authorization": "Basic " + btoa("IGT" + ":" + "Access@123")
                      },
                    success: function(sResult) {
                      Object.entries(sResult).forEach(([key, value]) => {
                        modelData.Targets.push({
                            "Month":value["Month"],
                            "ActualTarget":value["Actual"],
                            "Target":value["Target"]
                        })
                      });
                      console.log(JSON.stringify(modelData))
                      model.setData(modelData);
                      
                      var tilesUri = "https://54.179.37.19:8443/B1iXcellerator/exec/ipo/.DEV.ACD.IGT.ACD.Dashboard/com.sap.b1i.dev.scenarios.setup/ACD.IGT/ACD.Dashboard.ipo/IGT.ACD.TilesDataHttp?SlpId=42&Year=2022&Month=Jun";
                    
                    var oHeaders = {
                      "Authorization": "Basic SUdUOkFjY2Vzc0AxMjM="
                    };
                
                    
                    tilesModel.loadData(tilesUri, null, true, "GET", null, false, oHeaders);
                      
                    sap.ui.core.BusyIndicator.hide()
                    }
                  
                  });
                  this.getView().setModel(tilesModel, "tilesData")
                  this.getView().setModel(model,'chartData');
                },
            _onRouteMatched: function (oEvent) {
                // var oArgs, oView;
                // oArgs = oEvent.getParameter("arguments");
                // var uri = "https://54.179.37.19:8443/B1iXcellerator/exec/ipo/.DEV.ACD.IGT.ACD.Transactions/com.sap.b1i.dev.scenarios.setup/ACD.IGT/ACD.Dashboard.ipo/IGT.ACD.SalesTargetvsActual?SlpId=42";
                // var model = new JSONModel();
                //   var oHeaders = {
                //     "Authorization": "Basic SUdUOkFjY2Vzc0AxMjM="
                //   };
                
                //   this.getView().setModel(model, "SOObject")
                //   model.loadData(uri, null, true, "GET", null, false, oHeaders);
                // console.log(model)
            },
            onAfterRendering: function() {
                sap.ui.core.BusyIndicator.hide()
        }
        });
    });
