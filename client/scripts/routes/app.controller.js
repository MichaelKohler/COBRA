(function () {

    'use strict';

    angular
        .module('app')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['ConfigService', '$location'];

    function AppCtrl(ConfigService, $location) {
        var appctrl = this;
        ConfigService.getConfig().then(function (data) {
            appctrl.title = data.title;
            appctrl.name = data.name;
            appctrl.url = data.url;
            appctrl.logo = data.logo;
            appctrl.color = data.color;
            appctrl.linkColor = data.linkColor;
        });
        appctrl.goHome = function() {
            $location.path('/home');
        };
    }   
})();