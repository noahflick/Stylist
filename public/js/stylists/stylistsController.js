(function(){
angular
.module('stylist')
.controller('StylistsController', StylistsController)

StylistsController.$inject = ['UserResource', 'authService']

function StylistsController(UserResource, authService){
  var vm = this;
  if (authService.isLoggedIn()) {
    vm.user = authService.loggedInUser();
    vm.authService = authService
    console.log('stylistsController working - role: ' + vm.user.role)
  }

}

})();
