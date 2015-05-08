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
        $routeProvider.when('/hello',
                            {templateUrl: 'partials/hello.html',
                             controller: 'HelloCtrl' });
        $routeProvider.when('/user/:id',
                            {templateUrl: 'partials/user.html',
                            controller:'UserCtrl'});
        $routeProvider.otherwise({redirectTo: '/hello'});
    }]);
