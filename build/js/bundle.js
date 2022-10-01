
document.addEventListener("DOMContentLoaded", function() {
    crearGaleria()
})

function crearGaleria() {
    const galeria = document.querySelector(".galeria-imagenes") /* Crea una varibale mandando a llamar la etiqueta del index */
    
    for(let i = 1; i <= 12; i++) {
        const imagen = document.createElement("img") /* Crea un etiqueta y la mete en una variable para trabajar con ella */
        imagen.src = `./build/img/thumb/${i}.webp` /* Agrega la ruta de la imagen a la etiqueta */

        const lista = document.createElement("li") /* Crea una lista */
        lista.appendChild(imagen) /* Agrega las imagenes ya guardadas a la lista */

        galeria.appendChild(lista) /* Agrega la lista a la galeria */
    }
}