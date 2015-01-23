(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['ContactsService', 'ContentService', 'BlogService', 'GalleryService'];

    function HomeCtrl(ContactsService, ContentService, BlogService, GalleryService) {
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
        ctrl.hasPictures = false;
        GalleryService.getPictures().then(function (data) {
           if (data.length > 0) {
               ctrl.hasPictures = true;
           }
        });
    }   
})();