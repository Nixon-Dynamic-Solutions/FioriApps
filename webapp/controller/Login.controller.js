sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/UIComponent"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,UIComponent) {
        "use strict";

        return Controller.extend("testapp01.controller.Login", {
            onInit: function () {
                document.getElementById("afterLogin").style.visibility="hidden"
            },
            onLoginTap:function(){
                sap.ui.core.BusyIndicator.show()
                var uid = this.getView().byId("uid").getValue();
                var pasw = this.getView().byId("pasw").getValue();
                if(uid==='admin' && pasw==='admin')
                {
                    var loginData=new JSONModel({
                        loggedIn:true
                    })
                    this.getView().setModel(loginData,"login")
                    document.getElementById("login").remove()
                    document.getElementById("afterLogin").style.visibility="visible"
                    // this.getOwnerComponent().byId("toolHead").setVisible(true);
                    // sap.ui.controller("testapp01.controller.App").display();
                    // console.log(this.getView().getParent())
                     window.location.replace("#/dashboard");
                    // var oRouter = UIComponent.getRouterFor(this);
			        // oRouter.navTo("Test");
                }
                else
                sap.ui.core.BusyIndicator.hide()
              }
        });
    });


