var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var suiteDescribe = require('../lib/util');
exports.suiteConfig = suiteDescribe('merge objects', suite, function() {
  suite.add('Object.assign', function () {
    var a = {a: 1}
    var b = {b: 'b'}
    var c = {c: 3}
    Object.assign(a, b, c)
  })

  suite.add('for...in loop and assign', function () {
    var a = {a: 1}
    var b = {b: 'b'}
    var c = {c: 3}

    for (var key in b) {
      // We should ignore the inherited properties
      if (b.hasOwnProperty(key)) {
        a[key] = b[key]
      }
    }

    for (var key in c) {
      if (c.hasOwnProperty(key)) {
        a[key] = c[key]
      }
    }
  })
})
