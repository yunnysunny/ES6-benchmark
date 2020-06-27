var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var suiteDescribe = require('../lib/util');
exports.suiteConfig = suiteDescribe('rest parameter vs normal parameter', suite, function () {
  function a(left, ...param) {

  }
  function b(a,b,c,d,left) {

  }
  suite.add('call function with rest parameter', function () {
    a(1,2,3,4,5)
  })

  suite.add('call function with normal parameter', function () {
    b(1,2,3,4,5)
  })
})
