console.log(location);

let queryString= location.search
console.log(queryString);

let queryStringObj= new URLSearchParams(queryString)
console.log(queryStringObj);

let id= queryStringObj.get("id")
console.log(id);

fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        console.log(data);
        let section= document.querySelector("section")
        section.innerHTML= `<h2 class="nombre">${data.name}</h2>
        <img src=${data.image} alt="" class="img"> 
        <p class="estado">Status:${data.status}</p>
        <p class="especie">Especie:${data.species}</p>
        <a class="fav" href="#">Agregar a favoritos</a> `
        
        if(localStorage.getItem("favoritos") === null){
            
            favoritos= [];
            console.log(favoritos);

            let favsJson= JSON.stringify(favoritos)
            console.log(favsJson);

            localStorage.setItem("favoritos", favsJson)
            console.log(localStorage);
        }
        
        let link= document.querySelector(".fav")

        link.addEventListener("click", function (e) {
                e.preventDefault()
                //Agregar personaje a favoritos
                let recuperados= localStorage.getItem("favoritos")
                let favRecu= JSON.parse(recuperados)

                favRecu.push(id);
                console.log(favRecu);

                localStorage.setItem("favoritos", JSON.stringify(favRecu))
            })
            console.log(localStorage);
    })
    .catch(function (err) {
        console.log(err);
    })