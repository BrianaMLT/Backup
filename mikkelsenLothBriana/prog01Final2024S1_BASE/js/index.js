console.log("index.js");

let form= document.querySelector(".search-form");
let msg= document.querySelector(".mensaje");
let campo= document.querySelector(".search");

form.addEventListener("submit", function (e) {
    e.preventDefault()

    if (campo.value == ""){
        msg.innerHTML= "El campo no puede estar vacío"; 
        msg.computedStyleMap.display="block";
    }else if(campo.value.lenght < 3){
        msg.innerHTML= "El texto debe tener 3 o más caracteres";
        msg.computedStyleMap.display="block";
    }else{
        form.submit()
    }
})