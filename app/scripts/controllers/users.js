'use strict';

/**
 * General controller for the users
 */
angular.module('pooIhmExemplesApp')


/**
 *Controller for adding a user
 */
  .controller('UserAddCtrl', ['$scope', '$http', '$location', 'Users', function ($scope, $http, $location, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sendData = function () {
      Users.add($scope.user,

        // Fonction
        function (data) {
          $location.path('/' + data.id + '/show');
        },

        // Fonction
        function () {
          $scope.error = data;
        });
    };
  }])
/**
 * Controller for display a user
 */
  .controller('UserShowCtrl', ['$scope', '$http', '$routeParams', 'Users', function ($scope, $http, $routeParams, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.userId) {
      Users.get($routeParams.userId,

        // Fonction
        function (data) {
          $scope.user = data;
          var projectData = new Array();
          Users.getProj($routeParams.userId,

            // Fonction
            function (data) {
              projectData = data;
              var rolesData = new Array();
              Users.getRoles($routeParams.userId,

                // Fonction
                function (data) {
                  rolesData = data;

                  //Parcours des données des rôles
                  for (var i = 0; i < rolesData.length; ++i) {

                    //Parcours des données des projets
                    for (var j = 0; j < projectData.length; ++j) {

                      // Si ça match
                      if (rolesData[i].ProjectId === projectData[j].id) {
                        rolesData[i].title = projectData[j].title;
                        rolesData[i].description = projectData[j].description;
                        break;
                      }
                    }
                  }
                  $scope.projects = rolesData;
                }, function (data) {
                })
            }, function (data) {
            })
        },
        function (data) {
          $scope.error = data;
        });
    }
  }])
/**
 * Controller for editing a user
 */
  .controller('UserEditCtrl', ['$scope', '$http', '$routeParams', '$location', 'Users', function ($scope, $http, $routeParams, $location, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.userId) {
      Users.get($routeParams.userId,

        // Fonction
        function (data) {
          $scope.edit = true;
          $scope.user = data;
        },

        // Fonction
        function (data) {
          $scope.error = data;
        });
    }
    $scope.saveData = function () {
      Users.edit($scope.user,
        // Fonction
        function (data) {
          $location.path('/users/' + data.id + '/add');
        });
    }

  }])
/**
 * Main controller for user
 */
  .controller('UserCtrl', ['$scope', '$http', 'Users', function ($scope, $http, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getAll = function () {
      Users.getAll(
        // Fonction
        function (data) {
          $scope.users = data;
        },

        // Fonction
        function (data) {
          $scope.error = data;
        });
    }

    $scope.delete = function (userId) {

      // Fonction
      Users.delete(userId, function (data) {
        $scope.getAll();
      });
    };

    $scope.getAll();
  }]);
