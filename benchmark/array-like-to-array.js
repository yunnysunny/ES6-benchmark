var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var suiteDescribe = require('../lib/util');
exports.suiteConfig = suiteDescribe('array like object to array', suite, function() {
  let a = {
    '0': 'a',
    '1': 'b',
    '2': 'c'
  }
  a.length = 3

  suite.add('Array.from', function () {
    Array.from(a)
  })

  suite.add('Array.prototype.slice.call', function () {
    Array.prototype.slice.call(a)
  })
})
