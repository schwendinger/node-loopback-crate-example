'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'lbServices',
    'myApp.directives',
    'myApp.controllers'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/userlist',
                            {templateUrl: 'partials/userlist.html',
                             controller: 'UserlistCtrl'});
        $routeProvider.when('/newuser',
                            {templateUrl:
                             'partials/newuser.html',
                             controller: 'NewuserCtrl'});
        $routeProvider.otherwise({redirectTo: '/userlist'});
    }]);
