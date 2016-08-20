var gulp = require('gulp'),
    del = require('del'),
    browserSync = require('browser-sync').create(),
    paths = {
        src: [
            './lib/**',
            './src/**'
        ],
        example: './example/node_modules/ng2-simple-components',
        exampleClean: [
            './example/node_modules/ng2-simple-components/lib',
            './example/node_modules/ng2-simple-components/src'
        ]
    };

gulp.task('clean', () => {
    return del(paths.exampleClean)
});

gulp.task('move-example', ['clean'], () => {
    return gulp.src(paths.src, { base: './' }).pipe(gulp.dest(paths.example))
});

gulp.task('serve', ['move-example'], () => {

    browserSync.init({
        server: {
            baseDir: "./example/",
            index: "index.html"
        }
    });

    gulp.watch(paths.src, ['move-example']);
    gulp.watch(paths.example).on('change', browserSync.reload);
});