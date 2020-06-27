var hasOnly = false;
module.exports = function(desc, suite, fns, {skip=false,only=false}={}) {
    if (skip) {
        return null;
    }
    return {
        only,
        task: function() {
            return new Promise(function(resolve, reject) {
                console.info(desc);
                fns();
                // add listeners
                suite.on('cycle', function(event) {
                    console.info('\t' + String(event.target));
                })
                .on('complete', function() {
                    console.info('Fastest is ' + this.filter('fastest').map('name'));
                    console.log();
                    resolve();
                })
                // run async
                .run({ 'async': true });
            });
        }
    };
};