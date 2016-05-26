
(function(){
angular
.module('stylist')
.controller('ApptsNewController', ApptsNewController)

ApptsNewController.$inject = ['UserResource', 'authService', '$stateParams']

function ApptsNewController(UserResource, authService, $stateParams){
  var vm = this;
  vm.authService = authService
  if (authService.isLoggedIn()) {
    vm.user = authService.loggedInUser();
    console.log('apptsController working - role: ' + vm.user.role)
  }

}

})();
