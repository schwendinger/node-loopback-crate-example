'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('UserlistCtrl', ['$scope', 'Person', function($scope, Person) {
        $scope.personsCount = Person.count(); // add loopback model
        $scope.persons = Person.find();
        $scope.deletePerson = function(person){
            console.log("deletePerson", person);
        }
  }])
    .controller('NewuserCtrl', ['$scope', 'Person', function($scope, Person) {
        $scope.master = {};
        $scope.save = function(user) {
            $scope.master = angular.copy(user);
            $scope.person = Person.create(user);
            $scope.person.$save();
        };
        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };
        $scope.reset();
  }]);
