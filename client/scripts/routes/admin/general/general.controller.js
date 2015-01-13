(function () {

    'use strict';

    angular
        .module('app')
        .controller('AdminGeneralCtrl', AdminGeneralCtrl);

    AdminGeneralCtrl.$inject = ['ConfigService', '$scope'];

    function AdminGeneralCtrl(ConfigService, $scope) {
        var ctrl = this;
        ConfigService.getConfig().then(function (data) {
           ctrl.model = data;
        });

        function saveConfig() {
            ConfigService.saveConfig(ctrl.model).then(function () {
                ctrl.showSuccessMessage = true;
                ctrl.successMessage = "Konfiguration gespeichert";
            }, function (error) {
                ctrl.showErrorMessage = true;
                ctrl.errorMessage = "Die Konfiguration konnte nicht gespeichert werden.";
            });
            // NOT YET FINISHED
            /*var formData = new FormData();
            formData.append("file", ctrl.element.files[0]);
            ConfigService.uploadImage(formData).then(function (response) {
                ctrl.model.logo = response.logoURL;
                return ConfigService.saveConfig(ctrl.model);
            }, function (response) {
                ctrl.showErrorMessage = true;
                ctrl.errorMessage = "Das Bild konnte nicht gespeichert werden.";
                return;
            }).then(function () {
                ctrl.showSuccessMessage = true;
                ctrl.successMessage = "Konfiguration gespeichert";
            }, function (error) {
                ctrl.showErrorMessage = true;
                ctrl.errorMessage = "Die Konfiguration konnte nicht gespeichert werden.";
            });*/
        }

        $scope.setElement = function setElement(element) {
            ctrl.element = element;
        };
        
        angular.extend(ctrl, {
            saveConfig: saveConfig
        });
    }   
})();