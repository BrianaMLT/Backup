//VINCULACION

//<body>
    //<script src="nombre archivo .js"></script>
//</body>

//tratar de que tengan el mismo nombre, el html con css
//?POR QUE? xq puede ser que en el mismo trabajo tengamos diferentes js's con diferentes html's



//COMIENZO NORMAL DE TODO JS

console.log ("Hola como estan?")

//VARIABLES
//una cajita en donde metemos cosas. Tiene 3 tipos, us usamos 2 (let y const)

//declarada, que la estamos escribiendo.
//DATO: se escriben en "camelcase" = 1era en minuscula y 2da en mayuscula --- solo pueden ser declaradas una sola vez
//examples:

//= asignacion
//"" valor

let fruta ="banana"
let frutaDos ="pera"

//para ver resultado:

console.log (frutaDos);

//para que tmb aparezca la otra variable mas adelente

fruta ="manzana"
console.log (fruta);

//A una const no es poible cambiarle la variable>>>> dandonos error.
//ejemplo: un circulo con valor pi

//TIPOS DE DATOS

let string = "Hi i am a string" //texto alfanumerico. Estos NO se pueden sumar.
let number = 17.9 //texno solo numerico + decimales tmb. Estos se pueden sumar.
let boolean = false-true //son palabras reservadas, es si o no 

//datos especailes (errores/warnings)
//NaN - NULL - UNDEFINED

let malaDivision = "hola"/6
console.log (malaDivision);

let valorNull =null
console.log (valorNull);

let variableVacia
console.log (variableVacia);

//OPERADORES (manipulan el valor de la varibles)
//asignacion - aritmeticos - 

//operadores aritmeticos (+ - *)

let operacion = 10 + 5
console.log(operacion);

operacion++ //increment =16
operacion-- //decremento =14

console.log(operacion);

//modulo (devuelve el resto de una operacion) y nos sirve para saber si algo es par (0) o impar (1) 

let esPar= 15 % 2 //el resto de dividir 15 entre 2 = 1

console.log(esPar);

//operadores de comparacion (> >= < <=)

let mayorQue = 15 > 3 //da como respuesta un booleano (true/false)
console.log (mayorQue);

let mayorOIgualQue = 15 >= 16
console.log(mayorOIgualQue); //false

let menorQue = 15 < 3
console.log (menorQue); //false

//concanetacion: union de dos srings.

let nombre="Peter"
let apellido="Parker"
let nombreCompleto= nombre + " " + apellido + 4 //"" para espacio en el medio y 
console.log(nombreCompleto);

//a tener en cuneta: si le agregamos un number
// 2 a secas NO ES LO MISMO que "2". Uno es numero y el otro texto


//Template strings - COMBINACION DE TEXTOS Y VARIABLES (cadenas de text q intercambian variables)
//se usan `` (comillas invertidas) y ${} para interpolar variables

let edad=579
let templateStrings = `hola ${nombre} como estas? tu apellido es ${apellido}, tu edad es de ${edad}, bienvenido a mi pagina`

console.log (templateStrings);

//ARRAYS (listas/colleccion) se declaran con []

let listaDeSuper=["agua", "carne", "huevos", "veggies"] //cada array tiene un indice, q comienza en 0 con posiciones
console.log (listaDeSuper [3]); //aqui solo veo un elemento de la array =veggies
console.log (listaDeSuper.length); //muestra cantidad de elementos que tenemos

//metodos de array (push o pop)


listaDeSuper.pop () //saca el ultimo elemnto
console.log (listaDeSuper);

listaDeSuper.push ("fruta"); //agregamos un elemnto-lo intercambio
console.log(listaDeSuper);
