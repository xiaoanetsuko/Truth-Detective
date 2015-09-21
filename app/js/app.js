/**
 * Created by MKRL on 9/20/15.
 */
var app = angular.module('TruthDetective', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            //controller: 'HomeController',
            templateUrl: 'html/home.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});