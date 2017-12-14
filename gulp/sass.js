var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	sourcemaps = require('gulp-sourcemaps'),
	connect = require('gulp-connect');

module.exports = function () {
	return gulp.src(['app/styles/scss/*.scss', 'app/js/components/**/*.scss'])
	.pipe(sourcemaps.init())
	.pipe(concat('styles.scss'))
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 3 versions', 'last 5 iOS versions', 'last 4 Android versions']
	}))
	.pipe(sourcemaps.write())
	.pipe(rename('styles.css'))
	.pipe(gulp.dest('./app/styles/'))
	.pipe(connect.reload());
};	