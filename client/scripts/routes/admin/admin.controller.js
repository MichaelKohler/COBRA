(function () {

    'use strict';

    angular
        .module('app')
        .controller('AdminCtrl', AdminCtrl);

    AdminCtrl.$inject = ['AuthService', '$location'];

    function AdminCtrl(AuthService, $location) {
        var ctrl = this;

        AuthService.userHasSession().then(function (response) {
            if (response == undefined || response == "") {
                $location.path('/login');
            }
        });
        
        angular.extend(ctrl, {
            
        });
    }   
})();