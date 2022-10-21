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
document.addEventListener("DOMContentLoaded", function() {
    crearGaleria()
})

function crearGaleria() {
    const galeria = document.querySelector(".galeria-imagenes") /* Crea una varibale mandando a llamar la etiqueta del index */
    
    for(let i = 1; i <= 12; i++) {
        const imagen = document.createElement("img") /* Crea un etiqueta y la mete en una variable para trabajar con ella */
        imagen.src = `./build/img/thumb/${i}.webp` /* Agrega la ruta de la imagen a la etiqueta */
        imagen.dataset.imageId = i
        /* Añadir el mostrar imagen */
        imagen.onclick = mostratImagen

        const lista = document.createElement("li") /* Crea una lista */
        lista.appendChild(imagen) /* Agrega las imagenes ya guardadas a la lista */

        galeria.appendChild(lista) /* Agrega la lista a la galeria */
    }
}

function mostratImagen(e) {
    const id = parseInt(e.target.dataset.imageId) /* Mangar el id del elemento */
    
    /* Genera una imagen */
    const imagen = document.createElement("img")
    imagen.src = `./build/img/grande/${id}.webp`

    const overlay = document.createElement("div")
    overlay.appendChild(imagen)
    overlay.classList.add("overlay")

    /* Cerra imagen cuando se da fuera */
    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove("fijar-body")
    }

    /* Boton para cerrar la imagen */
    const cerrarImagen = document.createElement("p")
    cerrarImagen.textContent = "X"
    cerrarImagen.classList.add("btn-cerrar")

    /* Cierra imagen cuando se da click */
    cerrarImagen.onclick = function() {
        overlay.remove();
        body.classList.remove("fijar-body")
    }

    overlay.appendChild(cerrarImagen)

    /* Mostrar en el HTML */
    const body = document.querySelector("body")
    body.appendChild(overlay)
    body.classList.add("fijar-body")
}