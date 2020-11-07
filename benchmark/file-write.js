var Benchmark = require('benchmark');
const fs = require('fs');
const path = require('path');
var suite = new Benchmark.Suite;


var suiteDescribe = require('../lib/util');
const filename = path.join(__dirname, '../res/test.txt');
const content = 'test content';
exports.suiteConfig = suiteDescribe('fs.writeFile vs fs.createWriteStream vs fs.write', suite, function() {
  suite.add('fs.writeFile',{
    defer: true,
    fn: function (deferred) {
        fs.writeFile(filename, content, function(err) {
            if (err) {
                console.error('write file fail', err);
            }
            deferred.resolve();
        })
    }
  })

  suite.add('fs.createWriteStream', {
    defer: true,
    fn: function (deferred) {
      const stream = fs.createWriteStream(filename);
      stream.end(content, function(err) {
          if (err) {
              console.error('write file fail', err);
          }
          stream.destroy();
          deferred.resolve();
      });
    }
  })
  suite.add('fs.write', {
    defer: true,
    fn: function (deferred) {
      fs.open(filename,'w', function(err, fd) {
          if (err) {
              deferred.resolve();
              return console.error('open file fail', err);
          }
          fs.write(fd, content, function(err) {
              if (err) {
                deferred.resolve();
                return console.error('write file fail', err);
              }
              fs.close(fd, function(err) {
                  if (err) {
                    deferred.resolve();
                    return console.error('close file fail', err);
                  }
                  deferred.resolve();
              });
          });
      });
    }
  })
})
