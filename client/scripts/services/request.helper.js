(function() {

    'use strict';

    angular
        .module('app')
        .factory('RequestHelper', RequestHelper);

    RequestHelper.$inject = [];

    function RequestHelper() {

        var service = {
            transformRequest: transformRequest
        };
        return service;

        function transformRequest(obj) {
            var str = [];
            for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
        }
    }

})();