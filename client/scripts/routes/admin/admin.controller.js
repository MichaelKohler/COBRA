(function () {

    'use strict';

    angular
        .module('app')
        .controller('AdminCtrl', AdminCtrl);

    AdminCtrl.$inject = ['AuthService', 'DocumentsService', '$location'];

    function AdminCtrl(AuthService, DocumentsService, $location) {
        var ctrl = this;
        ctrl.documentsEnabled = false;
        
        AuthService.userHasSession().then(function (response) {
            if (response == undefined || response == "") {
                $location.path('/login');
            }
        });
        
        DocumentsService.documentsEnabled().then(function (response) {
            console.log(response);
            ctrl.documentsEnabled = response;
        });
    }   
})();