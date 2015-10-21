/**
 * Created by MKRL on 9/21/15.
 */
'use strict';

function dialogCtrl($scope, $mdDialog, userService, $rootScope, flashService, $location, authenticationService, $localStorage) {
    $rootScope.userInfo = [];

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.testing = function () {
      $scope.replace = "replaceeeee";
    };

    $scope.register = function () {
        console.log('in hereeeeeeeeee');
        userService.Create(this.user)
            .then(function (response){
                if (response.success) {
                    console.log("success");
                    flashService.Success('Sign up Successful', true);
                    $mdDialog.cancel();
                    $location.path('/');
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
                $mdDialog.cancel();
                $location.path('/dashboard');

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

    $scope.showLogin = function(ev) {
        $mdDialog.show({
            controller: dialogCtrl,
            templateUrl: 'views/login.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        });
    };
}

angular.module('truthDetectiveApp')
    .controller('loginCtrl', function($scope, $mdDialog) {
        $scope.showLogin = function(ev) {
            $mdDialog.show({
                controller: dialogCtrl,
                templateUrl: 'views/login.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true
            });

        };

        $scope.showSignup = function (ev) {
            $mdDialog.show({
                controller: dialogCtrl,
                templateUrl: 'views/signup.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true
            });
        };

    });
