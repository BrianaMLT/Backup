
fetch("https://rickandmortyapi.com/api/character")
    .then(function(response) {
        return response.json() //tipo de dato que yo puedo manipular 
    })
    .then(function(data) {
        console.log(data.results);

        let personaje = document.querySelector(".characterList")
        let personjaesRecorridos= ``
        let info= data.results;
        
        for (let i = 0; i < info.length; i++) {
            personjaesRecorridos+= `<article>
                ////////////////<a href="./detalle.html?id=${info[i].id}">///////////
                                <img src=${info[i].image}>
                                </a>
                                <h2>${info[i].name}</h2>
                            </article>`
        }
        
        personaje.innerHTML= personjaesRecorridos


    })
    .catch(function(error) {
        console.log("Error: " + error);
})
