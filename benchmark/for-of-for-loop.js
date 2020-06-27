var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var suiteDescribe = require('../lib/util');
exports.suiteConfig = suiteDescribe('for...of vs forEach', suite, function () {
  const a = new Array(50).fill(0)
  suite.add('for...of', function () {
    for (let elem of a) {
      elem
    }
  })

  suite.add('Array#forEach', function () {
    a.forEach(function(elem) {
      elem
    })
  })
})
