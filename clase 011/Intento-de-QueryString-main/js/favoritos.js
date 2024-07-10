//quiero ver que tiene el storgae
console.log(localStorage);

//guardar un objeto en el storgae
let localRecuperado= JSON.parse(localStorage.getItem("favoritos"));
console.log(localRecuperado);

let cotainer= document.querySelector(".container");
let titulo= document.querySelector(".titulo");
let boton= document.querySelector(".button");

//Si aún no tuviese ningún GIF esta página debe indicar que:
//aún no tiene gifs favoritos.
if(localRecuperado == null){
    titulo.innerHTML= `<h1></h1>`
    cotainer.innerHTML=`<h1> No hay personajes favoritos seleccionados aun</h1>
                        <a href="api.html">Menu Principal<a/>`
}

//La página debe mostrar todos los personajes que han sido marcados como favoritos por el usuario.
fetch("https://rickandmortyapi.com/api/character")
.then(function(res){
    return res.json();
})
.then(function (data) {
    console.log(data);

    for (let i = 0; i < localRecuperado.length; i++) {
        cotainer.innerHTML +=`
        <img src="${data.results[localRecuperado[i]-1].image}" alt="${data.results[localRecuperado[i]-1].name}">
        <h2>${data.results[localRecuperado[i]-1].name}</h2>
        <p>${data.results[localRecuperado[i]-1].status}</p>
        <h3>Especie: ${data.results[localRecuperado[i]-1]}</h3>`;    
    }

    boton.addEventListener("click", function(){
        localStorage.clear()
        location.reload()
    })
})
.catch(function (err) {
    console.log(err);
})