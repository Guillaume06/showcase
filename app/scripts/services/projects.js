'use strict';

/**
 General functins for projects
 */
angular.module('pooIhmExemplesApp')
  .service('Projects', ['$http', function Projects($http) {
    // Add the new project
    this.add = function (project, successCB, errorCB) {
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/', project)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };
    // Get all
    this.getAll = function (successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };


    // Delete the project
    this.delete = function (projId, successCB, errorCB) {
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };
    // Get all the users that currently have this project
    this.getUsers = function (projectId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projectId + '/Users/')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };
    // Edit the current project
    this.edit = function (project, successCB, errorCB) {
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + project.id, project)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };


    // Get roles by project id
    this.getRoles = function (projectId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projectId + '/Roles/')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };
    // Get one project by id
    this.get = function (projetId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projetId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };

  }]);
