(function(){
angular
.module('stylist')
.controller('ClientsController', ClientsController)

ClientsController.$inject = ['UserResource', 'authService']

function ClientsController(UserResource, authService){
  var vm = this;
  vm.authService = authService
  if (authService.isLoggedIn()) {
    vm.user = authService.loggedInUser();
    console.log('clientsController working - role: ' + vm.user.role)
  }

}

})();
