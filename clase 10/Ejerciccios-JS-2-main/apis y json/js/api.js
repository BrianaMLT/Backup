fetch("https://rickandmortyapi.com/api/character")
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let arrayDePersonajes= data.results;

    //1 Donde: Capturo el elemento html en donde quiero hacer una modificacion.
    let personaje = document.querySelector(".characterList")
    let characters= [];

    for (let i = 0; i < arrayDePersonajes.length; i++) {
        characters+= 
        `<article>
            <img src="${arrayDePersonajes[i].image}"alt=''>
            <p>Name:${arrayDePersonajes[i].name}</p>
            <p>Status:${arrayDePersonajes[i].status}</p>
        </article>`
    }
    personaje.innerHTML= characters

    console.log(data.results);
    //console.log(characters);

    let article = document.querySelectorAll("article")
    let section = document.querySelector(".characterList")
    section.style.display="flex"
    section.style.flexWrap="Wrap"
    section.style.justifyContent="Space-between"
    article.style.border="10px solid black"
    console.log(article, section);
})
.catch(function(error) {
    console.log("Error: " + error);
})