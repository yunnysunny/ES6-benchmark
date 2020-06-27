var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
const async = require('async');
const neoAsync = require('neo-async');

var suiteDescribe = require('../lib/util');
exports.suiteConfig = suiteDescribe('es6 async vs async.js', suite, function() {
  const promises = [Promise.resolve(1), Promise.resolve(1), Promise.resolve(1)];
  suite.add('es6 async',{
    defer: true,
    fn: async function (deferred) {
      
        await promises[0];
        await promises[1];
        await promises[2];
        deferred.resolve();
    }
  })

  suite.add('async.js', {
    defer: true,
    fn: function (deferred) {
      async.waterfall([
        function(next) {
          promises[0].then(function() {
            next();
          });
        },
        function(next) {
          promises[1].then(function() {
            next();
          });
        },
        function(next) {
          promises[2].then(function() {
            next();
          });
        },
      ],function() {
        deferred.resolve();
      });
    }
  })
  suite.add('callback',{
    defer: true,
    fn: function(deferred) {
      promises[0].then(function() {
        promises[1].then(function() {
          promises[2].then(function() {
            deferred.resolve();
          });
        });
      });
    }
  });
  suite.add('neo-async.js', {
    defer: true,
    fn: function (deferred) {
      neoAsync.waterfall([
        function(next) {
          promises[0].then(function() {
            next();
          });
        },
        function(next) {
          promises[1].then(function() {
            next();
          });
        },
        function(next) {
          promises[2].then(function() {
            next();
          });
        },
      ],function() {
        deferred.resolve();
      });
    }
  })
})
