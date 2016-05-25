(function(){
angular
.module('stylist')
.controller('StylistsController', StylistsController)

StylistsController.$inject = ['UserResource', '$stateParams', 'authService']

function StylistsController(UserResource, $stateParams, authService){
  var vm = this;
  if (authService.isLoggedIn()) {
    vm.user = authService.loggedInUser();
    console.log('stylistsController working - role: ' + vm.user.role)
  }

  vm.test = 'stylistsController working'

}

})();
