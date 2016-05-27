(function(){
angular
.module('stylist')
.controller('StylistsController', StylistsController)

StylistsController.$inject = ['UserResource', 'authService', 'ApptResource']

  function StylistsController(UserResource, authService, ApptResource){
    var vm = this;
    if (authService.isLoggedIn()) {
      vm.user = authService.loggedInUser();
      vm.authService = authService
      vm.appts = []
      vm.destroy = destroy
      console.log('stylistsController working - role: ' + vm.user.role)
    }

    ApptResource.query().$promise.then(function(appts) {
      vm.appts = appts.filter(function(appt){
        return appt.stylist == vm.user._id
      })
      // vm.appts = appts;
    });

    function destroy(apptToDelete) {
      console.log(apptToDelete._id)
      ApptResource.delete({id: apptToDelete._id}).$promise.then(function (response) {
        console.log(response.message);
        vm.appts = vm.appts.filter(function(appt) {
          return appt != apptToDelete;
        });
      });
    }
  }
})();

