const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nestvars = require('postcss-nested');
const cssImport = require('postcss-import');
const browsrSync = require('browser-sync').create();

gulp.task('default', function(done){
    console.log("Congrats in the first gulp task ");
    done();
});

gulp.task('html', function(done){
    browsrSync.reload();
    done();
});
gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([cssImport,cssvars,nestvars,autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles')
    );
});

gulp.task('cssInject', function(){
    return gulp.src('./app/temp/styles/style.css')
    .pipe(browsrSync.stream());


});

gulp.task('watch', function(){
    browsrSync.init({
        server: {
            baseDir:"app"
        }
    });
    watch('./app/*.html', gulp.series('html'));
    watch('./app/assets/styles/**/*.css', gulp.series('styles','cssInject'));


});

