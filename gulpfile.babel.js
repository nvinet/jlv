// generated on 2015-09-12 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;
const dirs = {
  src: 'src',
  styles: 'src/styles',
  scripts: 'src/scripts',
  images: 'src/images',
  ico: 'src/ico',
  fonts: 'src/fonts',
  vendor_js: 'src/scripts/vendor',
  vendor_css: 'src/styles/vendor',
  dest: 'app/public'
};

gulp.task('sass', () => {
  return gulp.src(`${dirs.styles}/*.scss`)
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
  return gulp.src([
      `${dirs.vendor_css}/animate.css`,
      `${dirs.vendor_css}/fpslineicons.css`,
      `${dirs.vendor_css}/settings.css`,
      `${dirs.vendor_css}/swipebox.css`,
      `${dirs.vendor_css}/text-rotater.css`,
      `${dirs.vendor_css}/bootstrap.css`,
      `${dirs.vendor_css}/style.css`
    ])
    .pipe($.concat('main.css'))
    .pipe(gulp.dest(`./${dirs.dest}/styles/`))
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

gulp.task('lint', lint([
  `${dirs.scripts}/**/*.js`,
  `!${dirs.vendor_js}/**/*.js`
]));

gulp.task('scripts:vendor', () => {
  return gulp.src([
    `${dirs.vendor_js}/jquery.min.js`
  ])
    .pipe($.concat('vendor.js'))
    .pipe(gulp.dest(`./${dirs.dest}/scripts/`))
});

gulp.task('scripts:plugins', () => {
  return gulp.src([
      `${dirs.vendor_js}/ootstrap.min.js`,
      `${dirs.vendor_js}/waypoints.min.js`,
      `${dirs.vendor_js}/jquery.counterup.min.js`,
      `${dirs.vendor_js}/jquery.textrotater.js`,
      `${dirs.vendor_js}/jquery.stellar.js`,
      `${dirs.vendor_js}/jquery.vopacity.js`,
      `${dirs.vendor_js}/wow.js`,
      `${dirs.vendor_js}/masonry.min.js`,
      `${dirs.vendor_js}/jquery.swipebox.js`,
      `${dirs.vendor_js}/jquery.themepunch.tools.min.js`,
      `${dirs.vendor_js}/jquery.themepunch.revolution.min.js`
  ])
    .pipe($.concat('plugins.js'))
    .pipe(gulp.dest(`./${dirs.dest}/scripts/`))
});

gulp.task('scripts:main', () => {
  return gulp.src([
    `${dirs.vendor_js}/settings.js`,
    `${dirs.vendor_js}/scripts.js`,
    `${dirs.scripts}/main.js`
  ])
    .pipe($.concat('main.js'))
    .pipe($.uglify())
    .pipe(gulp.dest(`./${dirs.dest}/scripts/`))
});

gulp.task('images', () => {
  return gulp.src(`${dirs.images}/**/*`)
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
    .pipe(gulp.dest(`./${dirs.dest}/images`));
});

gulp.task('ico', () => {
  return gulp.src(`${dirs.ico}/**/*`)
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
    .pipe(gulp.dest(`./${dirs.dest}/ico`));
});

gulp.task('fonts', () => {
  return gulp.src(require('main-bower-files')({
    filter: '**/*.{eot,svg,ttf,woff,woff2}'
  }).concat(`${dirs.fonts}/**/*`))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest(`./${dirs.dest}/fonts`));
});

gulp.task('extras', () => {
  return gulp.src([
    'src/*.*',
    '!src/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest(dirs.dest));
});

gulp.task('clean', del.bind(null, ['.tmp', dirs.dest]));

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
    `${dirs.scripts}/**/*.js`,
    `${dirs.images}/**/*`,
    '.tmp/fonts/**/*'
  ]).on('change', reload);

  gulp.watch(`${dirs.styles}/**/*.scss`, ['styles']);
  gulp.watch('src/fonts/**/*', ['fonts']);
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


gulp.task('build', ['lint', 'scripts:vendor', 'scripts:plugins', 'scripts:main', 'styles', 'images', 'ico','fonts', 'extras'], () => {
  return gulp.src(`${dirs.dest}/**/*`).pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
