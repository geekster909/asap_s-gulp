var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

var neat = require('node-neat').includePaths;
var bourbon = require('node-bourbon').includePaths;

gulp.task('default', ['sass', 'vendor-sass', 'compress', 'vendor-compress', 'watch'])


gulp.task('sass', function(){
  return gulp.src('assets/styles/scss/style.scss')
    .pipe(sass({
      includePaths: bourbon,
      includePaths: neat
    }).on('error', sass.logError)) // Using gulp-sass
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/styles'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('vendor-sass', function(){
  return gulp.src(['assets/styles/vendor/*.scss', 'assets/styles/vendor/*.css'])
    .pipe(sass().on('error', sass.logError)) // Using gulp-sass
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
});

gulp.task('compress', function() {
  return gulp.src('assets/scripts/*.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('vendor-compress', function() {
  return gulp.src('assets/scripts/vendor/*.js')
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('images', function(){
  return gulp.src('assets/images/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin({
      // Setting interlaced to true
      interlaced: true
    }))
  .pipe(gulp.dest('dist/images'))
});



gulp.task('watch', ['browserSync'], function () {
    gulp.watch('assets/styles/scss/**/*.scss', ['sass']);
    gulp.watch(['assets/styles/vendor/*.scss', 'assets/styles/vendor/*.css'], ['vendor-sass']);
    gulp.watch('assets/scripts/*.js', ['compress']);
    gulp.watch('assets/scripts/vendor/*.js', ['vendor-compress']);
    //gulp.watch('*.html', browserSync.reload); 
    gulp.watch('dist/scripts/*.min.js', browserSync.reload); 
});