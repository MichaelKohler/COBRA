(function() {

    'use strict';

    angular
        .module('app')
        .factory('ConfigService', ConfigService);

    ConfigService.$inject = ['$http', 'config', '$q', 'RequestHelper'];

    function ConfigService($http, config, $q, RequestHelper) {

        var service = {
            getConfigUrl: '/config',
            saveConfigUrl: '/config/update',
            uploadImageUrl: '/uploadImage',

            saveConfig: saveConfig,
            getConfig: getConfig,
            uploadImage: uploadImage
        };
        return service;

        function getConfig() {
            var q = $q.defer();

            $http({
                method: 'GET',
                url: config.apiUrl + service.getConfigUrl
            }).success(function(data) {
                q.resolve(data);
            }).error(function(data, status) {
                q.reject(data);
            });

            return q.promise;
        }

        function saveConfig(model) {
            var q = $q.defer();

            $http({
                method: 'POST',
                url: config.apiUrl + service.saveConfigUrl,
                transformRequest: RequestHelper.transformRequest,
                data: model,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).success(function(data) {
                q.resolve(data);
            }).error(function(data, status) {
                q.reject(data, status);
            });

            return q.promise;
        }

        function uploadImage(imageData) {
            var q = $q.defer();
            console.log(imageData);

            $http({
                method: 'POST',
                url: config.apiUrl + service.uploadImageUrl,
                transformRequest: RequestHelper.transformRequest,
                data: imageData
            }).success(function(data) {
                q.resolve(data);
            }).error(function(data, status) {
                q.reject(data, status);
            });

            return q.promise;
        }
    }

})();