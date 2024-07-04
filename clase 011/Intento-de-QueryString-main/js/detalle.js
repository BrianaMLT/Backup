console.log(location);

let queryString= location.search

let queryStringObj= new URLSearchParams(queryString)

let id= queryStringObj.get("id")

console.log(id);

fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        let section= document.querySelector("section")
        section.innerHTML= `<h2 class="nombre">${data.name}</h2>
        <img src=${data.image} alt="" class="img"> 
        <p class="estado">Status:${data.status}</p>
        <p class="especie">Especie:${data.species}</p> `
    })
    .catch(function (err) {
        console.log(err);
    })