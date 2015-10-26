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
            //console.log(userService.GetByUsername($scope.username));
            if ($scope.username == $localStorage.user) {
                $localStorage.first = true;
            }
            userService.finishTut(user);

            console.log("FirstInfo as JSON ..... ");
            var tmp = userService.getInfo();
            console.log(tmp);
            //console.log($localStorage.second);
        };
        $scope.completeTutGoBack = function () {
            userService.GetByUsername($rootScope.globals.currentUser.username);
            //console.log(userService.GetByUsername($scope.username));
            if ($scope.username == $localStorage.user) {
                $localStorage.first = true;
            }
            userService.finishTut(user);

            console.log($localStorage.first);
            $window.location.href = "http://deco1800-g51.uqcloud.net/user.html";
            //console.log($localStorage.second);
        };

    });