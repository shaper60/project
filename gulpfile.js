// @file gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

gulp.task('sass', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass({
        style : 'expanded',
        compass : true
    }))
    .pipe(gulp.dest('./'))
    .pipe(livereload());
});

gulp.task('html', function() {
	gulp.src('./*.html')
	.pipe(livereload());
});

gulp.task('connectDev', function() {
	connect.server({
		root: ['./'],
		port: 8000,
		livereload: true
	});
});

// 追記する
gulp.task('watch', function () {
	livereload.listen();
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('./*.html', ['html']);
});

gulp.task('default',['connectDev', 'watch']);