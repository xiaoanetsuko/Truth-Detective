/**
 * Created by MKRL on 10/14/15.
 */
'use strict';

angular.module('TruthDetective')
        .controller('dashboardCtrl', function ($scope, $rootScope, $localStorage, $window, userService, $mdDialog) {
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

            $scope.chTutImg = 'resource/img/site/t.jpg';
            $scope.chOneImg = lockedImg;
            $scope.chTwoImg = lockedImg;
            $scope.chThreeImg = lockedImg;
            $scope.chTutName = 'House Gate';
            $scope.chOneName = lockedTitle;
            $scope.chTwoName = lockedTitle;
            $scope.chThreeName = lockedTitle;

            $scope.openChOne = function (ev) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#mainBody')))
                        .clickOutsideToClose(true)
                        .title('Chapter One is Locked')
                        .content('To unlock, please complete the Tutorial Chapter.')
                        //.ariaLabel('Alert Dialog Demo')
                        .ok('Close')
                        .targetEvent(ev)
                );
            };

            $scope.openChTwo = function (ev) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#mainBody')))
                        .clickOutsideToClose(true)
                        .title('Chapter Two is Locked')
                        .content('To unlock, please complete Chapter One.')
                        //.ariaLabel('Alert Dialog Demo')
                        .ok('Close')
                        .targetEvent(ev)
                );
            };

            $scope.openChThree = function (ev) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#mainBody')))
                        .clickOutsideToClose(true)
                        .title('Chapter Three is Locked')
                        .content('To unlock, please complete Chapter Two.')
                        //.ariaLabel('Alert Dialog Demo')
                        .ok('Close')
                        .targetEvent(ev)
                );
            };

            for (var i=0;i<allChInfo.length;i++){
                if (allChInfo[i].username == $scope.username) {
                    userChInfo.push(allChInfo[i].chapter)
                }
            }

            console.log('chapter completed by this user ... ')
            console.log(userChInfo);

            //if (userChInfo.indexOf('tutorial') > -1) {
            //    $scope.chTutImg = 'resource/img/site/t.jpg';
            //    $scope.chTutName = 'House Gate';
            //    $scope.barWidth+=25;
            //} else {
            //    $scope.chTutImg = lockedImg;
            //    $scope.chTutName = lockedTitle;
            //}

            if (userChInfo.length == 1) {
                $scope.chOneImg = 'resource/img/site/1.jpg';
                $scope.chOneName = 'Art Gallery';
                $scope.barWidth+=25;
                $scope.openChOne = function () {
                    $window.location.href = "http://deco1800-g51.uqcloud.net/chapter1.html";
                };
            }

            if (userChInfo.length == 2) {
                $scope.chOneImg = 'resource/img/site/1.jpg';
                $scope.chOneName = 'Art Gallery';
                $scope.chTwoImg = 'resource/img/site/1.jpg';
                $scope.chTwoName = '';
                $scope.barWidth+=50;
                $scope.openChOne = function () {
                    $window.location.href = "http://deco1800-g51.uqcloud.net/chapter1.html";
                };
                $scope.openChTwo = function () {
                    $window.location.href = "http://deco1800-g51.uqcloud.net/chapter2.html";
                };
            }

            if (userChInfo.length == 3) {
                $scope.chOneImg = 'resource/img/site/1.jpg';
                $scope.chOneName = 'Art Gallery';
                $scope.chTwoImg = 'resource/img/site/1.jpg';
                $scope.chTwoName = '';
                $scope.chThreeImg = 'resource/img/site/1.jpg';
                $scope.chThreeName = '';
                $scope.barWidth+=75;
                $scope.openChOne = function () {
                    $window.location.href = "http://deco1800-g51.uqcloud.net/chapter1.html";
                };
                $scope.openChTwo = function () {
                    $window.location.href = "http://deco1800-g51.uqcloud.net/chapter2.html";
                };
                $scope.openChThree = function () {
                    $window.location.href = "http://deco1800-g51.uqcloud.net/chapter3.html";
                };
            }

            if (userChInfo.length == 4) {
                $scope.chOneImg = 'resource/img/site/1.jpg';
                $scope.chOneName = 'Art Gallery';
                $scope.chTwoImg = 'resource/img/site/1.jpg';
                $scope.chTwoName = '';
                $scope.chThreeImg = 'resource/img/site/1.jpg';
                $scope.chThreeName = '';
                $scope.barWidth+=100;
                $scope.openChOne = function () {
                    $window.location.href = "http://deco1800-g51.uqcloud.net/chapter1.html";
                };
                $scope.openChTwo = function () {
                    $window.location.href = "http://deco1800-g51.uqcloud.net/chapter2.html";
                };
                $scope.openChThree = function () {
                    $window.location.href = "http://deco1800-g51.uqcloud.net/chapter3.html";
                };
            }

            $scope.username = $rootScope.globals.currentUser.username;

            $scope.openTutorial = function () {
                $window.location.href = "http://deco1800-g51.uqcloud.net/tutorial.html";
            };

            $scope.progressPercentage = $scope.barWidth+'%';

            $scope.toDash = function () {
                $window.location.href = "http://deco1800-g51.uqcloud.net/user.html";
            };

            $scope.toIndex = function () {
                $window.location.href = "http://deco1800-g51.uqcloud.net/index.html";
            };
        });
