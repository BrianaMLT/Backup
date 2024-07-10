console.log("index.js");
let form = document.querySelector(".search-form")
let busqueda = document.querySelector(".search")
let mensaje = document.querySelector(".mensaje")

form.addEventListener("submit", function(e){
    e.preventDefault()
    if(busqueda.value == ""){
        mensaje.innerText+= "El campo no puede estar vacío."
    } else if(busqueda.value.length < 3){
        mensaje.innerText+= "El texto debe tener 3 o más caracteres"
    } else {
        form.submit()
    }
})