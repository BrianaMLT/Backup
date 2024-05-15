console.log("Objetos Literales")

let misDatos={
    nombre: "Briana",
    apellido: "Mikkelsen-loth",
    dni: 46048841,
    favFoods: ["sushi", "wok de verduras", "arroz con atun"],
    age: 18,
    saludar: function() {
        return `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.age} años. Mi primera comida favorita es ${this.favFoods[0]}`
    }
}
console.log(misDatos.saludar());

let auto={
    marca:"Toyota",
    modelo:"Hilux",
    anio: "2024",
    color:"Blanco",
    posicion:0,
    avanzar (n) {
        this.posicion += n;
    },
    retroceder (n){
        this.posicion -= n;
    }
}
auto.avanzar(100);
auto.retroceder(50)
console.log(auto.posicion);

let nuevoAuto={
    marca:"Toyota",
    modelo:"Hilux",
    anio: "2024",
    color:"Blanco",
    posicion:0,
    moverse (n) {
        this.posicion 
    } 
}
