const { series, src, dest, watch } = require("gulp")
const sass = require('gulp-sass')(require('sass'))
const imagemin = require("gulp-imagemin") // Solo es posible usalo en la version 7.1.0, por el require
const notify = require("gulp-notify")

sass.compiler = require("dart-sass")

function css(done) {
    return src("./src/scss/app.scss")
        .pipe(sass())
        .pipe(dest("./build/css"))
}

function minificarcss() {
    return src("./src/scss/app.scss")
    .pipe(sass({
        outputStyle: "expanded"
    }))
    .pipe(dest("./build/css"))
}

function imagenes() {
    return src("./src/img/**/*") // Le todas las carpetas y todos los contenidos
    .pipe(imagemin()) 
    .pipe(dest("./build/img"))
    .pipe(notify({message: "Imagen minificada"}))
}

function whatchArchivos() {
    watch("src/scss/**/*.scss", css)
}

exports.css = css
exports.minificarcss = minificarcss
exports.imagenes = imagenes
exports.whatchArchivos = whatchArchivos

exports.default = series(css, imagenes, whatchArchivos)