var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var suiteDescribe = require('../lib/util');
exports.suiteConfig = suiteDescribe('template string vs use +', suite, function () {
  let a = 'a'
  let b = 'b'
  let c = 3
  let d = [4]

  suite.add('template string', function () {
    return `a:${a} b:${b} c:${c} d:${d}`
  })

  suite.add("use +", function () {
    return 'a:' + a + ' b:' + b + ' c:' + c + ' d:' + d
  })
})
