var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var suiteDescribe = require('../lib/util');
exports.suiteConfig = suiteDescribe('string starts with', suite, function() {
  let a = 'abcdefghijklmnopqrstuvwxyz1234567890'
  suite.add('string.startsWith(value)', function () {
    a.startsWith('abcdefg')
  })

  suite.add('use regexp', function () {
    /^abcdefg/.test(a)
  })
})
