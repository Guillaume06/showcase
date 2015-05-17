'use strict';
/**
 * Controller for adding a role
 */
angular.module('pooIhmExemplesApp')
  .controller('RoleAddCtrl', ['$scope', '$http', '$location', 'Users', 'Projects', 'Roles', function ($scope, $http, $location, Users, Projects, Roles) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    Users.getAll(
      // Fonction
      function (data) {
        $scope.utils = data;

        // Fonction
      }, function (data) {
        $scope.error = data;
      });
    Projects.getAll(
      // Fonction
      function (data) {
        $scope.projects = data;

        // Fonction
      }, function (data) {
        $scope.error = data;
      });
    $scope.saveData = function () {
      $scope.role.UserId = $scope.user.id;
      $scope.role.ProjectId = $scope.project.id;
      Roles.add($scope.role,

        // Fonction
        function (data) {
          $scope.result = data;
          $location.path('/' + $scope.role.UserId + '/show');

          // Fonction
        }, function (data) {
          $scope.result = data;
        });
    };
  }]);
