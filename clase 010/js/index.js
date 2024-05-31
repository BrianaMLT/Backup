// EVENTOS Y API

//accion que trascurre en el navegar, el hacer un click, cuando se posa un mouse sobre un elemento. 
//pensar en: 
// donde (h1), que evento (click) , cual sera accion suceda (camvie de color).

let botton= document.querySelector("button") // lo hagarramos y guardamos en una variable. 

botton.addEventListener("click", function () {//cuando escuches un click, manda una alerta.
    alert("Esto es una alerta")
})//parentesis por ser una funcion

let titulo= document.querySelector("h1")

titulo.addEventListener("mouseover", function (e) {
    console.log(e);
    titulo.style.color= "red"
    titulo.style.fontSize= "100px"
})

titulo.addEventListener("mouseout", function () {
    titulo.style.color= "black"
    titulo.style.fontSize= "50px"
})

//tres temas a tener en cuenta
//e
//this: para hcer referenica al propio evento/elemtno.
//preventDefault: ciertas acciones como x ejemplo los forms, que se envian vacios. 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//API: Sistema de intermcabio de informacion entre aplicaciones. Biblioteca qe tinee info que voy a usar en mi pagina
//JSON: un formato de intercmbio de dstos, es una cadena de textos "objeto literal"

//ASINCRONISMO: 
//FETCH: funciona en conjutno de otras, metodo q consukta/busca informacions de las apis. Como es asincronico usar: THEN.
// Y el CATCH es por si hay un error. 


fetch("https://rickandmortyapi.com/api/character/1")
    .then(function (res) {
        return res.json()//transforma a un tipo de dato manejable 
    })
    .then (function (data) {
        console.log(data);
        let personaje= document.querySelector("#personaje")
        personaje.innerHTML = `<h2>${data.name}</h2> <img src="${data.image}">`
    })
    .catch(function (err) {
        console.log(err);
    })