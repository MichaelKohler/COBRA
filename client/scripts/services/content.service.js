(function() {

    'use strict';

    angular
        .module('app')
        .factory('ContentService', ContentService);

    ContentService.$inject = ['$http', 'config', '$q', 'RequestHelper'];

    function ContentService($http, config, $q, RequestHelper) {

        var service = {
            getContentUrl: '/content',
            saveContentUrl: '/content/update',

            saveContent: saveContent,
            getContent: getContent
        };
        return service;

        function getContent() {
            var q = $q.defer();

            $http({
                method: 'GET',
                url: config.apiUrl + service.getContentUrl
            }).success(function(data) {
                q.resolve(data);
            }).error(function(data, status) {
                q.reject(data);
            });

            return q.promise;
        }

        function saveContent(model) {
            var q = $q.defer();

            $http({
                method: 'POST',
                url: config.apiUrl + service.saveContentUrl,
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
    }

})();