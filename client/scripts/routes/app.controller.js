(function () {

    'use strict';

    angular
        .module('app')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['ConfigService'];

    function AppCtrl(ConfigService) {
        var appctrl = this;
        ConfigService.getConfig().then(function (data) {
            appctrl.title = data.title;
            appctrl.name = data.name;
            appctrl.url = data.url;
            appctrl.logo = data.logo;
            appctrl.color = data.color;
            appctrl.linkColor = data.linkColor;
        });
    }   
})();