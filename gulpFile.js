const gulp = require("gulp");
const del = require("del");
const tslint = require("gulp-tslint");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const jasmine = require('gulp-jasmine');
const babel = require('gulp-babel');
// const sourceMap = require('source-map');

const src = './app/**/*.ts',
    dest = './dest/**/*';

gulp.task('delete', async () => {
    const deletedPaths = await del([dest]);
    console.log('Deleted files and folders:\n', deletedPaths.join('\n'));
});

gulp.task("tslint", () =>
    gulp.src(src)
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
);

gulp.task("js", () => {
    return gulp.src(src)
        .pipe(tsProject())
        .pipe(babel({
            presets: [['@babel/env', {targets: {node: "current"}}]]
         }))
        .pipe(gulp.dest("dest"));
});

gulp.task('test', () =>
    gulp.src(dest + '.spec.js')
        .pipe(jasmine({ verbose: true }))
);

gulp.task('default', gulp.series('delete', 'tslint', 'js', 'test'));
