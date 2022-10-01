
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
    }

    /* Boton para cerrar la imagen */
    const cerrarImagen = document.createElement("p")
    cerrarImagen.textContent = "X"
    cerrarImagen.classList.add("btn-cerrar")

    /* Cierra imagen cuando se da click */
    cerrarImagen.onclick = function() {
        overlay.remove();
    }

    overlay.appendChild(cerrarImagen)

    /* Mostrar en el HTML */
    const body = document.querySelector("body")
    body.appendChild(overlay)
    body.classList.add("fijar-body")
}