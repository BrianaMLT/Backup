//alert("Hola Briana, esto es un mensaje alert")

let mensajeAlerta = "Los mensajes se pueden guardar en una variable"

alert(mensajeAlerta)

//Prompt: semajente, la diferenica es que se le hace 
//una pregunta al usuario y nosotros vamos a poder guerdar el mensaje

let mensajeUsuario= prompt("Hola, como va todo?")

console.log(mensajeUsuario);//semejante as vitacora: that is why se guarda

//CONFIRM: preuntas de si/no, y devuelve un boolenao.

let respuestaCita= confirm("Te gustaria salir conmigo?")

console.log(respuestaCita);//muy importante p/ ver dsp las respuestas, importente declaralas con let 


//CONDICIONALES:base de la progrmacion, reflaja una pregunta y define el cogi oq se ejecuta de acardo a la respuesta obtneida
// BLOQUE IF; palabra reservada 

if (5 < 7) {
    alert("efectivamante 5 es menor que 7")
}//devuelve algo xq es TRUE, si fuera FALSE no devolveria nada.


//IF Y ELSE

if (9 < 10) {//true
    alert ("9 es < a 10")//true
} else{//pero en caso de que sea al reves, falso, se activa este
    alert("9 es un numero muy chico")
}

let edadUser= prompt("que edad tenes?")

if (edadUser <= 15) {
    alert ("No podes entrar")
} else{
    alert("Podes entrar")
}

//IF, ELSE IF Y ELSE

if (edadUser <= 13) {
    alert ("No podes entrar")
} else if (edadUser <= 17){
    alert ("Puedes pasar con un adulto")
}else{
    alert("Podes entrar")
}


//OPERADORES: manipulan el valor de las variables, que es? un >,+,=, etc.

//idualdad 

//= asignar valores, no estamos comparando. 
//==  aqui si compara.

//Dos tipos: simple (==), estricta (===), pregunta si todo es igual. 

10 == "10"//true
5 === "5"//false

//desigualdad: mismo q antes, solo que con signo !

10 != "10"//false
5 !== "5"//true

//devuelven boolenaos

//LOGICOS: combian mas de 2 resuektados 
//3 tipos:

//AND (&&): evalua que ambas condiciones se den simultanemente.

//OR (2 palos rectos): evalua si al MENOS alguna d elas dos se cumple. 
//Pueden excribisrse con varias condiciones no solo dos

//NOT(!): niega el resultado de una operacion, el opuesto/vicerversa/ 

//DOM
//A la hora se selccionar elementos, puede ser por ID, nombre de CLASE o ETIQUETA

//SELECTORES, notacion como en css; clase (.), etiqueta (nombre)
//QUERYSELECTOR: uno solo

let guardar = document.querySelector("p")//eleige simepre el primero, si hay otro no lo captura. tienen que ser en string
console.log(guardar);

//QUERYSELECTORALL: 

let arrayGu= document.querySelectorAll("p")
console.log(arrayGu[1]);

let h2 = document.querySelector(".class3");
console.log(h2);

//modoficandolosssssssssssss
//style: te permite leer y sobreescribir al estilo de un elemtno

//titulo.style.la propiedad(color, size, backgroundcolor)
h2.style.color="red";
h2.style.size= "200px";

///INNNERText; retorneo rl texto de un lemento y lo modifica, y no reconoce estructuras internas del elemtno
//<h3>texto original</3>
//document.querySelector("h3").innerText="texto changed"

//iinerHTML; retorneo la estructura de un lemento y lo modifica. reeplaza estuctura interna de un elemnto agregadp

//<p></p>
document.querySelector("p").innerHTML="HOLA <strong> mundo</strong>"; //+= add contenido
h2.innerHTML = "hola me cambiaorn" // innerText: es solo el texto.