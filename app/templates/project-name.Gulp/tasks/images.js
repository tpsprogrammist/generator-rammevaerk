import del from 'del';
import gulp from 'gulp';
import gutil from 'gulp-util';
import plumber from 'gulp-plumber';
import config from '../config';

function processImages() {
    return gulp.src(config.css.src + '/**/img/**/*.{jpg,png,gif,svg}')
        .pipe(plumber())
        .pipe(gulp.dest(config.css.dest))
        .on('error', gutil.log);
}

function cleanImages(done) {
    return del([config.css.dest + '/**/img/**/*.{jpg,png,gif,svg}'], done);
}

gulp.task('images', gulp.series(cleanImages, processImages));
