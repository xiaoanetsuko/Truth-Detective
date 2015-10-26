/**
 * Created by MKRL on 10/25/15.
 */
angular.module('TruthDetective')
    .controller('testCtrl', function ($scope, $rootScope, $localStorage, $window, userService) {
        console.log($rootScope.globals);
        $scope.username = $rootScope.globals.currentUser.username;
        var user = userService.GetUser($scope.username);

        $scope.completeTut = function () {
            console.log("current user name ---- ");
            console.log($scope.username);
            console.log("localstorage.user --- ");
            console.log($localStorage.user);
            userService.GetByUsername($rootScope.globals.currentUser.username);
            userService.finishTut(user);

            console.log("chapterInfo as JSON ..... ");
            var tmp = userService.getInfo();
            console.log(tmp);
            $window.location.href = "http://deco1800-g51.uqcloud.net/chapter1.html";
        };
        $scope.completeTutGoBack = function () {
            userService.GetByUsername($rootScope.globals.currentUser.username);
            //console.log(userService.GetByUsername($scope.username));
            userService.finishTut(user);

            $window.location.href = "http://deco1800-g51.uqcloud.net/user.html";
        };

        $scope.completeOne = function () {
            console.log("current user name ---- ");
            console.log($scope.username);
            console.log("localstorage.user --- ");
            console.log($localStorage.user);
            userService.GetByUsername($rootScope.globals.currentUser.username);
            //console.log(userService.GetByUsername($scope.username));
            userService.finishOne(user);

            console.log("chapterInfo as JSON ..... ");
            var tmp = userService.getInfo();
            console.log(tmp);
            $window.location.href = "http://deco1800-g51.uqcloud.net/chapter2.html";
        };
        $scope.completeOneGoBack = function () {
            userService.GetByUsername($rootScope.globals.currentUser.username);
            //console.log(userService.GetByUsername($scope.username));
            userService.finishOne(user);

            $window.location.href = "http://deco1800-g51.uqcloud.net/user.html";
        };

        $scope.completeTwo = function () {
            console.log("current user name ---- ");
            console.log($scope.username);
            console.log("localstorage.user --- ");
            console.log($localStorage.user);
            userService.GetByUsername($rootScope.globals.currentUser.username);
            //console.log(userService.GetByUsername($scope.username));
            userService.finishTwo(user);

            console.log("chapterInfo as JSON ..... ");
            var tmp = userService.getInfo();
            console.log(tmp);
            $window.location.href = "http://deco1800-g51.uqcloud.net/chapter3.html";
        };
        $scope.completeTwoGoBack = function () {
            userService.GetByUsername($rootScope.globals.currentUser.username);
            //console.log(userService.GetByUsername($scope.username));
            userService.finishTwo(user);

            $window.location.href = "http://deco1800-g51.uqcloud.net/user.html";
        };

        $scope.completeThreeGoBack = function () {
            userService.GetByUsername($rootScope.globals.currentUser.username);
            //console.log(userService.GetByUsername($scope.username));
            userService.finishThree(user);

            $window.location.href = "http://deco1800-g51.uqcloud.net/user.html";
        };
    });