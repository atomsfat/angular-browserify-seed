'use strict';
var angular = require('angular');
require('angular-route');


var app = angular.module('myApp', ['ngRoute']);

require('./controllers');
require('./filter');
require('./directives');
// require('./filters.js');
// require('./services.js');

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'view1/view1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'view2/view2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
