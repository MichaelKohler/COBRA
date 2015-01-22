(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['ContactsService', 'ContentService', 'BlogService'];

    function HomeCtrl(ContactsService, ContentService, BlogService) {
        var ctrl = this;
        ContactsService.getContacts().then(function (data) {
            ctrl.contacts = data;
        });
        ContentService.getContent().then(function (data) {
            ctrl.content = data.content;
        });

        ctrl.hasPosts = false;
        BlogService.getBlogposts().then(function (data) {
            if (data.length > 0) {
                ctrl.hasPosts = true;
            }
        });
    }   
})();