let search= location.search
console.log(search);

let queryString= new URLSearchParams(search)
console.log(queryString);

let buscado= queryString.get (`q`)//value
console.log(buscado);

let selector= document.querySelector(".search-results")
//let personajeUnico= buscado

fetch(`https://rickandmortyapi.com/api/character/?name=${buscado}`)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        console.log(data);
        if (data.results && data.results.length > 0) {
        // Utiliza map para crear los artículos
        selector.innerHTML = data.results.map(character => 
            `<article>
                <img src="${character.image}" alt="" />
                <p>Name: ${character.name}</p>
                <p>Status: ${character.status}</p>
            </article>`
        ).join('');
        } else {
        // Manejo del caso donde no se encuentran resultados
        selector.innerHTML = '<p>No se encontraron resultados</p>';
        }
    })
    .catch(function (err) {
        console.log(err);
    })
