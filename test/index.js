var testContext = require.context('.', true, /.+\Test\.js?$/);
testContext.keys().forEach(testContext);

// uncomment to generate coverage report
// generate coverage will slow down test
// var libContext = require.context('..', true, /\.\/lib.+\.js?$/);
// libContext.keys().forEach(libContext);
