var gulp = require('gulp'),
	path = require('./gulp.config'),
	plug = require('gulp-load-plugins')();

/**
 * Creating template
 * @return {Stream}
 */

gulp.task('template', function()
{
	return gulp
		.src(path.templates)
		.pipe(plug.minifyHtml({
			empty: true
		}))
		.pipe(gulp.dest(path.build));
});

/**
 * Copy app javascripts
 * @return {Stream}
 */

gulp.task('js', function () 
{
	var source = [].concat(path.js, path.build + 'template.js');
	return gulp
		.src(source)
		.pipe(plug.concat('all.min.js'))
		.pipe(plug.uglify({
			mangle: true
		}))
		.pipe(gulp.dest(path.build));
});

/**
 * Copy vendor javascripts
 * @return {Stream}
 */

gulp.task('vendorjs', function()
{
	return gulp
		.src(path.vendorjs)
		.pipe(plug.concat('vendor.min.js'))
		.pipe(plug.uglify())
		.pipe(gulp.dest(path.build));
});

/**
 * Copy app styles
 * @return {Stream}
 */

gulp.task('css', function()
{
	return gulp
		.src(path.css)
		.pipe(plug.concat('all.min.css'))
		.pipe(plug.minifyCss())
		.pipe(gulp.dest(path.build + 'content'));
});

/**
 * Copy vendor styles
 * @return {Stream}
 */

gulp.task('vendorcss', function()
{
	return gulp
		.src(path.vendorcss)
		.pipe(plug.concat('vendor.min.css'))
		.pipe(plug.minifyCss())
		.pipe(gulp.dest(path.build + 'content'));
});

/**
 * Copy fonts
 * @return {Stream}
 */

gulp.task('fonts', function()
{
	return gulp
		.src(path.fonts)
		.pipe(gulp.dest(path.build + 'fonts'));
});

/**
 * Compress images
 * @return {Stream}
 */

gulp.task('images', function()
{
	return gulp
		.src(path.images)
		.pipe(plug.imagemin({
			optimizationLevel: 3
		}))
		.pipe(gulp.dest(path.build + 'content/images'));
});

/**
 * Watch files and build
 */

gulp.task('watch', function()
{
	var css = [].concat(path.css, path.vendorcss),
		js  = [].concat(path.js, path.vendorjs),
		tpl = [].concat(path.templates),
		i 	= [].concat(path.images);

	gulp
		.watch(js, ['js', 'vendorjs']);

	gulp
		.watch(css, ['css', 'vendorcss']);

	gulp
		.watch(tpl, ['template']);

	gulp
		.watch(i, ['images']);
});

gulp.task('default', ['watch']);
