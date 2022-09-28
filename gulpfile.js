const { src, dest, watch } = require("gulp")
const sass = require('gulp-sass')(require('sass'))

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

function whatchArchivos() {
    watch("src/scss/**/*.scss", css)
}

exports.css = css
exports.minificarcss = minificarcss
exports.whatchArchivos = whatchArchivos