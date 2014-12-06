(function () {

    'use strict';

    angular
        .module('app')
        .controller('AdminBlogCtrl', AdminBlogCtrl);

    AdminBlogCtrl.$inject = [];

    function AdminBlogCtrl() {
        var ctrl = this;

        var blogposts = [
            { id: 1, date: "6.12.2014", title: "Foo", content: "That is Foo", slug: "YEAH!" },
            { id: 2, date: "1.12.2014", title: "Bar", content: "That is Bar", slug: "YES?!" },
            { id: 3, date: "1.1.2014", title: "Baz", content: "That is Baz", slug: "HELL NO!" }
        ];

        function removePost(blogpost) {
            console.log('delete blog post');
        }
        
        angular.extend(ctrl, {
            blogposts: blogposts,
            removePost: removePost
        });
    }   
})();