//1. Obtenemos los personajes selccionados ids del local storage. 
let favsCharacters= JSON.parse(localStorage.getItem("personajeFav"));
console.log(favsCharacters);

//let qs = location.search; //Obtener la qs de la url
//let qsto = new URLSearchParams(qs); //Transformar la qs en un Objeto Literal
//let id = qsto.get('id')

//asumimos lo peor
let cartContainer= document.querySelector(".empty")
//2. Llamamos a la API para obtener la información de los personajes.
//let url= `https://rickandmortyapi.com/api/character/${id}`
//fetch(url)
//.then(function (res) {
      //  return res.json()
    //})
//.then(function (data) {
    //console.log(data)
    if (cartItems.length === 0){
        let mgs =document.createElement("p");
        mgs.textContent= "Your cart its empty";
    }else{
        function display(characters){
    let lista= document.querySelector(".lista");
    let info= '';
    for (let i = 0; i < characters.length; i++) {
        info +=`<article>
                                <img src=${characters[i].image}>
                                <p>Nombre: ${characters[i].name}</p>
                                <p>Status: ${characters[i].status}</p>
                                <a href="detalle.html?id=${characters[i].id}">Ver más</a>
                            </article>`
    }
    console.log(info);
    lista.innerHTML= info;
}
    }
//})
//.catch(function (err) {
    //console.log(err);
//})
//3. Cremos fucnione que muestre los persoajes. 
