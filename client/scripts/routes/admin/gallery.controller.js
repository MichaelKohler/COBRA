(function () {

    'use strict';

    angular
        .module('app')
        .controller('AdminGalleryCtrl', AdminGalleryCtrl);

    AdminGalleryCtrl.$inject = ['GalleryService', '$scope'];

    function AdminGalleryCtrl(GalleryService, $scope) {
        var ctrl = this;
        
        ctrl.uploads = [];
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
                GalleryService.uploadPicture(reader.result).then(function (data) {
                    ctrl.uploads.push(reader.result);
                }, function (error) {
                    ctrl.showErrorMessage = true;
                    ctrl.errorMessage = "Es konnten nicht alle Bilder gespeichert werden.";
                });
            };
            reader.readAsDataURL(image);
        }
    }   
})();