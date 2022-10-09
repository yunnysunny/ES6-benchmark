var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var suiteDescribe = require('../lib/util');
exports.suiteConfig = suiteDescribe('for...of vs forEach vs for...i', suite, function () {
  const a = new Array(50000000).fill(0)
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

  suite.add('Array#for...i', function () {
    const len = a.length;
    for(let i=0;i<len;i++) {
      a[i]
    }
  })
})
