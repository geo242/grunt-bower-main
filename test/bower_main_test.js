'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.bower_main = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    copy: function (test) {
        test.expect(2);

        test.ok(grunt.file.exists('copyTmp/jquery/dist/jquery.js'), 'the jquery.js dep should be present.');
        test.ok(!grunt.file.exists('copyTmp/jquery/src'), 'the jquery source code should not be present.');

        test.done();
    },
    prune: function (test) {
        test.expect(2);

        test.ok(grunt.file.exists('bower_components/jquery/dist/jquery.js'), 'the jquery.js dep should be present.');
        test.ok(!grunt.file.exists('bower_components/jquery/src'), 'the jquery source code should not be present.');

        test.done();
    }
};
