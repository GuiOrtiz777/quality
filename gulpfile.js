//Variables
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');

//compress Js Task
gulp.task('compressjs', function(){
    gulp.src(['assets/js/*.js'])
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('assets/minjs'));
});

//Style Task
gulp.task('styles', function(){
   gulp.src(['assets/scss/*.scss'])
   .pipe(plumber())
   .pipe(sass())
   .pipe(gulp.dest('assets/css'))
   .pipe(livereload());
});

//Watch Task
gulp.task('watch', function(){
    var server = livereload({ start: true });
    gulp.watch('assets/js/*.js', ['compressjs']);
    gulp.watch('assets/scss/*/*.scss', ['styles']);
});

//Default task
gulp.task('default', ['compressjs', 'styles', 'watch']); 
