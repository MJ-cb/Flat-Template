const gulp = require('gulp');
const watch = require('gulp-watch');
const browsrSync = require('browser-sync').create();
const webpack = require('webpack');

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

    gulp.task('scripts', gulp.series('modernizr'),function(done){
        webpack(require('../../webpack.config.js'), function(err, stats){
            if(err){
                console.log("\n" + err.toString()+ "\n");
            }
            console.log("\n" + stats.toString() + "\n");
            done();

        });
        
    });

    watch('./app/*.html', gulp.series('html'));
    watch('./app/assets/styles/**/*.css', gulp.series('styles','cssInject'));
    watch('./app/assets/scripts/**/*.js', gulp.series('scripts','html'));
});