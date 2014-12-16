(function () {

    'use strict';

    angular
        .module('app')
        .controller('AdminCtrl', AdminCtrl);

    AdminCtrl.$inject = ['AuthService'];

    function AdminCtrl(AuthService) {
        var ctrl = this;

        AuthService.userHasSession().then(function (response) {
            if (response != {}) {
                console.log('logged in..');
            }
            else {
                console.log('not logged in..');
            }
        });
        
        angular.extend(ctrl, {
            
        });
    }   
})();