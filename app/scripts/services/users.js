'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .service('Users', ['$http', function Users($http) {
    // Add the new user
    this.add = function (user, successCB, errorCB) {
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users', user)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };
    /// Get all the users
    this.getAll = function (successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };

    // Edit the current user
    this.edit = function (user, successCB, errorCB) {
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + user.id, user)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };
    // Get all the roles the user have for all his current projects
    this.getRoles = function (userId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + userId + '/Roles/')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };
    // Get the current user
    this.get = function (userId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + userId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };
    // Delete the current user
    this.delete = function (userId, successCB, errorCB) {
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + userId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };
    // Get all the projects the user currently have
    this.getProj = function (userId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + userId + '/Projects/')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };

  }]);
