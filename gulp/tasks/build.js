const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const del = require('del');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const browsrSync = require('browser-sync').create();

gulp.task('previewDist', function(){
        browsrSync.init({
            //notify : false, // to not see the inject box
            server: {
                baseDir:"dist"
            }});
        });

gulp.task('deleteDistFolder', function(){
    return del("./dist");
});

gulp.task('copyGeneralFiles', function(){
    let pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/scripts/**',
        '!./app/assets/styles/**',
        '!./app/temp',
        '!./app/temp/**',
    ]
    return gulp.src(['./app/**/*','!./app/index.html'])
    .pipe(gulp.dest("./dist"));
});
gulp.task('optimizeImages', function(){
    return gulp.src(['./app/assets/images/**/*','!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
        progressive:true,
        interlaced:true,
        multipass: true
    })).pipe(gulp.dest("./dist/assets/images"))
});

gulp.task('usemin', function(){
    return gulp.src('./app/index.html')
    .pipe(usemin({
        css: [function(){return rev()}, function(){return cssnano()}],
        js: [function(){return rev()}]

    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', gulp.series('deleteDistFolder','icons','modernizr','copyGeneralFiles','optimizeImages','usemin'));