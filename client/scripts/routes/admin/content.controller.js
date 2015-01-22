(function () {

    'use strict';

    angular
        .module('app')
        .controller('AdminContentCtrl', AdminContentCtrl);

    AdminContentCtrl.$inject = ['ContentService'];

    function AdminContentCtrl(ContentService) {
        var ctrl = this;
        ContentService.getContent().then(function (data) {
            ctrl.model = data;
        });
        
        ctrl.saveContent = function() {
            ContentService.saveContent(ctrl.model).then(function () {
                ctrl.showSuccessMessage = true;
                ctrl.successMessage = "Inhalt gespeichert";
            }, function (error) {
                ctrl.showErrorMessage = true;
                ctrl.errorMessage = "Der Inhalt konnte nicht gespeichert werden.";
            });
        };
    }   
})();