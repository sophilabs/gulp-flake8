'use strict';
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
    }

    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-flake8', 'Streaming not supported'));
      return;
    } else {
      file.flake8 = {};
      var onData = function (data) {
        file.flake8.errors = data.toString().trim().replace(/^stdin/g, file.path);
      };
      var onExit = function (code) {
        cb(null, file);
      };
      if (file.isBuffer()) {
        var flake8 = cp.spawn('flake8', ['-']);
        flake8.stdout.on('data', onData);
        flake8.on('exit', onExit);
        flake8.stdin.write(file.contents);
        flake8.stdin.end();
      } else {
        var flake8 = require('child_process').spawn('flake8', [file.path]);
        flake8.stdout.on('data', onData);
        flake8.on('exit', onExit);
      }
    }
  });
};

gulpFlake8.failOnError = function() {
  return through.obj(function (file, enc, cb) {
    if (file.flake8 && !file.flake8.errors) {
      cb(null, file);
      return;
    }
    throw new gutil.PluginError(
      'gulp-flake8',
      {
        name: 'Flake8Error',
        message: file.flake8.errors
      }
    );
  });
};

module.exports = gulpFlake8;
