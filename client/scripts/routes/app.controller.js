(function () {

    'use strict';

    angular
        .module('app')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = [];

    function AppCtrl() {
        var appctrl = this;

        var title = "EINFACH.KLAR.KOMMUNIZIEREN";
        var name = "Stephanie Schmid";
        var person = "Stephanie Schmid";
        var url = "einfachundklar.ch";
        var picture = "images/foto.svg";
        
        angular.extend(appctrl, {
            title: title,
            name: name,
            person: person,
            url: url,
            picture: picture
        });
    }   
})();