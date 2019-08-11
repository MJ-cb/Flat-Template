const gulp = require('gulp');
const watch = require('gulp-watch');

gulp.task('default', function(done){
    console.log("Congrats in the first gulp task ");
    done();
});

gulp.task('html', function(done){
    console.log("\n some useful task \n ");
    done();
});
gulp.task('styles', function(done){
    console.log(" \n styles \n ")
    done();
});

gulp.task('watch', function(done){
    watch('./app/*.html', gulp.series('html'));
    watch('./app/assets/styles/**/*.css', gulp.series('styles'));
    done();

});