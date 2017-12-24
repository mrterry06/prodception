var addStream = require('add-stream'),
	angularTemplateCache = require('gulp-angular-templatecache'),
	concat = require('gulp-concat'),
	connect = require('gulp-connect'),
	fs = require('fs'),
	gulp = require('gulp'),
	gutil = require('gulp-util'),	
	htmlmin = require('gulp-htmlmin'),
	insert = require('gulp-insert'),
	ngAnnotate = require('gulp-ng-annotate'),
	rename = require('gulp-rename'),
	sourcemaps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel')

	log = gutil.log,
	colors = gutil.colors,

	scripts = [
		//project files
		'./app/js/components/**/!(*.service|*.factory|*.directive|*.controller|*.filters|*.constant).js',
		'./app/js/components/**/**/!(*.service|*.factory|*.directive|*.controller|*.filters|*.contant).js',
		'./app/js/components/**/*.js',
		'./app/js/components/**/**/*.js',
		'./app/js/app.js',
		'./app/js/services/*.js'
	];

	module.exports = function (done) {
		prepareDependencies();
		var script = gulp.src(scripts)
		.pipe(addStream.obj(prepareTemplates()))
		.pipe(ngAnnotate())
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['babel-preset-es2015-script']
		}))
		// .pipe(uglify())
		.pipe(concat('./app/js/app.js'))
		.pipe(rename('./app/js/app.min.js'))
		.pipe(gulp.dest('./'))
		.pipe(connect.reload())
		.on('error', function (err) {
			log(colors.red('error', err.message));
		});
		return script;
	};

	function prepareDependencies () {
		var dependencyFiles = [
			'./node_modules/moment/min/moment.js',
			'./node_modules/angular/angular.min.js',
			'./node_modules/angular-aria/angular-aria.min.js',
			'./node_modules/angular-sanitize/angular-sanitize.min.js',
			'./node_modules/angular-animate/angular-animate.min.js',
			'./node_modules/angular-messages/angular-messages.min.js',
			'./node_modules/angular-touch/angular-touch.min.js',
			'./node_modules/angular-moment/angular-moment.min.js',
			'./node_modules/angular-cookies/angular-cookies.min.js',
			'./node_modules/angular-feature-toggle/dist/angular-feature-toggle.min.js',
			'./node_modules/angular-ui-router/release/angular-ui-router.min.js'
		];

		return gulp.src(dependencyFiles)
		.pipe(concat('./app/js/vendors.min.js'))
		.pipe(gulp.dest('./'));
	}

	function prepareTemplates () {
		return gulp.src(['app/js/components/**/*.html', 'app/modal-templates/*.html'], {base: 'app/'})
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(angularTemplateCache({root: 'app/js/components'}));
	}