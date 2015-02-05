'use strict';

angular
  .module('app', [
  'ui.router', 'markdown'
])

.constant('config', {
  'apiUrl': 'http://localhost:3001/api'
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'scripts/routes/home/home.tpl.html',
    controller: 'HomeCtrl',
    controllerAs: 'ctrl'
  })
  .state('blog', {
    url: '/blog',
    templateUrl: 'scripts/routes/home/blog.tpl.html',
    controller: 'HomeBlogCtrl',
    controllerAs: 'ctrl'
  })
  .state('gallery', {
    url: '/gallery',
    templateUrl: 'scripts/routes/home/gallery.tpl.html',
    controller: 'HomeGalleryCtrl',
    controllerAs: 'ctrl'
  })
  .state('admin', {
    url: '/admin',
    templateUrl: 'scripts/routes/admin/admin.tpl.html',
    controller: 'AdminCtrl',
    controllerAs: 'ctrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'scripts/routes/admin/login.tpl.html',
    controller: 'LoginCtrl',
    controllerAs: 'ctrl'
  })
  .state('admin.general', {
    url: '/general',
    templateUrl: 'scripts/routes/admin/general.tpl.html',
    controller: 'AdminGeneralCtrl',
    controllerAs: 'ctrl'
  })
  .state('admin.contact', {
    url: '/contact',
    templateUrl: 'scripts/routes/admin/contact.tpl.html',
    controller: 'AdminContactCtrl',
    controllerAs: 'ctrl'
  })
  .state('admin.content', {
    url: '/content',
    templateUrl: 'scripts/routes/admin/content.tpl.html',
    controller: 'AdminContentCtrl',
    controllerAs: 'ctrl'
  })
  .state('admin.posts', {
    url: '/posts',
    templateUrl: 'scripts/routes/admin/blog.tpl.html',
    controller: 'AdminBlogCtrl',
    controllerAs: 'ctrl'
  })
  .state('admin.post', {
    url: '/post/:blogID',
    templateUrl: 'scripts/routes/admin/blogpost.tpl.html',
    controller: 'AdminBlogpostCtrl',
    controllerAs: 'ctrl'
  })
  .state('admin.gallery', {
    url: '/gallery',
    templateUrl: 'scripts/routes/admin/gallery.tpl.html',
    controller: 'AdminGalleryCtrl',
    controllerAs: 'ctrl'
  })
  .state('admin.documents', {
    url: '/documents',
    templateUrl: 'scripts/routes/admin/documents.tpl.html',
    controller: 'AdminDocumentsCtrl',
    controllerAs: 'ctrl'
  });

  $urlRouterProvider.otherwise('home');
})
.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.withCredentials = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);