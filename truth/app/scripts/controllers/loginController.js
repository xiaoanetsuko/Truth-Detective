/**
 * Created by MKRL on 9/21/15.
 */
'use strict';

function dialogCtrl($scope, $mdDialog) {
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
}

angular.module('truthDetectiveApp')
    .controller('loginCtrl', function($scope, $mdDialog) {
        $scope.showLogin = function(ev) {
            $mdDialog.show({
                controller: dialogCtrl,
                templateUrl: 'views/login.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true
            });
        };

    });
