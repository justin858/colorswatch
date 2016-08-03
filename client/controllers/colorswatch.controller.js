'use strict';

/**
 * @ngdoc function
 * @name OtherLevelsApp.controller:SwatchCtrl
 * @description
 * # SwatchCtrl
 * Controller of the OtherLevelsApp
 */
 angular
   .module('OtherLevelsApp').controller('SwatchCtrl', ['$scope', '$stateParams', 'ColorSwatchService',
    function ($scope, $stateParams, ColorSwatchService) {

        ColorSwatchService.get(
          {colorName: $stateParams.colorName}, function(data) {
            $scope.swatch = data;
            console.log($scope.swatch);
            $scope.name = $scope.swatch.name;
            $scope.accents = $scope.swatch.accents;
            $scope.shades = $scope.swatch.shades;
          }
        );

  }]);
