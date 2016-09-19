var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');

var paths = {
    sass: "resources/styles/**/*.scss",
    dist: './dist'
};

//////////////////////////////
// DEV
gulp.task('sass', function () {
    return gulp.src("resources/styles/fluid-images.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({sourceMap: true}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dist));
});

gulp.task('dev', ['sass']);

gulp.task('watch', ['dev'], function () {
    gulp.watch(paths.sass, ['dev']);
});

//////////////////////////////
// PRODUCTION
gulp.task('min-sass', function(){
    return gulp.src("resources/styles/fluid-images.scss")
        .pipe(sass())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('fluid-images.min.css'))
        //.pipe(nano())
        .pipe(gulp.dest(paths.dist));
});

gulp.task('prod', ['min-sass']);

//////////////////////////////
// DEFAULT
gulp.task('default', ['prod']);