/**
 * Created by MKRL on 10/13/15.
 */
'use strict';

angular
  .module('TruthDetective')
  .factory('flashService', flashService);

flashService.$inject = ['$rootScope'];
function flashService($rootScope) {

  function initService() {
    $rootScope.$on('$locationChangeStart', function () {
      clearFlashMessage();
    });

    function clearFlashMessage() {
      var flash = $rootScope.flash;
      if (flash) {
        if (!flash.keepAfterLocationChange) {
          delete $rootScope.flash;
        } else {
          // only keep for a single location change
          flash.keepAfterLocationChange = false;
        }
      }
    }
  }

  function Success(message, keepAfterLocationChange) {
    $rootScope.flash = {
      message: message,
      type: 'success',
      keepAfterLocationChange: keepAfterLocationChange
    };
  }

  function Error(message, keepAfterLocationChange) {
    $rootScope.flash = {
      message: message,
      type: 'error',
      keepAfterLocationChange: keepAfterLocationChange
    };
  }

  var service = {};

  service.Success = Success;
  service.Error = Error;

  initService();

  return service;


}
