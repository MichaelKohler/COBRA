(function () {

    'use strict';

    angular
        .module('app')
        .controller('AdminGalleryCtrl', AdminGalleryCtrl);

    AdminGalleryCtrl.$inject = ['GalleryService', '$scope'];

    function AdminGalleryCtrl(GalleryService, $scope) {
        var ctrl = this;
        
        ctrl.uploads = [];
        GalleryService.getPictures().then(function (data) {
            ctrl.uploads = data;
        });

        ctrl.uploadPictures = function() {
            for (var i = 0; i < ctrl.files.length; i++) {
                uploadImage(ctrl.files[i]);
            }
        };

        $scope.setFile = function (fileInput) {
            ctrl.files = fileInput.files;
        };

        function uploadImage(image) {
            var reader  = new FileReader();
            reader.onloadend = function () {
                var imageObj = {
                    imageURL: reader.result
                };
                GalleryService.uploadPicture(imageObj).then(function (data) {
                    ctrl.uploads.push(imageObj);
                }, function (error) {
                    ctrl.showErrorMessage = true;
                    ctrl.errorMessage = "Es konnten nicht alle Bilder gespeichert werden.";
                });
            };
            reader.readAsDataURL(image);
        }
    }   
})();