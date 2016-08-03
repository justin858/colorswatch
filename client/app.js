'use strict';

/**
 * @ngdoc overview
 * @name OtherLevelsApp
 * @description
 * # apsApp
 *
 * Main module of the application.
 */
angular
  .module('OtherLevelsApp', [
    'ngResource',
    'ngRoute',
    'ui.router'
  ]).config(['$routeProvider','$stateProvider','$urlRouterProvider', '$httpProvider', function ($routeProvider,$stateProvider,$urlRouterProvider,$httpProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        // .state('red', {
        //   url: '/:colorName',
        //   templateUrl: 'views/swatch.html',
        //   controller: 'SwatchCtrl',
        //   controllerAs: 'swatch',
        // })
        .state('swatch', {
          url: '/:colorName',
          templateUrl: 'views/swatch.html',
          controller: 'SwatchCtrl',
          controllerAs: 'swatch',
        });

  }]);
