var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var suiteDescribe = require('../lib/util');
exports.suiteConfig = suiteDescribe('spread operator', suite, function() {
  const noop = (a, b, c) => { };

  suite.add('noop(...[1,2,3])', function () {
    noop(...[1,2,3])
  })

  suite.add('noop.apply(null, [1,2,3])', function () {
    noop.apply(null, [1,2,3])
  })
})
