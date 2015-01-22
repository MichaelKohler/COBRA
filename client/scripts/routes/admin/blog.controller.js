(function () {

    'use strict';

    angular
        .module('app')
        .controller('AdminBlogCtrl', AdminBlogCtrl);

    AdminBlogCtrl.$inject = ['BlogService'];

    function AdminBlogCtrl(BlogService) {
        var ctrl = this;

        BlogService.getBlogposts().then(function (data) {
            ctrl.blogposts = data;
        }, function (error) {
            ctrl.showErrorMessage = true;
            ctrl.errorMessage = "Die Blogposts konnten nicht geladen werden.";
        });

        function deletePost(id) {
            BlogService.deleteBlogpost(id).then(function() {
                ctrl.showSuccessMessage = true;
                ctrl.successMessage = "Post wurde gelöscht.";
            }, function (error) {
                ctrl.showErrorMessage = true;
                ctrl.errorMessage = "Der Post konnte nicht gelöscht werden.";
            });
        }
        
        angular.extend(ctrl, {
            deletePost: deletePost
        });
    }   
})();