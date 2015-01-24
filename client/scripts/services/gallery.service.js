(function() {

    'use strict';

    angular
        .module('app')
        .factory('GalleryService', GalleryService);

    GalleryService.$inject = ['$http', 'config', '$q', 'RequestHelper'];

    function GalleryService($http, config, $q, RequestHelper) {

        var service = {
            getPicturesUrl: '/pictures',
            savePictureUrl: '/picture',
            //deletePictureUrl: '/picture' + 'someValue??',

            getPictures: getPictures,
            //deletePicture: deletePicture,
            uploadPicture: uploadPicture
        };
        return service;

        function getPictures() {
            var q = $q.defer();

            $http({
                method: 'GET',
                url: config.apiUrl + service.getPicturesUrl
            }).success(function(data) {
                q.resolve(data);
            }).error(function(data, status) {
                q.reject(data);
            });

            return q.promise;
        }

        function uploadPicture(imageObj) {
            var q = $q.defer();

            $http({
                method: 'POST',
                url: config.apiUrl + service.savePictureUrl,
                transformRequest: RequestHelper.transformRequest,
                data: imageObj,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).success(function(data) {
                console.log('SUCCESS: ' + data);
                q.resolve(data);
            }).error(function(data, status) {
                q.reject(data, status);
            });

            return q.promise;
        }
    }

})();