/**
 * Created by MKRL on 10/13/15.
 */
'use strict';

function signupDialogCtrl($scope, $mdDialog, userService, $rootScope, flashService, $location) {
  $scope.cancel = function() {
    $mdDialog.cancel();
  };

  $scope.register = function () {
    console.log('in hereeeeeeeeee')
    //userService.Create(this.user)
    //  .then(function (response){
    //      if (response.success) {
    //        console.log("success");
    //        flashService.Success('Sign up Successful', true);
    //        $location.path('/');
    //      } else {
    //        flashService.Error(response.message);
    //        console.log('errorrrrrrr');
    //
    //      }
    //  });
  };
}

angular.module('truthDetectiveApp')
  .controller('signupCtrl', function($scope, $mdDialog) {
    $scope.showSignup = function (ev) {
      $mdDialog.show({
        controller: signupDialogCtrl,
        templateUrl: 'views/signup.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      });
    };


  });
