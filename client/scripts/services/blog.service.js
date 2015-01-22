(function() {

    'use strict';

    angular
        .module('app')
        .factory('BlogService', BlogService);

    BlogService.$inject = ['$http', 'config', '$q', 'RequestHelper'];

    function BlogService($http, config, $q, RequestHelper) {

        var service = {
            getBlogpostsUrl: '/blogposts',
            getBlogpostByIdUrl: '/blogpost',
            saveBlogpostUrl: '/blogpost',
            deleteBlogpostUrl: '/blogpost',

            getBlogposts: getBlogposts,
            getBlogpostById: getBlogpostById,
            saveBlogpost: saveBlogpost,
            deleteBlogpost: deleteBlogpost
        };
        return service;

        function getBlogposts() {
            var q = $q.defer();

            $http({
                method: 'GET',
                url: config.apiUrl + service.getBlogpostsUrl
            }).success(function(data) {
                q.resolve(data);
            }).error(function(data, status) {
                q.reject(data);
            });

            return q.promise;
        }

        function getBlogpostById(id) {
            var q = $q.defer();

            $http({
                method: 'GET',
                url: config.apiUrl + service.getBlogpostByIdUrl + '/' + id
            }).success(function(data) {
                q.resolve(data);
            }).error(function(data, status) {
                q.reject(data);
            });

            return q.promise;
        }

        function saveBlogpost(model) {
            var q = $q.defer();

            $http({
                method: 'POST',
                url: config.apiUrl + service.saveBlogpostUrl  + '/' + model.id,
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

        function deleteBlogpost(id) {
            var q = $q.defer();

            $http({
                method: 'DELETE',
                url: config.apiUrl + service.deleteBlogpostUrl  + '/' + id,
                transformRequest: RequestHelper.transformRequest
            }).success(function(data) {
                q.resolve(data);
            }).error(function(data, status) {
                q.reject(data, status);
            });

            return q.promise;
        }
    }

})();