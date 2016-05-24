(function(){
angular
.module('stylist')
.controller('StylistsController', StylistsController)

StylistsController.$inject = ['StylistResource']

function StylistsController(StylistResource){
  console.log('Stylistsctrl working')
  var vm = this;
  vm.stylists = []
  vm.test = 'stylistsController working'
  StylistResource.query().$promise.then(function(stylists){
    vm.stylists = stylists
  })
}

})();
