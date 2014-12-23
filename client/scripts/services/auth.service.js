(function() {

    'use strict';

    angular
        .module('app')
        .factory('AuthService', AuthService);

    AuthService.$inject = ['$http', 'config', '$q', 'RequestHelper'];

    function AuthService($http, config, $q, RequestHelper) {

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
                url: config.apiUrl + service.sessionUrl
            }).success(function(data) {
                q.resolve(data);
            }).error(function(data, status) {
                q.reject(data);
            });

            return q.promise;
        }

        function getAuth(loginObj) {
            var q = $q.defer();

            $http({
                method: 'POST',
                url: config.apiUrl + service.loginUrl,
                transformRequest: RequestHelper.transformRequest,
                data: {
                    username: loginObj.username,
                    password: loginObj.password
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).success(function(data) {
                console.log(data);
                q.resolve(data);
            }).error(function(data, status) {
                q.reject(data, status);
            });

            return q.promise;
        }
    }

})();