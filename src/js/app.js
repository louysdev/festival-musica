document.addEventListener("DOMContentLoaded", function () {
    scrollNav();
    navegacionFija();
})

function navegacionFija() {
    const barra = document.querySelector(".header");
    const sobreFestival = document.querySelector(".sobre-festival");
    const body = document.querySelector("body");

    window.addEventListener("scroll", function () {
        if (sobreFestival.getBoundingClientRect().bottom < 0) {
            barra.classList.add("fijo");
            body.classList.add("body-scroll");
        } else {
            barra.classList.remove("fijo");
            body.classList.remove("body-scroll");
        }
    })
}

function scrollNav() {
    const enlaces = document.querySelectorAll(".navegacion-principal a");

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function (e) {
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({ behavior: "smooth" });
        })
    })
}