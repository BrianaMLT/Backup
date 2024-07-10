console.log("funciones.js");
// viajarEnElTeempo
function viajarEnElTiempo(num) {
    if(num >= 55){
        return "Viajamos a 1955!!"
    }else{
        return "Necesitamos más velocidad"
    }
}
console.log(viajarEnElTiempo(80))
console.log(viajarEnElTiempo(30))

// Solo nombres.
let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]

console.log(got);

let personaje= [];

function soloNombres(personaje) {
    let nombres = []; // Iniciamoss un array vacio para coleccionaar los nombres

    for (let i = 0; i < personaje.length; i++) {
        const element = personaje[i];
        nombres.push(element.nombre); // Le aagregamos el nombre del personaje al array 'nombres' 
    }

    return nombres; // Retornea el array de solo nombres 
}

let nombresPersonas= soloNombres(got);
console.log(nombresPersonas);
