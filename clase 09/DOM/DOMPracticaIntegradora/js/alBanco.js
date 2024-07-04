let resp= document.querySelector(".respuesta")
let diaDeSemana= prompt("Ingrese un dia de la semana")
let horaActual= prompt("Cual es la hora actual?")

if ((diaDeSemana !== "sabado" && diaDeSemana !== "domingo") && (horaActual >= 10 && horaActual <= 15)){
    resp.innerText= "¡Bien! Todavía estamos a tiempo de llegar";
}else{
    resp.innerText= "Uf… No llegamos";
}