(function () {

    'use strict';

    angular
        .module('app')
        .controller('AdminContactCtrl', AdminContactCtrl);

    AdminContactCtrl.$inject = ['ContactsService'];

    function AdminContactCtrl(ContactsService) {
        var ctrl = this;
        ContactsService.getContacts().then(function (data) {
            ctrl.model = data;
        });

        ctrl.saveContacts = function saveContacts() {
            ContactsService.saveContacts(ctrl.model).then(function () {
                ctrl.showSuccessMessage = true;
                ctrl.successMessage = "Kontaktangaben gespeichert";
            }, function (error) {
                ctrl.showErrorMessage = true;
                ctrl.errorMessage = "Die Kontaktangaben konnten nicht gespeichert werden.";
            });
        }
    }   
})();