var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
const Bluebird = require('bluebird')

var suiteDescribe = require('../lib/util');
exports.suiteConfig = suiteDescribe('promise vs bluebird', suite, function() {
  suite.add('promise',{
    defer: true,
    fn: function (deferred) {
      Promise.resolve(1)
        .then((res) => {
          res
          deferred.resolve();
        })
    }
  })

  suite.add('bluebird', {
    defer: true,
    fn: function (deferred) {
      Bluebird.resolve(1)
        .then((res) => {
          res
          deferred.resolve();
        })
    }
  })
})
