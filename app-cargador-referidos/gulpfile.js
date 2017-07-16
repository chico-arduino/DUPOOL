const gulp = require('gulp'),
	watch = require('gulp-watch'),
	notify = require('gulp-notify'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync').create();

gulp.task('browserSyncInit', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: 'app',
			index: 'index.html'
		}
	})
});

gulp.task('cssInject', function() {
	return gulp.src('app/css/**/*.css')
		.on('error', notify.onError({
		        message: 'Error: <%= error.message %>',
		        sound: true
		      }))
		.pipe(autoprefixer({
            browsers: ['Android 2.3',
				'Android >= 4',
				'Chrome >= 20',
				'Firefox >= 24',
				'Explorer >= 8',
				'iOS >= 6',
				'Opera >= 12',
				'last 2 versions']
        }))
		.pipe(browserSync.stream())	// Actualizar css en caliente en el browser
});

gulp.task('watch', ['browserSyncInit', 'cssInject'], function() {
	watch('app/**/*.+(html|js)', function() {
		browserSync.reload()
		});
	watch('app/css/**/*.css', function() {
		return gulp.start('cssInject')
		})
	});