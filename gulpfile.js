var gulp = require('gulp'),
	connect = require('gulp-connect'),
	gutil = require('gulp-util'),
	fs = require('fs'),
	exec = require('gulp-exec'),

// Varialize our source files
	sources = {
		sass: ['./app/styles/**/*.scss', './app/js/components/**/*.scss'],
		html: ['*.html','./app/js/components/**/*.html'],
		js: ['./app/js/**/*.js', './app/js/services/*.js', './app/js/components/**/*.js', '!./app/js/**/*min.js'],
	};


gulp.task('watch', function () {
	gulp.watch( sources.sass, {interval: 500}, ['sass']);
	gulp.watch( sources.html, {interval: 500}, ['scripts']);
	gulp.watch( sources.js, {interval: 500}, ['scripts']);
});

// Compiles our Sass and out it to a compressed CSS file
gulp.task('sass', require('./gulp/sass'));

// Concatenate and compress js files
gulp.task('scripts', require('./gulp/scripts'));

// Creates a Local server on Port 8181 and starts live reload
gulp.task('connect', require('./gulp/connect'));

//Should build out css and concat and compress js and html files
gulp.task('build', [
	'sass',
	'scripts'
]);

//Builds out project and runs production server
gulp.task('prod', ['build'], function () {
	return gulp.src('./')
		.pipe(exec('node server.js'));
});

gulp.task('default', [
	'connect',
	'sass',
	'scripts',
	'watch'
]);
