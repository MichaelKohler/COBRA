(function () {

    'use strict';

    angular
        .module('app')
        .controller('HomeGalleryCtrl', HomeGalleryCtrl);

    HomeGalleryCtrl.$inject = ['GalleryService'];

    function HomeGalleryCtrl(GalleryService) {
        var ctrl = this;
        ctrl.images = [];
        ctrl.isLoading = true;
        ctrl.maxImagesToLoad = 9;
        ctrl.currentLastImage = 0;

        GalleryService.getPictures(ctrl.maxImagesToLoad, ctrl.currentLastImage).then(function (data) {
            ctrl.images = data;
            ctrl.isLoading = false;
            ctrl.currentLastImage += ctrl.maxImagesToLoad;
        });

        ctrl.loadMoreImages = function() {
            GalleryService.getPictures(ctrl.maxImagesToLoad, ctrl.currentLastImage).then(function (data) {
                ctrl.images = ctrl.images.concat(data);
                ctrl.currentLastImage += ctrl.maxImagesToLoad;
            });
        }
    }   
})();