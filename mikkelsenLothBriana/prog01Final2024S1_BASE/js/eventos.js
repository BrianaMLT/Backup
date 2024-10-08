console.log("eventos.js")

let msg= document.querySelector(".single");
let boton= document.querySelector(".add-to-cart");
//let section= document.querySelector("")

boton.addEventListener("click", function(e){
    e.preventDefault()
    msg.textContent= "<h3>Muchas gracias por tu compra</h3>"
})