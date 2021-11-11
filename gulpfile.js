const { watch, series } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var paths = {
    styles: {
        src: 'components/**/*.scss',
        dest: 'components'
    }
}

function compSass() {
  return gulp.src(['./components/**/*.scss', './styles/base.scss', './styles/vendors.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(paths.styles.dest))
};

function clean(cb) {
  // body omitted
  cb();
}

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}


exports.compSass = compSass;
exports.default = function() {
  // You can use a single task
  watch('src/*.css', css);
  // Or a composed task
  // watch('src/*.js', series(clean, javascript));
};