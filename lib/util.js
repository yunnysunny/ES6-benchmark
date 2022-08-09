var path = require('path');
var hasOnly = false;
var nodeVersion= process.versions.node.split('.')[0];
var slogger = require('node-slogger').init({
    disableTimePrefix: true,
    disableLevelPrefix: true,
    logFiles:[
        {
            category:'info',
            filename:path.join(__dirname , '../public/' + nodeVersion + '.result.log')
        }
    ]
});
module.exports = function(desc, suite, fns, {skip=false,only=false}={}) {
    if (skip) {
        return null;
    }
    return {
        only,
        task: function() {
            return new Promise(function(resolve, reject) {
                slogger.info(desc);
                fns();
                // add listeners
                suite.on('cycle', function(event) {
                    slogger.info('\t' + String(event.target));
                })
                .on('complete', function() {
                    slogger.info('Fastest is ' + this.filter('fastest').map('name'));
                    slogger.info();
                    resolve();
                })
                // run async
                .run({ 'async': true });
            });
        }
    };
};