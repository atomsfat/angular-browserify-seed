'use strict';

var app = require('angular').module('myApp');

app.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);
