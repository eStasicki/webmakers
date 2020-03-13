var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");

gulp.task("serve", ["sass"], function() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 8080,
    open: true,
    notify: true
  });
  gulp.watch("scss/*.scss", ["sass"]);
  gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task("sass", function() {
  return gulp
    .src("scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
});

gulp.task("default", ["serve"]);
