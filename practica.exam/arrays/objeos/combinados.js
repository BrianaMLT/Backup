//array pero con objetos
const arrayDeObjetos =[
    {
        nombre: "Briana",
        edad: 18,
        comidafav: "chuchi",
    },
    {
        nombre: "Clemen",
        edad: 17,
        comidafav: "burrito",
    },
    {
        nombre: "Pia",
        edad: 15,
        comidafav: "rolls canela",
    },
]

for (let i = 0; i < arrayDeObjetos.length; i++) {
    console.log(arrayDeObjetos[i]);//muestra lit los diferentes objetos
    console.log("Nombre: " + arrayDeObjetos[i].nombre)// muestra solo el nombre, estamos imprimendo sus diferentes propiedades.
}

//objeto pero c/ array. 
const objetoConArray = {
    nombre: "Objeto con Array",
    arr: ["bee","banana","dado","mouse"]
};

//queremos mostara cada uno de sus elementos pero ocn diferente algo

objetoConArray.arr.forEach((Element) =>{
    console.log(Element + "random");
})

// tradicionaal
const arrayAparte = objetoConArray.arr;

for (let i = 0; i < arrayAparte.length; i++) {
    console.log (arrayAparte[i] + "random2"); //asi no es muy limpia, por eso se puede...   
}