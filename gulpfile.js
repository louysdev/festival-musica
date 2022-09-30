const { src, dest, watch } = require("gulp")
const sass = require('gulp-sass')(require('sass'))
const imagemin = require("gulp-imagemin")

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
}

function whatchArchivos() {
    watch("src/scss/**/*.scss", css)
}

exports.css = css
exports.minificarcss = minificarcss
exports.imagenes = imagenes
exports.whatchArchivos = whatchArchivos