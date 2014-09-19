require('angular');
require('angular-route');
require('./controllers.js');
require('./directives.js');
require('./filters.js');
require('./services.js');
'use strict';

console.log(angular);
// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'view1/view1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'view2/view2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
