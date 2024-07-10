console.log("producto.js");

let querystring = location.search;
let querystringObj = new URLSearchParams(querystring);
let sku = querystringObj.get('sku');
console.log(sku);

let description = document.querySelector(".description")
let price = document.querySelector(".price")
let category = document.querySelector(".category")
let imagen = document.querySelector(".single img")

fetch(`https://fakestoreapi.com/products/${sku}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    description.innerText += data.description;
    price.innerText += data.price;
    category.innerText += data.category;
    imagen.src = data.image;
})
.then(function(error){
    console.log(error);
})

