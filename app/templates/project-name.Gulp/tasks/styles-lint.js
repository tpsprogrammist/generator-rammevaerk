import cached from 'gulp-cached';
import gulp from 'gulp';
import gutil from 'gulp-util';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import scss from 'postcss-scss';
import config from '../config';

function stylesLint() {
    return gulp.src(`${config.css.src}/**/*.s+(a|c)ss`)
        .pipe(plumber())
        .pipe(cached('styles'))
        .pipe(postcss([
            require('stylelint'),
            require('postcss-reporter')({ clearAllMessages: true })
        ], { syntax: scss }))
        .on('error', gutil.log);
}

gulp.task('styles:lint', stylesLint);
