(function(){
angular
.module('stylist')
.controller('StylistsController', StylistsController)

StylistsController.$inject = ['UserResource', '$stateParams']

function StylistsController(UserResource, $stateParams){
  console.log('stylistsController working: stateparams.id: ' + $stateParams.id)
  var vm = this;
  vm.user = {}
  vm.test = 'stylistsController working'
  UserResource.get({id: $stateParams.id}).$promise.then(function(jsonUser) {
          vm.user = jsonUser;
      });

}

})();
