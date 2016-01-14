var gulp         = require('gulp'),
    plumber      = require('gulp-plumber'),
    gutil        = require('gulp-util'),
    autoprefixer = require('autoprefixer'),
    sourcemaps   = require('gulp-sourcemaps'),
    postcss      = require('gulp-postcss'),
    poststylus   = require('poststylus'),
    stylus       = require('gulp-stylus'),
    axis         = require('axis'),
    rupture      = require('rupture'),
    lost         = require('lost'),
    livereload   = require('gulp-livereload');

gulp.task('styles', function() {
  gulp.src('assets/css/stylus/*.styl')
    .pipe(plumber({errorHandler: function (err) { gutil.beep(); console.log(err);}}))   // Beeps if there is an error
    .pipe(sourcemaps.init())                              // Start Sourcemaps
    .pipe(stylus({                                        // Pipe gulp-stylus through...
      use: [
        poststylus([                                      // ... and use PostStylus to render autoprefixer + Lost Grid
          'autoprefixer',
          'lost'
        ]),
        axis(),                                           // ... and some awesome Stylus goodies
        rupture()
      ]
    }))
    .pipe(sourcemaps.write('./'))                         // Render Sourcemaps
    .pipe(gulp.dest('assets/css/'))
    .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen({start: true});                     // Starts LiveReload plugin
    var livereloadPage = function() {
        livereload.reload();
    };
    gulp.watch([
        'content/*.htm',                                  // Watch OctoberCMS .htm files
        'layouts/*.htm',
        'pages/*.htm',
        'partials/*.htm'], livereloadPage );
    gulp.watch([
        'assets/css/stylus/*.styl'], ['styles'] );        // Watch for .styl files
})

gulp.task('default', ['watch']);
