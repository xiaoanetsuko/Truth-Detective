'use strict';

angular
  .module('truthDetectiveApp')
  .factory('userService', userService);

userService.$inject = ['$timeout', '$filter', '$q'];
function userService($timeout, $filter, $q) {

    function GetAll() {
        var deferred = $q.defer();
        deferred.resolve(getUsers());
        return deferred.promise;
    }

    function GetById(id) {
        var deferred = $q.defer();
        var filtered = $filter('filter')(getUsers(), { id: id });
        var user = filtered.length ? filtered[0] : null;
        deferred.resolve(user);
        return deferred.promise;
    }

    function GetByUsername(username) {
        var deferred = $q.defer();
        var filtered = $filter('filter')(getUsers(), { username: username });
        console.log("filtered result --- "+filtered);
        var user = filtered.length ? filtered[0] : null;   //TODO PROBLEM HERE
        //for (var i=0; i<filtered.length; i++) {
        //    console.log(filtered[i].username);
        //
        //    //if (filtered[i].username === username) {
        //    //    console.log(filtered[i]);
        //    //    return filtered[i];
        //    //}
        //}
        deferred.resolve(user);
        console.log(user);
        return deferred.promise;
    }

    function GetUser(username) {
        var filtered = $filter('filter')(getUsers(), { username: username });
        var user = filtered.length ? filtered[0] : null;

        return user;
    }

    function Create(user) {
        var deferred = $q.defer();

        // simulate api call with $timeout
        $timeout(function () {
            GetByUsername(user.username)
                .then(function (duplicateUser) {
                    if (duplicateUser !== null) {
                        console.log('username duplicate');
                        deferred.resolve({ success: false, message: 'Username "' + user.username + '" is already taken' });
                    } else {
                        var users = getUsers();

                        // assign id
                        var lastUser = users[users.length - 1] || { id: 0 };
                        user.id = lastUser.id + 1;

                        // save to local storage
                        users.push(user);
                        setUsers(users);
                        console.log(users);
                        deferred.resolve({ success: true });
                    }
              });
        }, 1000);

      return deferred.promise;
    }

    function Update(user) {
        var deferred = $q.defer();

        var users = getUsers();
        for (var i = 0; i < users.length; i++) {
            if (users[i].id === user.id) {
                users[i] = user;
                break;
            }
        }
        setUsers(users);
        deferred.resolve();

        return deferred.promise;
    }

    function Delete(id) {
        var deferred = $q.defer();

        var users = getUsers();
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            if (user.id === id) {
              users.splice(i, 1);
              break;
            }
        }
        setUsers(users);
        deferred.resolve();

        return deferred.promise;
    }

    function finishFirst(user) {
        var deferred = $q.defer();
        $timeout(function () {
            GetByUsername(user.username)
                .then(function () {

                    var users = getUsers();
                    var firstChInfo = getUserInfo();

                    var curUser = GetUser(user.username);
                    console.log(curUser);
                    var userID = curUser.id;

                    // assign id
                    user.id = userID;
                    user.chapter = 'first';
                    user.complete = true;

                    // save to local storage
                    firstChInfo.push(user);
                    setFirstCh(firstChInfo);
                    console.log(firstChInfo);
                    deferred.resolve({ success: true });

                });
        }, 1000);

      return deferred.promise;

    }

    // private functions

    function getUsers() {
        if(!localStorage.users){
            localStorage.users = JSON.stringify([]);

        }

        return JSON.parse(localStorage.users);
    }

    function getUserInfo() {
         if(!localStorage.firstChInfo){
            localStorage.firstChInfo = JSON.stringify([]);
         }
        return JSON.parse(localStorage.firstChInfo);
    }

    function setUsers(users) {
        localStorage.users = JSON.stringify(users);
    }

    function setFirstCh(userinfo) {
        localStorage.firstChInfo = JSON.stringify(userinfo);

        console.log(localStorage.firstChInfo);
    }

    var service = {};

    service.GetAll = GetAll;
    service.GetById = GetById;
    service.GetByUsername = GetByUsername;
    service.Create = Create;
    service.Update = Update;
    service.Delete = Delete;
    service.GetUser = GetUser;
    service.finishFirst = finishFirst;

    return service;
}
