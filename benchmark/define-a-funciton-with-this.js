var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var suiteDescribe = require('../lib/util');
exports.suiteConfig = suiteDescribe('define a function with inherited this', suite, function() {
  suite.add('function statement with self = this', function () {
    var self = this
    var a = function () {
      self
      return '1'
    }

    a();
  })
  suite.add('function statement with bind', function () {
    var a = function () {
      this
      return '1'
    }.bind(this);

    a();
  })

  suite.add('arrow function () =>', function () {
    var a = () => {
      this
      return '1'
    }

    a();
  })
})
