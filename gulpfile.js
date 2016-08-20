var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create(),
    runSeq = require('run-sequence'),
    symdest = require('gulp-symdest'),
    series = require('stream-series'),
    inject = require('gulp-inject'),
    uglify = require('gulp-uglify'),
    cssMinify = require('gulp-cssnano'),
    rimraf = require('gulp-rimraf'),
    concat = require('gulp-concat'),
    systemBuilder = require('systemjs-builder'),
    embedTemplates = require('gulp-angular-embed-templates'),

    config = {

        // Page name
        pName: 'ng2-simple-components',

        // Sass
        sass: 'assets/sass/**/*.scss',
        sassDest: 'assets/css',

        clientDir: '',
        index: 'index.html',

        fonts: [],
        // Vendor
        vendor: {
            js: [
                'node_modules/core-js/client/shim.min.js',
                'node_modules/zone.js/dist/zone.js',
                'node_modules/reflect-metadata/Reflect.js',
                'node_modules/systemjs/dist/system.src.js'
            ],

            css: [
                'assets/css/main.css'
            ]
        },

        system: {
            config: 'system.config.js',
            run: 'system.js'
        },

        tsFiles: 'app/**/**.js',
        tsConfig: 'tsconfig.json',
        buildDir: 'build/'

    };

// Sass Task
gulp.task('sass', function() {
    return gulp.src(config.sass)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.sassDest))
        .pipe(browserSync.stream());

});


// Production tasks
gulp.task('css-prod', ['sass'], function() {
    gulp.src(config.vendor.css)
        .pipe(concat('main.css'))
        .pipe(cssMinify())
        .pipe(gulp.dest(config.buildDir + 'css'));
});

gulp.task('font-move', function() {
    gulp.src(config.fonts)
        .pipe(gulp.dest(config.buildDir + '/fonts'));
});


/*
 PRODUCTION BUILD
 */

gulp.task('prod-build', (d) => {
    runSeq('clean-prod', 'prod-main',d);
});

gulp.task('prod-main', ['prod-base'], () => {
    var target = gulp.src(config.index),
        cssStream = gulp.src(config.buildDir + 'css/main.css', {read: false}),
        vendorStream = gulp.src(config.buildDir + 'main.js', {read: false});
        // appStream = gulp.src(config.buildDir + 'bundle.js', {read: false});

    return target
        .pipe(inject(series(vendorStream, cssStream), {transform: (filepath, file, i, length) => filepath.split('.')[1] === 'css' ? `<link rel="stylesheet" href="${config.pName}${filepath}">` : `<script src="${config.pName}${filepath}" defer async></script>`}))
        .pipe(gulp.dest(config.clientDir));
});

gulp.task('prod-base', ['system-build', 'css-prod', 'font-move'], () => {

    var files = config.vendor.js;
    files.push(config.buildDir + 'temp/total.js');

    return gulp.src(files)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.buildDir))
});

gulp.task('embed-templates', () => {
    gulp.src(config.tsFiles)
    .pipe(embedTemplates({sourceType:'js', minimize: {quotes: true, empty: true}}))
    .pipe(gulp.dest(config.clientDir + '/app/'));
});

gulp.task('system-build', ['embed-templates'], () => {
    var builder = new systemBuilder();

    return builder.loadConfig(config.system.config)
            .then(() => builder.buildStatic('app',  config.buildDir + 'temp/total.js'))
});

gulp.task('clean-prod', () => {
    return gulp.src(config.buildDir, {read: false})
        .pipe(rimraf());
});

// Development Build
gulp.task('dev-build', ['sass'], () => {

    var js = config.vendor.js;

    js.push(config.system.config);
    js.push(config.system.run);

    var target = gulp.src(config.index),
        cssStream = gulp.src(config.vendor.css, {read: false}),
        vendorStream = gulp.src(js, {read: false});

    return target
        .pipe(inject(series(vendorStream, cssStream), {addRootSlash: false, relative: true}))
        .pipe(gulp.dest(config.clientDir));
});


gulp.task('serve', ['sass'], () => {

    browserSync.init({
        server: {
            baseDir: "./",
            index: "index.html"
        }
    });

    gulp.watch(config.sass, ['sass']);
    gulp.watch(config.clientDir + "app/**/**").on('change', browserSync.reload);
});