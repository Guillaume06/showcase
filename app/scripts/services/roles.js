'use strict';
/**
 * Functions for the roles
 */
angular.module('pooIhmExemplesApp')
  .service('Roles', ['$http', function Roles($http) {


    // Get all the oles for the user, passed in parameter
    this.getByUser = function (userId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + userId + '/Roles')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    // Return the role of the id
    this.get = function (roleId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/' + roleId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    // Add a role for a specific project
    this.addRole = function (projId, userId, successCB, errorCB) {
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projId + '/Users/' + userId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }
    // Add a new role
    this.add = function (role, successCB, errorCB) {
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/', role)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    // Return all the users that currently have this project
    this.getByProject = function (projId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projId + '/Roles')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    // Edit the role
    this.edit = function (role, successCB, errorCB) {
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/' + role.id, role)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }
  }]);
