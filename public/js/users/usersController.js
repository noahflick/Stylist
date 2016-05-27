(function(){
angular
.module('stylist')
.controller('UserNewController', UserNewController)
.controller('UserShowController', UserShowController)
.controller('UsersController', UsersController)

UsersController.$inject = ['authService', 'UserResource', '$stateParams', '$state']
UserNewController.$inject = ['UserResource', '$state']
UserShowController.$inject = ['UserResource', '$stateParams', '$state']

function UsersController(authService, UserResource, $stateParams, $state){
  console.log('Usersctrl working')
  var vm = this;
  vm.users = []
  vm.test = 'usersController working'
  vm.authService = authService
  UserResource.query().$promise.then(function(users){
    vm.users = users
  })

  var vm = this;
  vm.user = {};
  vm.editUser = editUser;

  UserResource.get({id: $stateParams.id}).$promise.then(function(jsonUser) {
      vm.user = jsonUser;
  });

  function editUser() {

    UserResource.update({id: vm.user._id}, vm.user).$promise.then(function(updatedUser) {
      vm.user = updatedUser;

      if(vm.user.role == 'stylist'){
        $state.go('stylistDash', {id: vm.user._id});
      } else {
        $state.go('clientDash', {id: vm.user._id});
      }
    });
  }
  vm.users = [];
  vm.destroy = destroy;

  UserResource.query().$promise.then(function(users) {
    vm.users = users;
  });
  function destroy(userToDelete) {
    console.log('userDestroy func')
    UserResource.delete({id: userToDelete._id}).$promise.then(function (response) {
      console.log(response.message);
      vm.users = vm.users.filter(function(user) {
        return user != userToDelete;
      });
    }); console.log('user deleted')
    authService.logOut()
    $state.go('home')
  }

}


function UserNewController(UserResource, $state) {
      //toggle client or stylist account
      var vm = this;
      vm.newUser = {};
      vm.addUser = addUser;

      function addUser() {
        UserResource.save(vm.newUser).$promise.then(function(jsonUser) {
          vm.newUser = {};
          console.log('new user created- id: ')
          $state.go('stylistDash'/*, {id: jsonUser._id}*/);
        });
      }
    }

function UserShowController(UserResource, $stateParams, $state) {

      var vm = this;
      vm.user = {};

      UserResource.get({id: $stateParams.id}).$promise.then(function(jsonUser) {
          vm.user = jsonUser;
      });




    }

})();

