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
            templateUrl: '../html/login.html'
        })
        .when('/dashboard.html', {
            templateUrl: '../html/user.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    })

.run(function ($rootScope, $location, $cookieStore) {
    $rootScope.globals = $cookieStore.get('globals') || {};
});