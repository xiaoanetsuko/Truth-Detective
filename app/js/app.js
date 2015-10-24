/**
 * Created by MKRL on 9/20/15.
 */
'use strict';

angular
    .module('TruthDetective', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMaterial',
        'ngStorage'
    ])
    .config(function ($routeProvider) {
    $routeProvider
        .when('/index.html', {
            //controller: 'HomeController',
            templateUrl: 'index.html'
        })
        .when('/login.html', {
            templateUrl: 'login.html'
        })
        .when('/dashboard.html', {
            templateUrl: 'user.html'
        })
        .when('/tutorial.html', {
            templateUrl: 'gameTutorial.html'
        })
        .when('/chapter1.html', {
            templateUrl: 'game.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    })

.run(function ($rootScope, $location, $cookieStore) {
    $rootScope.globals = $cookieStore.get('globals') || {};
});