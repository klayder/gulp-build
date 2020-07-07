
const gulp = require('gulp');

const html = require('./gulp-tasks/html');
const serve = require('./gulp-tasks/serve');
const clean = require('./gulp-tasks/clean');
const styles = require('./gulp-tasks/styles');

const tasks = gulp.parallel(
  html,
  styles,
/*   script,
  fonts,
  imageMinify,
  svgSprite */
);
const build = gulp.series(clean, tasks);

module.exports.start = gulp.series(build, serve);
module.exports.build = gulp.series(build);