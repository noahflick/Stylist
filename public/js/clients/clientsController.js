(function(){
angular
.module('stylist')
.controller('ClientsController', ClientsController)

ClientsController.$inject = ['UserResource', 'authService', 'ApptResource' ]

function ClientsController(UserResource, authService, ApptResource){
  var vm = this;
  vm.authService = authService
  vm.appts = []
  if (authService.isLoggedIn()) {
    vm.user = authService.loggedInUser();
    console.log('clientsController working - role: ' + vm.user.role)
  }

  ApptResource.query().$promise.then(function(appts) {
      vm.appts = appts.filter(function(appt){
        return appt.client == vm.user._id
      })
      // vm.appts = appts;
    });

    function destroy(apptToDelete) {
      ApptResource.delete({id: apptToDelete._id}).$promise.then(function (response) {
        console.log(response.message);
        vm.appts = vm.appts.filter(function(appt) {
          return appt != apptToDelete;
        });
      });
    }
  }

})();
