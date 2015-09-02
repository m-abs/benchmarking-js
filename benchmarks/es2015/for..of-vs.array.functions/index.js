'use strict';

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var a = [1,2,3,4,5,6];

suite
  .add('for..of', {
      'fn': function() {
        var sum = 0;
        for (var v of a) {
          sum += v;
        }
      }
  })
  .add('forEach', {
      'fn': function() {
        var sum = 0;

        a.forEach(function(v) {
          sum += v;
        });
      }
  })
  .add('map', {
      'fn': function() {
        var sum = 0;

        a.map(function(v) {
          sum += v;
        });
      }
  })
  .add('reduce', {
      'fn': function() {
        var sum = a.reduce(function(sum, v) {
          sum += v;
          return sum;
        }, 0);
      }
  })
  .on('cycle', function(event) {
    console.log(event);
      console.log(String(event.target));
  })
  .on('complete', function() {
      console.log('Fastest is ' + this.filter('fastest').pluck('name'));
  })
  .run( {
    async: true
  } );
