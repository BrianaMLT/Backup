let resp= document.querySelector(".respuesta")
let diaDeHoy= prompt("¿Que dia es hoy?")

if (diaDeHoy == "domingo") {
    resp.innerText = "¡Pongamos la olla, hoy se comen pastas!";
}else{
    resp.innerText= "Mejor lo dejamos para el domingo";
}
console.log(diaDeHoy, resp);