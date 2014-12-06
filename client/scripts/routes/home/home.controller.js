(function () {

    'use strict';

    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = [];

    function HomeCtrl() {
        var ctrl = this;

        var test = "Foo Bar Baz";
        
        angular.extend(ctrl, {
            test: test
        });
    }   
})();