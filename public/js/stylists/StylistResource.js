(function(){

  angular
  .module('stylist')
  .factory('StylistResource', StylistResource)

  StylistResource.$inject = ['$resource']

  function StylistResource($resource){
    return $resource('/api/stylists/:id',{id: '@id'})
  }



})()
