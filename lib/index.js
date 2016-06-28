'use strict';
var util = require('util');
var path = require('path');
var gutil = require('gulp-util');
var through = require('through2');
var cp = require('child_process');

function gulpFlake8(opts) {
  opts = opts || {};

  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    } else if (file.isStream()) {
      cb(new gutil.PluginError('gulp-flake8', 'Streaming not supported'));
      return;
    }
    file.flake8 = {};
    var flake8 = cp.spawn('flake8', ['-']);
    flake8.stdout.on('data', function (data) {
      file.flake8.errors = data.toString().trim().replace(
        /stdin:/g,
        util.format('%s:', file.path));
    });
    flake8.on('exit', function (code) {
      cb(null, file);
    });
    flake8.stdin.write(file.contents);
    flake8.stdin.end();
  });
};

gulpFlake8.failOnError = function() {
  return through.obj(function (file, enc, cb) {
    if (file.flake8 && !file.flake8.errors) {
      cb(null, file);
      return;
    }
    cb(new gutil.PluginError(
      'gulp-flake8',
      {
        name: 'Flake8Error',
        message: file.flake8.errors
      }
    ));
  });
};

module.exports = gulpFlake8;
