var gulp = require('gulp');
var svgmin = require('gulp-svgmin');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var config = require('../config');

gulp.task('svgo', function() {
	return gulp
	.src(config.src.img + '/svg/**/*.svg')
	.pipe(plumber({
	}))
	.pipe(changed(config.build.img))
	.pipe(svgmin({
		js2svg: {
			pretty: true
		},
		plugins: [{
			removeDesc: true
		}, {
			cleanupIDs: true
		}, {
			mergePaths: false
		}]
	}))
	.pipe(gulp.dest(config.build.img));
});

// update files
gulp.task('svgo:watch', function() {
	gulp.watch(config.src.img + '/svgo/**/*.svg', ['svgo']);
});