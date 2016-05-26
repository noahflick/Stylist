
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
    console.log('apptsController working - user: ' + vm.user._id)
  }
  vm.length
  vm.newAppt = {};
  vm.addAppt = addAppt;

    function addAppt() {
      ApptResource.save(vm.newAppt).$promise.then(function(jsonAppt) {
        vm.newAppt = {};
        console.log('new appt created- id: ')
        $state.go('stylistDash', {id: jsonUser._id});
      });
    }
}

})();
