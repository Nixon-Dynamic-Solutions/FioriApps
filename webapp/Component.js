sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "testapp01/model/models",
        "sap/ui/model/json/JSONModel"
    ],
    function (UIComponent, Device, models,JSONModel) {
        "use strict";

        return UIComponent.extend("testapp01.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
                
                    var oViewModel = new JSONModel({
                        currency: "INR"
                    });
                    this.setModel(oViewModel, "view");
               var loginData=new JSONModel({
                   loggedIn:false
               })
               this.setModel(loginData, "login");
            }
        });
    }
);