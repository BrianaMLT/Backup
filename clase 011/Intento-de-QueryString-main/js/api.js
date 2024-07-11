
fetch("https://rickandmortyapi.com/api/character")
    .then(function(response) {
        return response.json() //tipo de dato que yo puedo manipular 
    })
    .then(function(data) {
        console.log(data.results);

        let personaje = document.querySelector(".characterList")
        let personjaesRecorridos= ``
        
        for (let i = 0; i < data.results.length; i++) {
            personjaesRecorridos= personjaesRecorridos + `<article>
                ////////////////<a href="./detalle.html?id=${data.results[i].id}">///////////
                                <img src=${data.results[i].image}>
                                </a>
                                <h2>${data.results[i].name}</h2>
                            </article>`
        }
        
        personaje.innerHTML= personjaesRecorridos


    })
    .catch(function(error) {
        console.log("Error: " + error);
})
