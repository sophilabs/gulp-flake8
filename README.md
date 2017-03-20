# Gulp Flake8

[![travis][travis-image]][travis-url]
[![coverage][coveralls-image]][coveralls-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]
[![js-semistandard-style][semi-image]][semi-url]
[![license][license-image]][license-url]
[![dependencies][dependencies-image]][dependencies-url]
[![dev-dependencies][dev-dependencies-image]][dev-dependencies-url]

Gulp task for flake8.

## Installation

```bash
npm install gulp-flake8
```

## Usage

```javascript
var gulp = require('gulp');
var gulpFlake8 = require('gulp-flake8');

gulp.task('isort', function () {
  return gulp.src('**/*')
    .pipe(gulpFlake8())
    .pipe(gulpFlake8.failOnError());
});
```

## License

Gulp Flake8 is Copyright (c) 2016 sophilabs, inc. It is free software, and may be
redistributed under the terms specified in the [license] file.

## About

[![sophilabs][sophilabs-image]][sophilabs-url]

Gulp Flake8 is maintained and funded by sophilabs, inc. The names and logos for
sophilabs are trademarks of sophilabs, inc.

[license]: /LICENSE
[sophilabs-image]: https://s3.amazonaws.com/sophilabs-assets/logo/logo_300x66.gif
[sophilabs-url]: https://sophilabs.co
[travis-image]: https://img.shields.io/travis/sophilabs/gulp-flake8.svg?style=flat-square
[travis-url]: https://travis-ci.org/sophilabs/gulp-flake8
[npm-image]: https://img.shields.io/npm/v/gulp-flake8.svg?style=flat-square
[npm-url]: https://npmjs.org/packge/gulp-flake8
[downloads-image]: https://img.shields.io/npm/dm/gulp-flake8.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/gulp-flake8
[semi-image]: https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square
[semi-url]: https://github.com/Flet/semistandard
[coveralls-image]: https://img.shields.io/coveralls/sophilabs/gulp-flake8.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/sophilabs/gulp-flake8?branch=master
[license-image]: https://img.shields.io/github/license/sophilabs/gulp-flake8.svg?style=flat-square
[license-url]: /LICENSE
[dependencies-image]: https://david-dm.org/sophilabs/gulp-flake8.svg?style=flat-square
[dependencies-url]: https://david-dm.org/sophilabs/gulp-flake8
[dev-dependencies-image]: https://david-dm.org/sophilabs/gulp-flake8/dev-status.svg?style=flat-square
[dev-dependencies-url]: https://david-dm.org/sophilabs/gulp-flake8#info=devDependencies
