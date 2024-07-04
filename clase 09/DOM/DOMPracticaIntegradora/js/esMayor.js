let userNum= prompt("Por favor, ingrese un nuemro")
let userOtroNum= prompt("Otro mas dale")
let resp= document.querySelector(".respuesta")

if(userNum > userOtroNum){
    resp.innerText= ` ${userNum} es el numero mayor`
}else{
    resp.innerHTML= `${userOtroNum} es el numero mayor en efecto`
}

console.log(resp);
