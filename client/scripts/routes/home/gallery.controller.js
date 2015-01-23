(function () {

    'use strict';

    angular
        .module('app')
        .controller('HomeGalleryCtrl', HomeGalleryCtrl);

    HomeGalleryCtrl.$inject = ['GalleryService'];

    function HomeGalleryCtrl(GalleryService) {
        var ctrl = this;
        ctrl.images = [];
        GalleryService.getPictures().then(function (data) {
            ctrl.images = data;
        });
    }   
})();