/**
 * Created by MKRL on 10/14/15.
 */
'use strict';

angular.module('TruthDetective')
        .controller('dashboardCtrl', function ($scope, $rootScope, userService, $localStorage) {
            console.log("globals.....");
            console.log($rootScope.globals);
            console.log($localStorage);
            $scope.username = $rootScope.globals.currentUser.username;

            $scope.completeFirst = function () {
                userService.GetByUsername($rootScope.globals.currentUser.username);
                //console.log(userService.GetByUsername($scope.username));

                var user = userService.GetUser($scope.username);

                if ($scope.username == $localStorage.user) {
                    $localStorage.first = true;
                }
                userService.finishFirst(user);
                //console.log($localStorage.first);
                //console.log($localStorage.second);

            };
  });
