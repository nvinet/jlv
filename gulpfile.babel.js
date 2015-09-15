// generated on 2015-09-12 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('sass', () => {
  return gulp.src('app/styles/*.scss')
    .pipe($.plumber())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['last 1 version']}))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({stream: true}));
});

gulp.task("styles", () => {
  gulp.task('scripts:vendor', () => {
    return gulp.src([
      'app/css/animate.css',
      'app/css/fpslineicons.css',
      'app/css/settings.css',
      'app/css/swipebox.css',
      'app/css/text-rotater.css',
      'app/css/bootstrap.css',
      'app/css/style.css'
    ])
      .pipe($.concat('main.css'))
      .pipe(gulp.dest('public/styles'))
  });
});

function lint(files, options) {
  return () => {
    return gulp.src(files)
      .pipe(reload({stream: true, once: true}))
      .pipe($.eslint(options))
      .pipe($.eslint.format())
      .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
  };
}
const testLintOptions = {
  env: {
    mocha: true
  }
};

gulp.task('lint', lint('app/scripts/**/*.js'));
gulp.task('lint:test', lint('test/spec/**/*.js', testLintOptions));

gulp.task('scripts:vendor', () => {
  return gulp.src([
    'app/js/jquery.min.js'
  ])
    .pipe($.concat('vendor.js'))
    .pipe(gulp.dest('./public/scripts/'))
});

gulp.task('scripts:plugins', () => {
  return gulp.src([
    'app/js/js/bootstrap.min.js',
    'app/js/waypoints.min.js',
    'app/js/jquery.counterup.min.js',
    'app/js/jquery.textrotater.js',
    'app/js/jquery.stellar.js',
    'app/js/jquery.vopacity.js',
    'app/js/wow.js',
    'app/js/masonry.min.js',
    'app/js/jquery.swipebox.js',
    'app/js/jquery.themepunch.tools.min.js',
    'app/js/jquery.themepunch.revolution.min.js'
  ])
    .pipe($.concat('plugins.js'))
    .pipe(gulp.dest('./public/scripts/'))
});

gulp.task('scripts:main', () => {
  return gulp.src([
    'app/js/settings.js',
    'app/js/scripts.js',
    'app/scripts/main.js'
  ])
    .pipe($.concat('main.js'))
    .pipe($.uglify())
    .pipe(gulp.dest('./public/scripts/'))
});

gulp.task('images', () => {
  return gulp.src('app/images/**/*')
    .pipe($.if($.if.isFile, $.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    }))
    .on('error', function (err) {
      console.log(err);
      this.end();
    })))
    .pipe(gulp.dest('public/images'));
});

gulp.task('ico', () => {
  return gulp.src('app/ico/**/*')
    .pipe($.if($.if.isFile, $.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    }))
      .on('error', function (err) {
        console.log(err);
        this.end();
      })))
    .pipe(gulp.dest('public/ico'));
});

gulp.task('fonts', () => {
  return gulp.src(require('main-bower-files')({
    filter: '**/*.{eot,svg,ttf,woff,woff2}'
  }).concat('app/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('public/fonts'));
});

gulp.task('extras', () => {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('public'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'public']));

gulp.task('serve', ['styles', 'fonts'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    'app/scripts/**/*.js',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);

  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/fonts/**/*', ['fonts']);
});

gulp.task('serve:public', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['public']
    }
  });
});

gulp.task('serve:test', () => {
  browserSync({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('test/spec/**/*.js').on('change', reload);
  gulp.watch('test/spec/**/*.js', ['lint:test']);
});

gulp.task('build', ['lint', 'scripts:vendor', 'scripts:plugins', 'scripts:main', 'styles', 'images', 'ico','fonts', 'extras'], () => {
  return gulp.src('public/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
