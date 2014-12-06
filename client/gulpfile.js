'use strict';
var gulp = require('gulp');
var jslint = require('gulp-jslint');
var browserSync = require('browser-sync');

var paths = {
  libs: 'lib/**/*.js',
  scripts: 'scripts/**/*.js',
  templates: 'scripts/**/*.html'
};

gulp.task('jslint', function () {
  return gulp.src(['./app.js', 'scripts/**/*.js'])
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
        stupid: true
      }));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['jslint']);
  gulp.watch(paths.libs, ['jslint']);
  gulp.watch(paths.templates, []);
});

gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: "."
        }
    });
});

gulp.task('default', ['jslint', 'watch', 'serve']);