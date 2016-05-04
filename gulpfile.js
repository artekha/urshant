'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');


gulp.task('sass', function() {
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(plumber())
		.pipe(autoprefixer())
		.pipe(concat('main.css'))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function () {
	gulp.watch('sass/**/*.scss', ['sass']);
});