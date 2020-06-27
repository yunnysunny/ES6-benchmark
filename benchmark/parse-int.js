var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var suiteDescribe = require('../lib/util');
exports.suiteConfig = suiteDescribe('global.parseInt() vs Number.parseInt()', suite, function () {
  suite.add('global.parseInt()', function () {
    parseInt('10', 10)
  })

  suite.add('Number.parseInt()', function () {
    Number.parseInt('10', 10)
  })
})
