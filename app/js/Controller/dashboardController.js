/**
 * Created by MKRL on 10/14/15.
 */
'use strict';

angular.module('TruthDetective')
        .controller('dashboardCtrl', function ($scope, $rootScope, $localStorage, $window, userService) {
            $scope.username = $rootScope.globals.currentUser.username;
            $scope.barWidth = 0;
            console.log("globals.....");
            console.log($rootScope.globals);
            console.log($localStorage);
            var lockedImg = 'img/tools/lock%203.png';
            var lockedTitle = 'Locked';
            var allChInfo = userService.getInfo();
            var userChInfo = [];
            console.log(allChInfo);
            if (allChInfo.length == 0) {
                $scope.chTutImg = lockedImg;
                $scope.chOneImg = lockedImg;
                $scope.chTwoImg = lockedImg;
                $scope.chThreeImg = lockedImg;
                $scope.chTutName = lockedTitle;
                $scope.chOneName = lockedTitle;
                $scope.chTwoName = lockedTitle;
                $scope.chThreeName = lockedTitle;
            }

            for (var i=0;i<allChInfo.length;i++){
                if (allChInfo[i].username == $scope.username) {
                    userChInfo.push(allChInfo[i].chapter)
                }
            }

            if (userChInfo.indexOf('tutorial') > -1) {
                $scope.chTutImg = 'resource/img/site/t.jpg';
                $scope.chTutName = 'House Gate';
                $scope.barWidth+=25;
            } else {
                $scope.chTutImg = lockedImg;
                $scope.chTutName = lockedTitle;
            }

            if (userChInfo.indexOf('one') > -1) {
                $scope.chOneImg = 'resource/img/site/1.jpg';
                $scope.chOneName = 'Art Gallery';
                $scope.barWidth+=25;
            } else {
                $scope.chOneImg = lockedImg;
                $scope.chOneName = lockedTitle;
            }

            if (userChInfo.indexOf('two') > -1) {
                $scope.chTwoImg = 'resource/img/site/1.jpg';
                $scope.chTwoName = '';
                $scope.barWidth+=25;
            } else {
                $scope.chTwoImg = lockedImg;
                $scope.chTwoName = lockedTitle;
            }

            if (userChInfo.indexOf('three') > -1) {
                $scope.chThreeImg = 'resource/img/site/1.jpg';
                $scope.chThreeName = '';
                $scope.barWidth+=25;
            } else {
                $scope.chThreeImg = lockedImg;
                $scope.chThreeName = lockedTitle;
            }

            $scope.username = $rootScope.globals.currentUser.username;

            $scope.openTutorial = function () {
                $window.location.href = "http://deco1800-g51.uqcloud.net/tutorial.html";
            };
            $scope.openChOne = function () {
                $window.location.href = "http://deco1800-g51.uqcloud.net/chapter1.html";
            };
            $scope.openChTwo = function () {
                $window.location.href = "http://deco1800-g51.uqcloud.net/chapter2.html";
            };
            $scope.openChThree = function () {
                $window.location.href = "http://deco1800-g51.uqcloud.net/chapter3.html";
            };

            $scope.progressPercentage = $scope.barWidth+'%';

            $scope.toDash = function () {
                $window.location.href = "http://deco1800-g51.uqcloud.net/user.html";
            };

            $scope.toIndex = function () {
                $window.location.href = "http://deco1800-g51.uqcloud.net/index.html";
            };
        });
