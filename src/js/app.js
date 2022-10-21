document.addEventListener("DOMContentLoaded", function () {
    scrollNav();
    navegacionFija();
})

function navegacionFija() {
    const barra = document.querySelector(".header");
    const sobreFestival = document.querySelector(".sobre-festival");

    window.addEventListener("scroll", function () {
        if (sobreFestival.getBoundingClientRect().bottom < 0) {
            barra.classList.add("fijo");
        } else {
            barra.classList.remove("fijo");
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