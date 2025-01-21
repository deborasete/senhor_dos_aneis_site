const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'));
}

function assets() {
    return gulp.src('./src/assets/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/assets'));
}

exports.default = gulp.parallel(styles, assets);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}