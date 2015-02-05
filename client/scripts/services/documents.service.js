(function() {

    'use strict';

    angular
        .module('app')
        .factory('DocumentsService', DocumentsService);

    DocumentsService.$inject = ['$http', 'config', '$q'];

    function DocumentsService($http, config, $q) {

        var service = {
            getDocumentsUrl: '/documents',
            saveDocumentUrl: '/document',
            deleteDocumentUrl: '/document',
            getDocumentsEnabledUrl: '/documents/enabled',

            getDocuments: getDocuments,
            deleteDocument: deleteDocument,
            uploadDocument: uploadDocument,
            documentsEnabled: documentsEnabled
        };
        return service;

        function getDocuments() {
            var q = $q.defer();

            $http({
                method: 'GET',
                url: config.apiUrl + service.getDocumentsUrl
            }).success(function(data) {
                q.resolve(data);
            }).error(function(data, status) {
                q.reject(data);
            });

            return q.promise;
        }
        
        function documentsEnabled() {
            var q = $q.defer();

            $http({
                method: 'GET',
                url: config.apiUrl + service.getDocumentsEnabledUrl
            }).success(function(data) {
                q.resolve(data);
            }).error(function(data, status) {
                q.reject(data);
            });

            return q.promise;
        }

        
        function deleteDocument(id) {
            var q = $q.defer();

            $http({
                method: 'DELETE',
                url: config.apiUrl + service.deleteDocumentUrl + '/' + id
            }).success(function(data) {
                q.resolve(data);
            }).error(function(data, status) {
                q.reject(data);
            });
            
            return q.promise;
        }

        function uploadDocument(docObj) {
            var q = $q.defer();

            $http({
                method: 'POST',
                url: config.apiUrl + service.saveDocumentUrl,
                data: docObj
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