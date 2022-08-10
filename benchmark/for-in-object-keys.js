var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var suiteDescribe = require('../lib/util');
exports.suiteConfig = suiteDescribe('for...in vs Object.keys()', suite, function () {
  const a = {
    a: 'x',
    b: 'y',
    c: 'z'
  }
  suite.add('for...in', function () {
    for (const key in a) {
      a[key]
    }
  })

  suite.add('Object.keys()', function () {
    const keys = Object.keys(a)
    for(let i=0,len=keys.length;i<len;i++) {
        a[keys[i]]
    }
  })
})
