/**
 * Created by MKRL on 10/14/15.
 */
'use strict';

angular.module('TruthDetective')
        .controller('dashboardCtrl', function ($scope, $rootScope, $localStorage, $window, userService) {
            $scope.username = $rootScope.globals.currentUser.username;
            console.log("globals.....");
            console.log($rootScope.globals);
            console.log($localStorage);
            var lockedImg = 'img/tools/lock%203.png';
            var allChInfo = userService.getInfo();
            console.log(allChInfo);
            for (var i=0;i<allChInfo.length;i++){
                if (allChInfo[i].username==$scope.username && allChInfo[i].chapter=='one'){
                    $scope.chOneImg = 'resource/img/site/1.jpg';
                    $scope.chOneName = 'Art Gallery';
                } else {
                    $scope.chOneImg = lockedImg;
                    $scope.chOneName = 'Locked';
                }
            }

            $scope.username = $rootScope.globals.currentUser.username;

            $scope.chOneImg =

            $scope.openTutorial = function () {
                $window.location.href = "http://deco1800-g51.uqcloud.net/tutorial.html";
            };
            $scope.openChOne = function () {
                $window.location.href = "http://deco1800-g51.uqcloud.net/tutorial.html";
            };


        });
