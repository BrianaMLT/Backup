console.log("funciones.js");
// viajarEnElTeempo
function viajarEnElTeempo(number) {
    if(number >= 55){
        return "Viajamos a 1955!!";
    }else{
        return "Necesitamos mas velocidad"; 
    }
}

console.log(viajarEnElTeempo(33));
console.log(viajarEnElTeempo(999));

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

let personaje= [];

function soloNombres(personaje) {
    let nombres= [];
    
    for (let i = 0; i < personaje.length; i++) {
    const element = personaje[i];
    nombres.push(element.nombre)
    }
    return nombres
}

let soloNombresGente= soloNombres(got) 
console.log(soloNombresGente);