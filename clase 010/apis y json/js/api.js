fetch("https://rickandmortyapi.com/api/character")
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data.results);

    let personaje = document.querySelector(".characterList")
    //personaje.innerHTML = `<p>personajes:${data.results[6].name} </p>`

    //for (let i = 0; i < data.results.length; i++) {
        //personaje.innerHTML+= `<p>personajes:${data.results[i].name} </p>`
    //}
    let character= ``
    for (let i = 0; i < data.results.length; i++) {
        personaje.innerHTML+= 
        `<article>
            <img src="${data.results[i].image}"alt=''>
            <p>Name:${data.results[i].name}</p>
            <p>Status:${data.results[i].status}</p>
        </article>`
    }

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


