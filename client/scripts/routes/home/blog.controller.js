(function () {

    'use strict';

    angular
        .module('app')
        .controller('HomeBlogCtrl', HomeBlogCtrl);

    HomeBlogCtrl.$inject = ['BlogService'];

    function HomeBlogCtrl(BlogService) {
        var ctrl = this;
        BlogService.getBlogposts().then(function (data) {
            ctrl.blogposts = data;
        });
    }   
})();