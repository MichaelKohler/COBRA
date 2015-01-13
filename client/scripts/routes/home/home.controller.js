(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['ContactsService', 'ContentService'];

    function HomeCtrl(ContactsService, ContentService) {
        var ctrl = this;
        ContactsService.getContacts().then(function (data) {
            ctrl.contacts = data;
            console.log(data);
        });
        ContentService.getContent().then(function (data) {
            ctrl.content = data.content;
        });
    }   
})();