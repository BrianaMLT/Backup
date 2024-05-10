//Por que "index" porque es el primero, solo tenemos ese x el momneto 

function restar (num1, num2) {
    return num1 - num2
}

//SE AGRGAN CANTIDAD DE PARAMETROS NECESASARIOS, NO SON PALABRAS RESERVADAS
function tostadora(pan1, pan2, temperatura){
    let tostadora = pan1 + pan2 + temperatura
    return tostadas
}

//ODS TIPOS DE FUNCIONES (DECLARAS, LA BASICA) Y LAS EXPRESADAS 
//LA diferenica es que las 2das se guardan en una variable. 
//se recomeinda la declarada

//INVOCACION DE F

restar(10,6)
//como no tiene parametros nos dara como resultdo= undefined 
let resultado= restar (10,6)
console.log(resultado);

console.log(restar(10 - 6));


//SCOPE DE VARIABLES
//LOCAL: vive solo dentro de esa ,inea y no es posible ejecutarla x fuera (dentro del bloque de codigo)
//GLOBAL: acceso a ella desde cualquier lado 


//OBJETOS LITERALES
//un blowu de codigo q reresenta un objt de la vida real
// se escribe varibale nombre prpiedad dos putnos valor

let celular={
    modelo: "iphone 19",//propiedad escrita, para mas ,
    gb: 200, 
    bluethooth: true, 
    colores: ["blanco", "negro", "azul", "rosa"],//array: collecion de datos
    encender : function(){
        retur: "me encendi" + this.modelo
    }
}

celular.gb

console.log(celular.colores[2]);

//tmb se pueden grbbabr funciones a travezs de objetos, ejemplo:

//THIS: palabra declarada que


//BUQLES/loops:repetir el mismo codigo muchas veces. 
//for tiene tre paramteos incio condicion modificador + linea de cogido

for (let i = 0; i < 6; i++) {
    //const element = array[index];
    console.log(`Saludo numero ${i}`);
}

//muy buebo cuando necesitamos recorrer array y pasar por cada una de sus posciones

let frutas2 = ["manzana", "banana", "uva", "kiwi", "sandia", "pera"]
    for (let i = 0; i < frutas2.length; i++) {
        console.log(frutas2[i]);
    }