console.log("Cálculos con variables")

let nombre="Briana"
let apellido="Mikkelsen-loth"
let sueldoActual=900000
let porcentajeAumento=20
let calculoAumento= sueldoActual * (porcentajeAumento/100);
let nuevoSueldo= sueldoActual + calculoAumento
let templateString = `Hola, ${nombre} ${apellido}
En base a tu sueldo actual:
$${sueldoActual}
Recibiste un aumento del 20%:
$${calculoAumento}
Tu nuevo suledo es de:$ ${nuevoSueldo}`

console.log(templateString);
