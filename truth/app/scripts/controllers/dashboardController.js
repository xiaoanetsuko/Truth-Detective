/**
 * Created by MKRL on 10/14/15.
 */
'use strict';

angular.module('truthDetectiveApp')
        .controller('dashboardCtrl', function ($scope, $rootScope) {
            $scope.username = $rootScope.globals.currentUser.username;
  });
