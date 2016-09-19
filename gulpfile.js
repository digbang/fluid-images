var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');

var paths = {
    images: 'resources/images/**/*.{jpg,png,gif,svg}',
    sass: "resources/styles/**/*.scss",
    dist_css: './dist/css',
    dist_img: './dist/img'
};

//////////////////////////////
// ASSETS
gulp.task('img', function () {
    gulp.src(paths.images)
        .pipe(gulp.dest(paths.dist_img));
});

//////////////////////////////
// DEV
gulp.task('sass', function () {
    return gulp.src("resources/styles/fluid-images.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({sourceMap: true}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dist_css));
});

gulp.task('dev', ['sass', 'img']);

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
        .pipe(gulp.dest(paths.dist_css));
});

gulp.task('prod', ['min-sass', 'img']);

//////////////////////////////
// DEFAULT
gulp.task('default', ['prod']);