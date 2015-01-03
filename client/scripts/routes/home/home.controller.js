(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['ContactsService'];

    function HomeCtrl(ContactsService) {
        var ctrl = this;
        ContactsService.getContacts().then(function (data) {
            ctrl.contacts = data;
        });
    }   
})();