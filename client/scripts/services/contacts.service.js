(function() {
    'use strict';

    angular
        .module('app')
        .factory('ContactsService', ContactsService);

    ContactsService.$inject = ['$http', 'config', '$q', 'RequestHelper'];

    function ContactsService($http, config, $q, RequestHelper) {

        var service = {
            getContactsUrl: '/contact',
            saveContactsUrl: '/contact/update',

            getContacts: getContacts,
            saveContacts: saveContacts
        };
        return service;

        function getContacts() {
            var q = $q.defer();

            $http({
                method: 'GET',
                url: config.apiUrl + service.getContactsUrl
            }).success(function(data) {
                q.resolve(data);
            }).error(function(data, status) {
                q.reject(data);
            });

            return q.promise;
        }

        function saveContacts(model) {
            var q = $q.defer();

            $http({
                method: 'POST',
                url: config.apiUrl + service.saveContactsUrl,
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