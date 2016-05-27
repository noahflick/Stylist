(function(){

  angular
  .module('stylist')
  .factory('ApptResource', ApptResource)

  ApptResource.$inject = ['$resource',]

  function ApptResource($resource){
    return $resource('/api/appts/:id',{id: '@id'})
  }



})()
