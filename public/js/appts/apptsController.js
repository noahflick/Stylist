
(function(){
angular
.module('stylist')
.controller('ApptsNewController', ApptsNewController)

ApptsNewController.$inject = ['UserResource', 'authService', '$stateParams', 'ApptResource', '$state', '$http']


function ApptsNewController(UserResource, authService, $stateParams, ApptResource, $state, $http){
  var vm = this;
  vm.authService = authService
  if (authService.isLoggedIn()) {
    vm.user = authService.loggedInUser();
    console.log('apptsController working - user: ' + vm.user._id)
  }
  vm.newAppt = {};
  if(vm.user.role == 'stylist'){
    vm.newAppt.stylist = vm.user._id
  } else {
    vm.newAppt.client = vm.user._id
  }
  vm.addAppt = addAppt;


    function addAppt() {
      console.log(vm.newAppt)
      ApptResource.save(vm.newAppt).$promise.then(function(jsonAppt) {
        // addApptToUser(vm.newAppt)
        vm.newAppt = {};
        console.log('new appt created- id: ')

        //Add If to go to stylist or client
        if(vm.user.role == 'stylist'){
          $state.go('stylistDash', {id: $stateParams._id});
        } else {
          $state.go('clientDash', {id: $stateParams._id});
        }
      });
    }
}



})();
