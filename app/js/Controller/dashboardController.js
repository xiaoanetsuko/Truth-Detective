/**
 * Created by MKRL on 10/14/15.
 */
'use strict';

angular.module('TruthDetective')
        .controller('dashboardCtrl', function ($scope, $rootScope, $localStorage, $window, userService) {
            console.log("globals.....");
            console.log($rootScope.globals);
            console.log($localStorage);
            $scope.username = $rootScope.globals.currentUser.username;
            var user = userService.GetUser($scope.username);

            $scope.openTutorial = function () {
                $window.location.href = "http://deco1800-g51.uqcloud.net/gameTutorial.html";
            };
            $scope.openChOne = function () {
                $window.location.href = "http://deco1800-g51.uqcloud.net/game.html";
            };
            $scope.completeFirst = function () {
                console.log("current user name ---- ");
                console.log($scope.username);
                console.log("localstorage.user --- ");
                console.log($localStorage.user);
                userService.GetByUsername($rootScope.globals.currentUser.username);
                //console.log(userService.GetByUsername($scope.username));
                if ($scope.username == $localStorage.user) {
                    $localStorage.first = true;
                }
                userService.finishFirst(user);
                console.log($localStorage.first);
                //console.log($localStorage.second);
            };
            $scope.completeFirstGoBack = function () {

                userService.GetByUsername($rootScope.globals.currentUser.username);
                //console.log(userService.GetByUsername($scope.username));
                if ($scope.username == $localStorage.user) {
                    $localStorage.first = true;
                }
                userService.finishFirst(user);

                console.log($localStorage.first);
                $window.location.href = "http://deco1800-g51.uqcloud.net/user.html";
                //console.log($localStorage.second);
            };

        });
