'use strict';

angular
  .module('OtherLevelsApp').factory('ColorSwatchService', ['$resource', function($resource){

    return $resource('http://localhost:8090/api/colors/:colorName',
      {
         colorName: '@name'
      },
      {
  			'query': {method:'GET', isArray:true }
      }
    );

  }]);
