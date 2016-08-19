var gulp = require('gulp'),
    del = require('del'),
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