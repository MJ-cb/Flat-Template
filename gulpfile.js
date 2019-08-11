const gulp = require('gulp');
const watch = require('gulp-watch');

gulp.task('default', function(done){
    console.log("Congrats in the first gulp task ");
    done();
});

gulp.task('html', function(done){
    console.log("\n some useful task \n ");
    done();
})
gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });
});