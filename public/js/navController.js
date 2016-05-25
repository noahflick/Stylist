(function() {
  "use strict";

  angular
    .module("stylist")
    .controller("NavController", NavController);

  NavController.$inject = ["$log", "authService"];

  function NavController($log, authService, userService, $state) {
    var vm = this
    vm.isLoggedIn = authService.isLoggedIn()
    vm.loggedInUser = authService.loggedInUser()
    if(vm.isLoggedIn){
      vm.role = authService.role
    }
    console.log('logged/user:  ' + vm.isLoggedIn + vm.loggedInUser)
    $log.info('navController Loaded')
  }


})();
