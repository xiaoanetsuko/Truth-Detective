'use strict';

/**
 * @ngdoc overview
 * @name truthDetectiveApp
 * @description
 * # truthDetectiveApp
 *
 * Main module of the application.
 */
angular
  .module('truthDetectiveApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html'
        //controller: 'MainCtrl',
        //controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })


        .when('/dashboard', {
          templateUrl:'views/dashboard.html'
        })

      .otherwise({
        redirectTo: '/'
      });
  });
