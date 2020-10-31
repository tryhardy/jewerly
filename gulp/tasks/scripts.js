const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');

// Работа со скриптами
const scripts = [
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/slick-carousel/slick/slick.min.js',
  'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
  'dev/static/js/main.js'
];

module.exports = function script() {
  return gulp.src(scripts)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulpif(argv.prod, uglify()))
    .pipe(gulp.dest('dist/static/js/'));
};
