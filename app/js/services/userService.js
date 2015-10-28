'use strict';

angular
  .module('TruthDetective')
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
        var user = filtered.length ? filtered[0] : null;
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

    function getInfo() {
        var tmp = getUserInfo();
        return tmp;
    }

    function getRecord() {
        var tmp = getFinishTime();
        return tmp;
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

    function finishTut(user) {
        GetByUsername(user.username)
            .then(function () {
                var users = getUsers();
                var chapterInfo = getUserInfo();
                var curUser = GetUser(user.username);
                var userID = curUser.id;
                var tmp = [];
                //avoid adding info when the same user completes a chapter more than once
                for (var i=0;i<chapterInfo.length;i++){
                    if (chapterInfo[i].chapter == 'tutorial'){
                        tmp.push(chapterInfo[i].id);
                    }
                }
                console.log(tmp);
                if (tmp.indexOf(userID) == -1) {
                    // assign id
                    user.id = userID;
                    user.chapter = 'tutorial';
                    user.complete = true;

                    // save to local storage
                    chapterInfo.push(user);
                    setChInfo(chapterInfo);
                    console.log('chapter info after .... ');
                    console.log(chapterInfo);
                    return JSON.parse(localStorage.chapterInfo);
                }
            });
    }

    function finishOne(user) {
        GetByUsername(user.username)
            .then(function () {
                var users = getUsers();
                var chapterInfo = getUserInfo();
                var curUser = GetUser(user.username);
                var userID = curUser.id;
                var tmp = [];
                //avoid adding info when the same user completes a chapter more than once
                for (var i=0;i<chapterInfo.length;i++){
                    if (chapterInfo[i].chapter=='one'){
                        tmp.push(chapterInfo[i].id);
                    }
                }

                if (tmp.indexOf(userID) == -1) {
                    // assign additional info
                    user.id = userID;
                    user.chapter = 'one';
                    user.complete = true;

                    // save to local storage
                    chapterInfo.push(user);
                    setChInfo(chapterInfo);
                    console.log(chapterInfo);
                    return JSON.parse(localStorage.chapterInfo);
                }
            });
    }

    function finishTwo(user) {
        GetByUsername(user.username)
            .then(function () {
                var users = getUsers();
                var chapterInfo = getUserInfo();
                var curUser = GetUser(user.username);
                var userID = curUser.id;
                var tmp = [];
                //avoid adding info when the same user completes a chapter more than once
                for (var i=0;i<chapterInfo.length;i++){
                    if (chapterInfo[i].chapter == 'two'){
                        tmp.push(chapterInfo[i].id);
                    }
                }

                if (tmp.indexOf(userID) == -1) {
                    // assign id
                    user.id = userID;
                    user.chapter = 'two';
                    user.complete = true;

                    // save to local storage
                    chapterInfo.push(user);
                    setChInfo(chapterInfo);
                    console.log(chapterInfo);
                    return JSON.parse(localStorage.chapterInfo);
                }
            });
    }

    function finishThree(user) {
        GetByUsername(user.username)
            .then(function () {
                var users = getUsers();
                var chapterInfo = getUserInfo();
                var curUser = GetUser(user.username);
                var userID = curUser.id;
                var tmp = [];
                //avoid adding info when the same user completes a chapter more than once
                for (var i=0;i<chapterInfo.length;i++){
                    if (chapterInfo[i].chapter == 'three'){
                        tmp.push(chapterInfo[i].id);
                    }
                }

                 if (tmp.indexOf(userID) == -1) {
                     // assign id
                     user.id = userID;
                     user.chapter = 'three';
                     user.complete = true;

                     // save to local storage
                     chapterInfo.push(user);
                     setChInfo(chapterInfo);
                     console.log(chapterInfo);
                     return JSON.parse(localStorage.chapterInfo);
                 }
            });
    }

    function recordFinishTime(duration, username, chapter) {
        var finishTime = new Object();
        var timeInfo = getFinishTime();
        var completed = [];
        var timeInfoBeforeUpdate;
        var currentRecord;
        for (var i=0; i<timeInfo.length; i++){
            if (timeInfo[i].username == username){
                completed.push(timeInfo[i].chapter);
                if (timeInfo[i].chapter == chapter) {
                    currentRecord = timeInfo[i].duration;
                    timeInfoBeforeUpdate = timeInfo[i];
                }
            }
        }
        console.log("current best ..... ")
        console.log(currentRecord)
        if (completed.indexOf(chapter) == -1) {
            finishTime.duration = duration;
            finishTime.username = username;
            finishTime.chapter = chapter;
            timeInfo.push(finishTime);
            setFinishTime(timeInfo);
            console.log(timeInfo);
        } else {
            var currentBest = parseInt(currentRecord.replace(/ /g, '').split(':').join(''),10);
            var latest = parseInt(duration.replace(/ /g, '').split(':').join(''),10);
            if (latest < currentBest) {
                timeInfoBeforeUpdate.duration = duration;
                setFinishTime(timeInfo);
            } else{
                console.log('notttt gonna happen')
            }
        }
    }

    // private functions
    function getUsers() {
        if(!localStorage.users){
            localStorage.users = JSON.stringify([]);
        }
        return JSON.parse(localStorage.users);
    }

    function getUserInfo() {
         if(!localStorage.chapterInfo){
            localStorage.chapterInfo = JSON.stringify([]);
         }
        return JSON.parse(localStorage.chapterInfo);
    }

    function getFinishTime() {
        if(!localStorage.finishTime){
            localStorage.finishTime = JSON.stringify([]);
        }
        return JSON.parse(localStorage.finishTime);
    }

    function setUsers(users) {
        localStorage.users = JSON.stringify(users);
    }

    function setChInfo(userinfo) {
        localStorage.chapterInfo = JSON.stringify(userinfo);
    }

    function setFinishTime(timeinfo) {
        localStorage.finishTime = JSON.stringify(timeinfo);
    }

    var service = {};

    service.GetAll = GetAll;
    service.GetById = GetById;
    service.GetByUsername = GetByUsername;
    service.Create = Create;
    service.Update = Update;
    service.Delete = Delete;
    service.GetUser = GetUser;
    service.finishTut = finishTut;
    service.finishOne = finishOne;
    service.finishTwo = finishTwo;
    service.finishThree = finishThree;
    service.getInfo = getInfo;
    service.recordFinishTime = recordFinishTime;
    service.getRecord = getRecord;

    return service;
}
