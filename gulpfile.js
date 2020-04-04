"use strict";

// Load plugins
const autoprefixer = require("gulp-autoprefixer");
const browsersync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const del = require("del");
const gulp = require("gulp");
const header = require("gulp-header");
const merge = require("merge-stream");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const realFavicon = require("gulp-real-favicon");
const fs = require("fs");
// Load package.json for banner
const pkg = require("./package.json");
const FAVICON_DATA_FILE = "faviconData.json";

// Set the banner content
const banner = [
  "/*!\n",
  " * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n",
  " * Copyright 2013-" + new Date().getFullYear(),
  " <%= pkg.author %>\n",
  " * Licensed under <%= pkg.license %> (https://github.com/BlackrockDigital/<%= pkg.name %>/blob/master/LICENSE)\n",
  " */\n",
  "\n"
].join("");

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  done();
}

// BrowserSync reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean vendor
function clean() {
  return del(["./vendor/"]);
}

// Bring third party dependencies from node_modules into vendor directory
function modules() {
  // Bootstrap
  var bootstrap = gulp
    .src("./node_modules/bootstrap/dist/**/*")
    .pipe(gulp.dest("./vendor/bootstrap"));
  // Font Awesome CSS
  var fontAwesomeCSS = gulp
    .src("./node_modules/@fortawesome/fontawesome-free/css/**/*")
    .pipe(gulp.dest("./vendor/fontawesome-free/css"));
  // Font Awesome Webfonts
  var fontAwesomeWebfonts = gulp
    .src("./node_modules/@fortawesome/fontawesome-free/webfonts/**/*")
    .pipe(gulp.dest("./vendor/fontawesome-free/webfonts"));
  // jQuery Easing
  var jqueryEasing = gulp
    .src("./node_modules/jquery.easing/*.js")
    .pipe(gulp.dest("./vendor/jquery-easing"));
  // jQuery
  var jquery = gulp
    .src([
      "./node_modules/jquery/dist/*",
      "!./node_modules/jquery/dist/core.js"
    ])
    .pipe(gulp.dest("./vendor/jquery"));
  return merge(
    bootstrap,
    fontAwesomeCSS,
    fontAwesomeWebfonts,
    jquery,
    jqueryEasing
  );
}

// CSS task
function css() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(plumber())
    .pipe(
      sass({
        outputStyle: "expanded",
        includePaths: "./node_modules"
      })
    )
    .on("error", sass.logError)
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(
      header(banner, {
        pkg: pkg
      })
    )
    .pipe(gulp.dest("./css"))
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(cleanCSS())
    .pipe(gulp.dest("./css"))
    .pipe(browsersync.stream());
}

// JS task
function js() {
  return gulp
    .src(["./js/*.js", "!./js/*.min.js"])
    .pipe(uglify())
    .pipe(
      header(banner, {
        pkg: pkg
      })
    )
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(gulp.dest("./js"))
    .pipe(browsersync.stream());
}

// Watch files
function watchFiles() {
  gulp.watch("./scss/**/*", css);
  gulp.watch(["./js/**/*", "!./js/**/*.min.js"], js);
  gulp.watch("./**/*.html", browserSyncReload);
}

// Define complex tasks
const vendor = gulp.series(clean, modules);
const build = gulp.series(vendor, gulp.parallel(css, js));
const watch = gulp.series(build, gulp.parallel(watchFiles, browserSync));

// Export tasks
exports.css = css;
exports.js = js;
exports.clean = clean;
exports.vendor = vendor;
exports.build = build;
exports.watch = watch;
exports.default = build;

gulp.task("generate-favicon", function(done) {
  realFavicon.generateFavicon(
    {
      masterPicture: "assets/favicon.png",
      dest: "assets",
      iconsPath: "/",
      design: {
        ios: {
          pictureAspect: "noChange",
          assets: {
            ios6AndPriorIcons: false,
            ios7AndLaterIcons: false,
            precomposedIcons: false,
            declareOnlyDefaultIcon: true
          }
        },
        desktopBrowser: {
          design: "raw"
        },
        windows: {
          pictureAspect: "noChange",
          backgroundColor: "#da532c",
          onConflict: "override",
          assets: {
            windows80Ie10Tile: false,
            windows10Ie11EdgeTiles: {
              small: false,
              medium: true,
              big: false,
              rectangle: false
            }
          }
        },
        androidChrome: {
          pictureAspect: "noChange",
          themeColor: "#ffffff",
          manifest: {
            display: "standalone",
            orientation: "notSet",
            onConflict: "override",
            declared: true
          },
          assets: {
            legacyIcon: false,
            lowResolutionIcons: false
          }
        },
        safariPinnedTab: {
          pictureAspect: "silhouette",
          themeColor: "#5bbad5"
        }
      },
      settings: {
        scalingAlgorithm: "Mitchell",
        errorOnImageTooSmall: false,
        readmeFile: false,
        htmlCodeFile: false,
        usePathAsIs: false
      },
      markupFile: FAVICON_DATA_FILE
    },
    function() {
      done();
    }
  );
});

// Inject the favicon markups in your HTML pages. You should run
// this task whenever you modify a page. You can keep this task
// as is or refactor your existing HTML pipeline.
gulp.task("inject-favicon-markups", function() {
  return gulp
    .src(["index.html"])
    .pipe(
      realFavicon.injectFaviconMarkups(
        JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code
      )
    )
    .pipe(gulp.dest("dist"));
});

// Check for updates on RealFaviconGenerator (think: Apple has just
// released a new Touch icon along with the latest version of iOS).
// Run this task from time to time. Ideally, make it part of your
// continuous integration system.
gulp.task("check-for-favicon-update", function(done) {
  var currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
  realFavicon.checkForUpdates(currentVersion, function(err) {
    if (err) {
      throw err;
    }
  });
});
