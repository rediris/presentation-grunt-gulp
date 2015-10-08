// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke');

//var cube = require('bespoke-theme-cube');
var nebula = require('bespoke-theme-nebula');
var keys = require('bespoke-keys');
var touch = require('bespoke-touch');
var pdf = require('bespoke-pdf');
var bullets = require('bespoke-bullets');
var backdrop = require('bespoke-backdrop');
var scale = require('bespoke-scale');
var hash = require('bespoke-hash');
var progress = require('bespoke-progress');

// Bespoke.js
bespoke.from('article', [

  //cube(),
  nebula(),
  keys(),
  touch(),

  //pdf(),
  bullets('.pause-list li, .pause'),
  backdrop(),
  scale(),
  hash(),
  progress(),
]);

// Prism syntax highlighting
require('prism');
