console.log("eventos.js")
let boton = document.querySelector(".add-to-cart")
let single = document.querySelector(".single")

boton.addEventListener("click", function(e){
    e.preventDefault()	
    single.innerHTML = "<h3>Muchas gracias por tu compra</h3>"
})