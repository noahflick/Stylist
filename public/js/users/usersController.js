(function(){
angular
.module('stylist')
.controller('UserNewController', UserNewController)
.controller('UserShowController', UserShowController)

UsersController.$inject = ['UserResource']
UserNewController.$inject = ['UserResource', '$state']
UserShowController.$inject = ['UserResource', '$stateParams', '$state']

function UsersController(UserResource){
  console.log('Usersctrl working')
  var vm = this;
  vm.users = []
  vm.test = 'usersController working'
  UserResource.query().$promise.then(function(users){
    vm.users = users
  })
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
          $state.go('userShow', {id: jsonUser._id});
        });
      }
    }

function UserShowController(UserResource, $stateParams, $state) {



      var vm = this;
      vm.user = {};

      UserResource.get({id: $stateParams.id}).$promise.then(function(jsonUser) {
          vm.user = jsonUser;
      });

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
        $state.go('home')
      }
    }

})();

