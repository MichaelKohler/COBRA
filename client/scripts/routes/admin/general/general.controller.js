(function () {

    'use strict';

    angular
        .module('app')
        .controller('AdminGeneralCtrl', AdminGeneralCtrl);

    AdminGeneralCtrl.$inject = ['ConfigService'];

    function AdminGeneralCtrl(ConfigService) {
        var ctrl = this;
        ConfigService.getConfig().then(function (data) {
           ctrl.model = data;
        });

        function saveConfig() {
            ConfigService.saveConfig(ctrl.model).then(function () {
                ctrl.showSuccessMessage = true;
                ctrl.successMessage = "Konfiguration gespeichert"
            }, function (error) {
                ctrl.showErrorMessage = true;
                ctrl.errorMessage = "Die Konfiguration konnte nicht gespeichert werden.";
            });
        }
        
        angular.extend(ctrl, {
            saveConfig: saveConfig
        });
    }   
})();