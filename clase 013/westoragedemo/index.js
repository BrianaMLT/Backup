let frutas=[
    "peras","manzanas","banana"
]//array

//sessionStorage y local, utilzan leguaje json. 

let frutasSting= JSON.stringify(frutas)//convierte array en json, es importente el cambio. 
sessionStorage.setItem("frutas", frutasSting)

let frutasTraidas= sessionStorage.getItem('frutas')

let frutasParseadas= JSON.parse(frutasTraidas)//convierte el json en un array
console.log(frutasParseadas);

//siemore tiene  estra en formato json, al guardarse y si lo necesitamos en js se usa parse. Stingyfy cunado lo tenemos que guardar. 