let search= location.search
console.log(search);

let queryString= new URLSearchParams(search)
//log opcional

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

        //for (let i = 0; i < data.results.length; i++) {
           // let info = data.results[i];
            //searchResultsElement.innerHTML += 
            //`<article>
              //  <img src=${data.image} alt='' />
                //<p>Name: ${data.name} </p>
                //<p>Status: ${data.status}</p>
      //  </article>`
        //}

        //let sec= document.querySelector(".search-results")
        //sec.innerHTML= data.results.map(CharacterData)
                    //`<article>
                        //<img src=${CharacterData.image} alt='' />
                        //<p>Name: ${CharacterData.name} </p>
                      //  <p>Status: ${CharacterData.status}</p>
                    //</article>`
                   
                    // selector.innerHTML = data.results.map(character => 
                       // `<article>
                           // <img src=${character.image} alt='' />
                           // <p>Name: ${character.name} </p>
                         //   <p>Status: ${character.status} </p>
                       // </article>`
                    //).join('');

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

                    ////for (let i = 0; i < data.results.length; i++) {
                        //selector.innerHTML+=`<article>
                        //<img src= ${data.results[i].image} alt='' />
                       // <p>Name:${data.results[i].name} </p>
                       // <p>Status:${data.results[i].status} </p>
                       // </article>
                    //`}
    })
    .catch(function (err) {
        console.log(err);
    })
