angular
  .module('app', [
  'ui.router', 'markdown'
])

.constant('config', {
  'apiUrl': 'http://localhost:3001'
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'scripts/routes/home/home.tpl.html',
    controller: 'HomeCtrl',
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
    templateUrl: 'scripts/routes/login/login.tpl.html',
    controller: 'LoginCtrl',
    controllerAs: 'ctrl'
  })
  .state('admin.general', {
    url: '/general',
    templateUrl: 'scripts/routes/admin/general/general.tpl.html',
    controller: 'AdminGeneralCtrl',
    controllerAs: 'ctrl'
  })
  .state('admin.contact', {
    url: '/contact',
    templateUrl: 'scripts/routes/admin/contact/contact.tpl.html',
    controller: 'AdminContactCtrl',
    controllerAs: 'ctrl'
  })
  .state('admin.content', {
    url: '/content',
    templateUrl: 'scripts/routes/admin/content/content.tpl.html',
    controller: 'AdminContentCtrl',
    controllerAs: 'ctrl'
  })
  .state('admin.posts', {
    url: '/posts',
    templateUrl: 'scripts/routes/admin/blog/blog.tpl.html',
    controller: 'AdminBlogCtrl',
    controllerAs: 'ctrl'
  })
  .state('admin.posts.new', {
    url: '/new',
    templateUrl: 'scripts/routes/admin/blog/blog.new.tpl.html',
    controller: 'AdminBlogNewCtrl',
    controllerAs: 'ctrl'
  })
  .state('admin.posts.edit', {
    url: '/edit/:blogID',
    templateUrl: 'scripts/routes/admin/blog/blog.edit.tpl.html',
    controller: 'AdminBlogEditCtrl',
    controllerAs: 'ctrl'
  })
  .state('admin.gallery', {
    url: '/gallery',
    templateUrl: 'scripts/routes/admin/gallery/gallery.tpl.html',
    controller: 'AdminGalleryCtrl',
    controllerAs: 'ctrl'
  });

  $urlRouterProvider.otherwise('home');
})
.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.withCredentials = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);