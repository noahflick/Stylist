(function() {

angular.module('stylist')
  .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html'
      })
      .state('stylistList', {
        url: '/stylists/list',
        templateUrl: 'js/stylists/stylist-list.html',
        controller: 'StylistsController',
        controllerAs: 'stylistsVm'
      })


    $urlRouterProvider.otherwise('/')
  }


})()
