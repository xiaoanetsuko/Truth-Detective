/**
 * Created by MKRL on 10/28/15.
 */
'use strict';
angular.module('TruthDetective')
    .controller('leaderboardCtrl', function ($scope, $rootScope, $localStorage, $window, userService) {
        $scope.c1=[], $scope.c2=[], $scope.c3=[];
        $scope.username = $rootScope.globals.currentUser.username;

        $scope.toDash = function () {
            $window.location.href = "http://deco1800-g51.uqcloud.net/user.html";
        };

        $scope.records = userService.getRecord();
        console.log($scope.records);
        for (var i=0; i<$scope.records.length; i++) {
            var current = $scope.records[i];
            if (current.chapter == 'one'){
                $scope.c1.push(current);
            }
            if (current.chapter == 'two'){
                $scope.c2.push(current);
            }
            if (current.chapter == 'three'){
                $scope.c3.push(current);
            }
        }
    });