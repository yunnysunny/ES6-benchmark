module.exports = function(desc, suite, fns) {
    return function() {
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