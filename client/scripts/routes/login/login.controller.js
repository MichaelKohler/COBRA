(function () {

    'use strict';

    angular
        .module('app')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['AuthService', '$location'];

    function LoginCtrl(AuthService, $location) {
        var ctrl = this;
        var model = {
            username: '',
            password: ''
        };
        var errorMessage = '';
        var showErrorMessage = false;

        function login() {
            AuthService.getAuth(model).then(function (data) {
                if (data.success) {
                    $location.path('/admin');
                }
                else {
                    ctrl.showErrorMessage = true;
                    ctrl.errorMessage = 'Benutzername/Passwort falsch';
                }
            });
        }
        
        angular.extend(ctrl, {
            model: model,
            login: login,
            errorMessage: errorMessage,
            showErrorMessage: showErrorMessage
        });
    }   
})();