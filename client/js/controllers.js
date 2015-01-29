'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MyCtrl1', ['$scope', 'Person', function($scope, Person) {
        $scope.personsCount = Person.count(); // add loopback model
        $scope.persons = Person.find();
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
