(function () {

    'use strict';

    angular
        .module('app')
        .controller('AdminBlogpostCtrl', AdminBlogpostCtrl);

    AdminBlogpostCtrl.$inject = ['BlogService', '$location', '$stateParams'];

    function AdminBlogpostCtrl(BlogService, $location, $stateParams) {
        var ctrl = this;

        BlogService.getBlogpostById($stateParams.blogID).then(function (data) {
            ctrl.model = data;
            ctrl.model.id = $stateParams.blogID;
            console.log(ctrl.model);
        });
        
        function saveBlogpost() {
            BlogService.saveBlogpost(ctrl.model).then(function () {
                $location.path('/admin/posts');
            }, function (error) {
                ctrl.showErrorMessage = true;
                ctrl.errorMessage = "Der Post konnte nicht gespeichert werden.";
            });
        }

        angular.extend(ctrl, {
            saveBlogpost: saveBlogpost
        });
    }   
})();