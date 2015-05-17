'use strict';
/**
 * General controller for the projects
 */
angular.module('pooIhmExemplesApp')
  .controller('ProjectsCtrl', ['$scope', '$http', 'Projects', function ($scope, $http, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getAll = function () {
      Projects.getAll(
        // Fonction
        function (data) {
          $scope.projects = data;
        },
        // Fonction
        function (data) {
          $scope.error = data;
        }
      );
    }

    $scope.delete = function (projectId) {
      Projects.delete(projectId, function (data) {
        $scope.getAll();
      });
    };

    $scope.getAll();
  }])
/**
 * Controller for adding a project
 */
  .controller('ProjectsAddCtrl', ['$scope', '$http', 'Projects', '$location', function ($scope, $http, Projects, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.saveData = function () {
      Projects.add($scope.project,
        function (data) {
          $location.path('/projects/' + data.id + '/show');
        });
    }
  }])

/**
 * Controller for editing a project
 */
  .controller('ProjectsEditCtrl', ['$scope', '$http', '$routeParams', '$location', 'Projects', function ($scope, $http, $routeParams, $location, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.projectId) {
      Projects.get($routeParams.projectId,
        // Fonction
        function (data) {
          $scope.edit = true;
          $scope.project = data;
        },
        // Fonction
        function (data) {
          $scope.error = data;
        });
    }

    $scope.saveData = function () {
      Projects.edit($scope.project,
        // Fonction
        function (data) {
          $location.path('/projects/' + data.id + '/show');
        });
    }
  }])
/**
 * Controller to display the project
 */
  .controller('ProjectsShowCtrl', ['$scope', '$http', '$routeParams', 'Users', 'Projects', function ($scope, $http, $routeParams, Users, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.projectId) {
      $scope.users = new Array();
      Projects.get($routeParams.projectId,
        // Fonction
        function (data) {
          $scope.project = data;

          Projects.getUsers($routeParams.projectId,
            // Fonction
            function (usersData) {
              var users = new Array();
              Projects.getRoles($routeParams.projectId,
                // Fonction
                function (rolesData) {
                  // Parcours des roles
                  for (var i = 0; i < rolesData.length; ++i) {
                    // Parcours des users
                    for (var j = 0; j < usersData.length; ++j) {
                      // Si match
                      if (rolesData[i].UserId === usersData[j].id) {
                        var user = {
                          surname: usersData[j].surname,
                          name: usersData[j].name,
                          role: rolesData[i].name
                        }

                        users.push(user);
                        break;
                      }
                    }
                  }
                  $scope.users = users;
                });
            });

        },
        // Fonction
        function (data) {
          $scope.error = data;
        });
    }
  }]);
