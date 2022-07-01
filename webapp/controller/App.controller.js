sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("testapp01.controller.App", {
            onInit: function () {
               var logCheck=this.getView().getModel("login").getData()
    //   this.getView().byId("toolHead").setVisible(logCheck.loggedIn);
               
            },
            onSideNavButtonPress: function() {
                var oToolPage = this.byId("app2");
                var bSideExpanded = oToolPage.getSideExpanded();
               // this._setToggleButtonTooltip(bSideExpanded);
                oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
            },
            display : function(){
            //    this.getView().byId("toolHead").setVisible(true);
               console.log(this.byId("toolHead"))
               console.log(this.getOwnerComponent())
            },
            onSelect :function()
            {
                var oToolPage = this.byId("app2");
               
               // this._setToggleButtonTooltip(bSideExpanded);
                oToolPage.setSideExpanded(false);
            }
        });
    });
