'use strict';


// Declare app level module which depends on filters, and services
angular.module('chensKitchen', [
  'ngRoute',
  'chensKitchen.filters',
  'chensKitchen.services',
  'chensKitchen.directives',
  'chensKitchen.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/menu', {templateUrl: 'partials/menu.html', controller: 'MenuCtrl'});
  $routeProvider.when('/plate', {templateUrl: 'partials/plate.html', controller: 'PlateCtrl'});
  $routeProvider.when('/editOrder', {templateUrl: 'partials/editOrder.html', controller: 'PlateCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

