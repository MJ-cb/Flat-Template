const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nestvars = require('postcss-nested');

gulp.task('default', function(done){
    console.log("Congrats in the first gulp task ");
    done();
});

gulp.task('html', function(done){
    console.log("\n some useful task \n ");
    done();
});
gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([cssvars,nestvars,autoprefixer]))
    .pipe(gulp.dest('.app/temp/styles')
 
    );
});

gulp.task('watch', function(){
    watch('./app/*.html', gulp.series('html'));
    watch('./app/assets/styles/**/*.css', gulp.series('styles'));


});