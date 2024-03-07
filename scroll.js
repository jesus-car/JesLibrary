let ubicacionPrincipal = window.scrollY            // Empezamos con la ubicacion en 0 que se ira actualizando
let nav = document.getElementById("nav")


window.addEventListener("scroll", () => {
    let ubicacionActual = window.scrollY
    if(ubicacionPrincipal >= ubicacionActual) {
        nav.style.top = "0px"
    } else{
        nav.style.top = "-80px"
    }

    // La nueva ubicacion se vuelve en la ubicacion principal y cuando se haga scroll al sentido contrario(arriba) aparecera de nuvo el menu
    ubicacionPrincipal = ubicacionActual

})