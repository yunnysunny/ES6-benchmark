var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var suiteDescribe = require('../lib/util');
exports.suiteConfig = suiteDescribe('var let const', suite, function() {
  suite.add('var', function () {
    var a = 'a'
  })

  suite.add('let', function () {
    let a = 'a'
  })

  suite.add('const', function () {
    const a = 'a'
  })
})
