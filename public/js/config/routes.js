(function() {
  'use strict'

angular
  .module('stylist')
  .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html'
      })
      .state('userList', {
        url: '/users/list',
        templateUrl: 'js/users/user-list.html',
        controller: 'UsersController',
        controllerAs: 'usersVm'
      })
      .state('userNew', {
        url: '/users/new',
        templateUrl: 'js/users/user-new.html',
        controller: 'UserNewController',
        controllerAs: 'userNewVm'
      })
      .state('userShow', {
        url: '/users/user/:id',
        templateUrl: 'js/users/user-show.html',
        controller: 'UserShowController',
        controllerAs: 'userShowVm'
      })
      .state("signin", {
        url:          "/signin",
        templateUrl:  "/js/users/user-new.html",
        controller:   "SignInController",
        controllerAs: "vm"
      })
      .state("profile", {
        url:         "/profile",
        templateUrl: "/js/profile.html"
      });




    $urlRouterProvider.otherwise('/')
  }


})()
