/**
 * Created by MKRL on 9/21/15.
 */
'use strict';

angular.module('TruthDetective')
    .controller('loginCtrl', function($scope, userService, $rootScope, flashService, $location, authenticationService, $localStorage, $window) {
        $rootScope.userInfo = [];
        $scope.loginVerify = false;
        $scope.duplicate = false;

        $scope.openLogin = function () {
            $window.location.href = "http://deco1800-g51.uqcloud.net/login.html";
        };

        $scope.openSignup = function () {
            $window.location.href = "http://deco1800-g51.uqcloud.net/signup.html";
        };

        $scope.toIndex = function() {
            $window.location.href = "http://deco1800-g51.uqcloud.net/index.html";
        };

        $scope.toLB = function () {
            $window.location.href = "http://deco1800-g51.uqcloud.net/leaderboard.html";
        };

        $scope.register = function () {
            userService.Create(this.user)
                .then(function (response){
                    if (response.success) {
                        flashService.Success('Sign up Successful', true);
                        $window.location.href = "http://deco1800-g51.uqcloud.net/login.html";
                    } else {
                        $scope.duplicate = true;
                        flashService.Error(response.message);
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
        };

        $scope.login = function () {
            var vm = this;
            authenticationService.ClearCredentials();
            authenticationService.Login($scope.vm.username, $scope.vm.password, function (response) {
                if (response.success) {
                    authenticationService.SetCredentials($scope.vm.username, $scope.vm.password);
                    $window.location.href = "http://deco1800-g51.uqcloud.net/user.html";
                } else {
                    $scope.loginVerify = true;
                    flashService.Error(response.message);
                }
            });
        };
    });

