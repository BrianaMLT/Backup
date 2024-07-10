let frutas=[
    "peras","manzanas","banana"
]//array

//sessionStorage y local, utilzan leguaje json. 

let frutasSting= JSON.stringify(frutas)//convierte array en json, es importente el cambio. 
sessionStorage.setItem("frutas", frutasSting)
//si tengo este tipo de dato (array) es importante converirlo en formato tipo json

let frutasTraidas= sessionStorage.getItem('frutas')// al traerlo es en tipo json, cosa q no nos sirve...

let frutasParseadas= JSON.parse(frutasTraidas)//convierte el json en un array/formato js/como estaba en principio.
console.log(frutasParseadas);

//siemore tiene  estra en formato json, al guardarse y si lo necesitamos en js se usa parse. Stingyfy cunado lo tenemos que guardar. 