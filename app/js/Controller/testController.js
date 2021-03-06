/**
 * Created by MKRL on 10/25/15.
 */
angular.module('TruthDetective')
    .controller('testCtrl', function ($scope, $rootScope, $localStorage, $window, userService) {
        $scope.username = $rootScope.globals.currentUser.username;
        var user = userService.GetUser($scope.username);

        $scope.toDash = function () {
            $window.location.href = "http://deco1800-g51.uqcloud.net/user.html";
        };

        $scope.toIndex = function () {
            $window.location.href = "http://deco1800-g51.uqcloud.net/index.html";
        };

        $scope.toLB = function () {
            $window.location.href = "http://deco1800-g51.uqcloud.net/leaderboard.html";
        };

        $scope.completeTut = function () {
            //userService.GetByUsername($rootScope.globals.currentUser.username);
            var timeUsed = document.getElementById("recordTime").innerHTML;
            userService.recordFinishTime(timeUsed, $scope.username, 'tutorial');
            userService.finishTut(user);

            var tmp = userService.getInfo();

            $window.location.href = "http://deco1800-g51.uqcloud.net/chapter1.html";
        };
        $scope.completeTutGoBack = function () {
            //userService.GetByUsername($rootScope.globals.currentUser.username);
            //console.log(userService.GetByUsername($scope.username));
            var timeUsed = document.getElementById("recordTime").innerHTML;
            userService.recordFinishTime(timeUsed, $scope.username, 'tutorial');
            userService.finishTut(user);

            $window.location.href = "http://deco1800-g51.uqcloud.net/user.html";
        };

        $scope.completeOne = function () {
            //userService.GetByUsername($rootScope.globals.currentUser.username);
            //console.log(userService.GetByUsername($scope.username));
            var timeUsed = document.getElementById("recordTime").innerHTML;
            userService.recordFinishTime(timeUsed, $scope.username, 'one');
            userService.finishOne(user);

            $window.location.href = "http://deco1800-g51.uqcloud.net/chapter2.html";
        };
        $scope.completeOneGoBack = function () {
            //userService.GetByUsername($rootScope.globals.currentUser.username);
            //console.log(userService.GetByUsername($scope.username));
            var timeUsed = document.getElementById("recordTime").innerHTML;
            userService.recordFinishTime(timeUsed, $scope.username, 'one');
            userService.finishOne(user);

            $window.location.href = "http://deco1800-g51.uqcloud.net/user.html";
        };

        $scope.completeTwo = function () {
            //userService.GetByUsername($rootScope.globals.currentUser.username);
            //console.log(userService.GetByUsername($scope.username));
            var timeUsed = document.getElementById("recordTime").innerHTML;
            userService.recordFinishTime(timeUsed, $scope.username, 'two');
            userService.finishTwo(user);

            $window.location.href = "http://deco1800-g51.uqcloud.net/chapter3.html";
        };
        $scope.completeTwoGoBack = function () {
            //userService.GetByUsername($rootScope.globals.currentUser.username);
            var timeUsed = document.getElementById("recordTime").innerHTML;
            userService.recordFinishTime(timeUsed, $scope.username, 'two');
            userService.finishTwo(user);

            $window.location.href = "http://deco1800-g51.uqcloud.net/user.html";
        };

        $scope.completeThreeGoBack = function () {
            //userService.GetByUsername($rootScope.globals.currentUser.username);
            var timeUsed = document.getElementById("recordTime").innerHTML;
            userService.recordFinishTime(timeUsed, $scope.username, 'three');
            userService.finishThree(user);

            $window.location.href = "http://deco1800-g51.uqcloud.net/user.html";
        };
    });