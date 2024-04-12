console.log ("Hola como estan")


//variables
//declarada, que la estamos escribiendo.

let fruta ="banana"
let frutaDos ="pera"

console.log (frutaDos);

fruta ="manzana"
console.log (fruta);

//tipos de datos.

let string = "Hi i am a string"
let number = 17.9
let boolean = false

//datos especailes 
let malaDivision = "hola"/6
console.log (malaDivision);

let valorNull =null
console.log (valorNull);


//operadores aritmeticos
let operacion = 10 + 5
console.log(operacion);

operacion++

console.log(operacion);

//modulo

let esPar= 15 % 2

console.log(esPar);

//operadores de comparacion

let mayorQue = 15 > 3
console.log (mayorQue);

let mayorOIgualQue = 15 >= 16

console.log(mayorOIgualQue);

let menorQue = 15 < 3
console.log (menorQue);

//concanetacion: union de dos srings.

let nombre="Peter"
let apellido="Parker"
let nombreCompleto= nombre + " " + apellido + 4
console.log(nombreCompleto);
//a tener en cuneta: si le agregamos un number


//Template strings
let edad=579
let templateStrings = `hola ${nombre} como estas? tu apellido es ${apellido}, tu edad es de ${edad}, bienvenido a mi pagina`
console.log (templateStrings);

//arrays

let listaDeSuper=["agua", "carne", "huevos", "veggies"]
console.log (listaDeSuper [3]);
console.log (listaDeSuper.length);

//metodos de array


listaDeSuper.pop ("fruta") 
console.log (listaDeSuper);

