/**
 * Created by MKRL on 9/21/15.
 */
'use strict';

angular.module('TruthDetective')
    .controller('loginCtrl', function($scope, userService, $rootScope, flashService, $location, authenticationService, $localStorage, $window) {
        $rootScope.userInfo = [];

        $scope.openLogin = function () {
            $window.location.href = "http://deco1800-g51.uqcloud.net/login.html";
        };

        $scope.openSignup = function () {
            $window.location.href = "http://deco1800-g51.uqcloud.net/signup.html";
        };

        $scope.register = function () {
            console.log('in hereeeeeeeeee');
            userService.Create(this.user)
                .then(function (response){
                    if (response.success) {
                        console.log("success");
                        flashService.Success('Sign up Successful', true);
                        $window.location.href = "http://deco1800-g51.uqcloud.net/login.html";
                    } else {
                        flashService.Error(response.message);
                        console.log('errorrrrrrr');
                    }
                });

            var username = this.user.username;
            $localStorage.$reset();
            $scope.$storage = $localStorage.$default({
                user: username,
                first: false,
                second: false,
                third: false,
                fourth: false
            });

            var temp = $localStorage;
            $rootScope.userInfo.push($scope.$storage);
            console.log("user info after sign up --> ");
            console.log($rootScope.userInfo);
        };

        $scope.login = function () {
            var vm = this;
            console.log('in loginnnnnn');
            authenticationService.ClearCredentials();
            console.log("username --- " + $scope.vm.username);
            authenticationService.Login($scope.vm.username, $scope.vm.password, function (response) {
                if (response.success) {
                    authenticationService.SetCredentials($scope.vm.username, $scope.vm.password);
                    console.log('login succeed');
                    $window.location.href = "http://deco1800-g51.uqcloud.net/user.html";
                } else {
                    flashService.Error(response.message);
                    console.log('login error')
                }
            });
            console.log("local storage after log in -->");
            console.log($localStorage);

            if ($scope.vm.username == $localStorage.user) {
                console.log("first --> " + $localStorage.first);
                console.log("second --> " + $localStorage.second);
            }
        };
    });

