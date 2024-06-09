let campoNombre= document.querySelector("#nombre")//funciona cuando toco el campo

campoNombre.addEventListener(`focus`, function () {
    console.log(`Estas usando foucs`);
})

let campoEmail= document.querySelector("#email")//funciona cunado salgo del campo 

campoEmail.addEventListener(`blur`, function () {
    alert(`Estas usando blur`);
})


campoNombre.addEventListener(`input`, function () {//se verifica cunado cmabia el valor del evento. 
    console.log(campoNombre.value);
})

//submit, se verifca en el meonto en quqe se envia. 

//
let form= document.querySelector(`form`)//captura toda etiqueta formulRIO

form.addEventListener(`submit`, function (e) {
    e.preventDefault()

    if (campoNombre.value == `` ){
        alert(`Tenes que completar nombre`)
    }else if (campoNombre.value == ``) {
        alert(`tenes q completar email`)
    }else{
        form.submit(`Congrats! Lo hiciste`)//poner this o form, es lo mismo
    }
})