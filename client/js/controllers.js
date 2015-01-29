'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MyCtrl1', ['$scope', 'Person', function($scope, Person) {
        $scope.persons = Person.count(); // add loopback model
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
