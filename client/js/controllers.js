'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('UserlistCtrl', ['$scope', 'Person', function($scope, Person) {
        $scope.personsCount = Person.count(); // add loopback model
        $scope.persons = Person.find();
        $scope.deletePerson = function(person){
            console.log("deletePerson", person);
            var id = person.id;
            Person.deleteById({ id: id })
                .$promise
                .then(function() {
                    for (var i=0; i<$scope.persons.length; i++){
                        if ($scope.persons[i].id == id){
                            $scope.persons.splice(i,1);
                        }
                     }
                    console.log('deleted ',id, person, $scope);
                });
        }
  }])
    .controller('NewuserCtrl', ['$scope', 'Person', function($scope, Person) {
        $scope.username = '';
        $scope.email = '';
        $scope.master = {};
        $scope.save = function(user) {
            $scope.master = angular.copy(user);
            $scope.person = Person.create(user);
            //$scope.person.$save();
            $scope.reset();
        };
        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };
        $scope.reset();
  }]);
