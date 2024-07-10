let formsStrin= localStorage.getItem("arrayDeData");
let msg= document.querySelector("#msgFail")

if(formsStrin == null || formsStrin.length === 0){
    msg.innerHTML= `No hay usuarios registrados`
    msg.style.display= "block";
    console.log(localStorage);
}else{
    let formsArray= JSON.parse(formsStrin);
    console.log(formsArray);
    //Recorremos el array y mostramos los datos
    for (let i = 0; i < formsArray.length; i++) {
        let caja= document.querySelector(".caja")
        caja.innerHTML+= `
            <h1>Datos del Form</h1>
            <h3>Nombre: ${formsArray[i].fullName}</h3>
            <p>Email: ${formsArray[i].email}</p>
            <p>Contraseña: ${formsArray[i].password}</p>
            <p>Celular numero: ${formsArray[i].phone}</p>`
    }
    //msg.style.display= "none";
}
