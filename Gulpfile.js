'use strict';
var gulp = require('gulp');
var jslint = require('gulp-jslint');

gulp.task('jslint', function () {
  return gulp.src(['./app.js', 'controllers/*.js', 'models/*.js', 'client/scripts/*.js'])
      .pipe(jslint({
        node: true,
        vars: true,
        unparam: true,
        nomen: true,
        white: true,
        evil: true,
        errorsOnly: false,
        plusplus: true,
        bitwise: true,
        todo: true,
        stupid: true,
        global: [ 'angular' ]
      }));
});

gulp.task('default', ['jslint']);