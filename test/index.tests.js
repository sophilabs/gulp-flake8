'use strict';

var gulpFlake8 = require('../lib');
var should = require('should');
var File = require('vinyl');

require('mocha');

describe('gulp-flake8 failOnError', function() {
  it('should fail a file immediately if an error is found', function(done) {
    var lintStream = gulpFlake8();

    function endWithoutError() {
      done(new Error('An error was not thrown before ending'));
    }

    lintStream.pipe(gulpFlake8.failOnError())
    .on('error', function(err) {
      this.removeListener('finish', endWithoutError);
      should.exists(err);
      err.message.should.equal('test/fixtures/invalid.py:1:1: F401 \'gulp\' imported but unused');
      err.plugin.should.equal('gulp-flake8');
      done();
    })
    .on('finish', endWithoutError);

    lintStream.write(new File({
      path: 'test/fixtures/invalid.py',
      contents: new Buffer('import gulp\n')
    }));

    lintStream.end();
  });
});
