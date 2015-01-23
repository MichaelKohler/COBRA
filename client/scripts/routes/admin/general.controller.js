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
        	var reader  = new FileReader();
        	reader.onloadend = function () {
        		ctrl.model.logo = reader.result;
        	}
        	if (ctrl.logoFile)
        		reader.readAsDataURL(ctrl.logoFile);
        	else
        		ctrl.model.logo = "";
        	
            ConfigService.saveConfig(ctrl.model).then(function () {
                ctrl.showSuccessMessage = true;
                ctrl.successMessage = "Konfiguration gespeichert";
            }, function (error) {
                ctrl.showErrorMessage = true;
                ctrl.errorMessage = "Die Konfiguration konnte nicht gespeichert werden.";
            });

        }

        $scope.setLogoFile = function (fileInput) {
        	ctrl.logoFile = fileInput.files[0];
        };
        
        angular.extend(ctrl, {
            saveConfig: saveConfig
        });
    }   
})();