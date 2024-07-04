let nombrePlease= prompt("Ingrese su nombre de usuario")

console.log(nombrePlease);

let edad= prompt("Ingrese su edad")

console.log(edad);

let fanDeportes= confirm("Te gustan los deportes?")

console.log(fanDeportes);

alert("Muchas gracias " + nombrePlease + " por responder nuestras preguntas")

let usuario={
    nombrePlease,
    edad,
    fanDeportes,
    deportistaProfesional() {
        if (fanDeportes) {
            alert("Si, soy fan de los deportes")
        }else{
            alert("No soy tan fan aún de los deportes")
        }
    }
}

console.log(usuario.deportistaProfesional());