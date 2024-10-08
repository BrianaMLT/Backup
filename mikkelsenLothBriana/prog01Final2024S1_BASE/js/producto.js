console.log("producto.js");

let queryString= location.search
console.log(queryString);
let queryStringObj= new URLSearchParams(queryString);
console.log(queryStringObj);
let id= queryStringObj.get ("sku")
console.log(id);

let description= document.querySelector(".description");
let price= document.querySelector(".price");
let cat= document.querySelector(".category");
let nombre= document.querySelector(".title")
let img= document.querySelector("img");

let section= document.querySelector(".single");
//let article= document.querySelector(".product");

fetch(`https://fakestoreapi.com/products/${id}`)
.then(function(res){
    return res.json()
})
.then(function (data) {
    console.log(data);
    
    nombre.innerHTML= data.title
    section.innerHTML= `
    <img src="${data.image}">
    <article class="product">
                <h3>Descripción del producto</h3>
                <p class="description">${data.description}</p>
                <p class="price">Precio: $${data.price}USD</p>
                <p class="category">Category:${data.category} </p>
                <a class="add-to-cart" href="./index.html">Agregar al carrito</a>
            </article>`
})
.catch(function (err) {
    console.log(err);
})