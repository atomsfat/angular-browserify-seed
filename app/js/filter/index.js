'use strict'
var modulo = require('angular').module('myApp.version.interpolate-filter', []);

modulo.filter('interpolate', ['version', require('./version-interpolate.js')]);
