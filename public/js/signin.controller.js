 (function() {
  "use strict";

  angular
    .module("stylist")
    .controller("SignInController", SignInController);

  SignInController.$inject = ["$log", "authService", "userService", "$state"];

  function SignInController($log, authService, userService, $state) {
    var vm = this;

    // BINDINGS
    // vm.signUp = {
    //   email:    "pj@ga.co",
    //   username:     "Philip Hughes",
    //   password: "12345",
    //   passwordConfirmation: "12345"
    // };
    vm.submitSignUp = submitSignUp;
    // vm.logIn = {
    //   email:    "pj@ga.co",
    //   password: "12345"
    // };
    vm.submitLogIn = submitLogIn;
    vm.conflict = false;

    // FUNCTIONS
    function submitSignUp() {
      userService
        .create(vm.signUp)
        .then(function(res) {
          return authService.logIn(vm.signUp);
        })
        .then(
          // on success
          function(decodedToken) {
            $log.info('Logged in!', decodedToken._id);
            if(decodedToken.role == "stylist"){
              $state.go('stylistDash', {id: decodedToken._id});
            } else {
              $state.go('clientDash', {id: decodedToken._id})
            }
          },
          // on error
          function(err) {
            if (err.status === 409) vm.conflict = true;
            $log.info('Error Claire-r:', err);
          }
        );
    }

    function submitLogIn() {
      authService
        .logIn(vm.logIn)
        .then(
          // on success
          function(decodedToken) {
            if (decodedToken.role == "stylist") {
              $log.info('Logged in!', decodedToken);
              $state.go('stylistDash', {id: decodedToken._id});
            } else {
              $state.go('clientDash', {id: decodedToken._id})
              console.log('logged in client')
            }
          },
          // on error
          function(err) {
            $log.info('Error:', err);
          }
        )
    }

    $log.info("SignInController loaded!");
  }
})();
