(function() {

    'use strict';

    angular
        .module('app')
        .factory('AuthService', AuthService);

    AuthService.$inject = ['$http', 'config', '$q'];

    function AuthService($http, config, $q) {

        var service = {
            loginUrl: '/login',
            sessionUrl: '/session',

            userHasSession: userHasSession,
            getAuth: getAuth
        };
        return service;

        function userHasSession() {
            var q = $q.defer();

            $http({
                method: 'POST',
                url: config.apiUrl + service.sessionUrl,
                withCredentials: true
            }).success(function(data) {
                q.resolve();
            }).error(function(data, status) {
                q.reject();
            });

            return q.promise;
        }

        function getAuth(loginObj) {
            var q = $q.defer();

            $http({
                method: 'POST',
                url: config.apiUrl + service.loginUrl,
                data: {
                    'username': loginObj.username,
                    'password': loginObj.password
                }
            }).success(function(data) {
                q.resolve(data);
            }).error(function(data, status) {
                q.reject(data, status);
            });

            return q.promise;
        }
    }

})();