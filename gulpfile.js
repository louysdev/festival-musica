const { series, src, dest, watch } = require("gulp")
const sass = require('gulp-sass')(require('sass'))
const imagemin = require("gulp-imagemin") // Solo es posible usalo en la version 7.1.0, por el require
const notify = require("gulp-notify")
const webp = require("gulp-webp")
const concat = require("gulp-concat")

sass.compiler = require("dart-sass")

const paths = {
    imagenes: "./src/img/**/*",
    scss: "./src/scss/**/*",
    js: "./src/js/**/*.js"
}

function css(done) {
    return src(paths.scss)
        .pipe(sass())
        .pipe(dest("./build/css"))
}

function minificarcss() {
    return src(paths.scss)
    .pipe(sass({
        outputStyle: "expanded"
    }))
    .pipe(dest("./build/css"))
}

function imagenes() {
    return src(paths.imagenes) // Le todas las carpetas y todos los contenidos
    .pipe(imagemin()) 
    .pipe(dest("./build/img"))
    .pipe(notify({message: "Imagen minificada"}))
}

function javascript() {
    return src(paths.js)
    .pipe(concat("bundle.js"))
    .pipe(dest("./build/js"))
}

function versionWebp() {
    return src(paths.imagenes)
    .pipe(webp())
    .pipe(dest("./build/img"))
    .pipe(notify({message: "Version webp lista"}))
}

function whatchArchivos() {
    watch(paths.scss, css)
    watch(paths.js, javascript)
}

exports.css = css
exports.minificarcss = minificarcss
exports.imagenes = imagenes
exports.whatchArchivos = whatchArchivos

exports.default = series(css, javascript, imagenes, versionWebp, whatchArchivos)