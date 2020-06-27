var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var suiteDescribe = require('../lib/util');
exports.suiteConfig = suiteDescribe('String#repeat() vs polyfill', suite, function () {
  const a = 'abcd'

  suite.add('String#repeat', function () {
    a.repeat(100)
  })

  suite.add('use Array#join trick', function () {
    new Array(100 + 1).join(a)
  })
})
