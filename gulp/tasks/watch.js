const gulp = require('gulp');
const watch = require('gulp-watch');
const browsrSync = require('browser-sync').create();


gulp.task('html', function(done){
    browsrSync.reload();
    done();
});

gulp.task('cssInject', function(){
    return gulp.src('./app/temp/styles/style.css')
    .pipe(browsrSync.stream());


});

gulp.task('watch', function(){
    browsrSync.init({
        //notify : false, // to not see the inject box
        server: {
            baseDir:"app"
        }
    });
    watch('./app/*.html', gulp.series('html'));
    watch('./app/assets/styles/**/*.css', gulp.series('styles','cssInject'));
});