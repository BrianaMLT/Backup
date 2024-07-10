//1. capturar todos los campos
let form= document.querySelector(".contact-form");
let fullName= document.querySelector("#fullName");
let email= document.getElementById("email");
let cellphone= document.getElementById("cellphone");
let password= document.getElementById("password");
let rePassword= document.getElementById("rePassword");

//mensajes de error
let msgError= document.querySelectorAll(".invalid-feedback"); 
let errName= document.querySelector(".fullName");
let errEmail= document.querySelector(".email");
let errCelu= document.querySelector(".phone");
let errPass= document.querySelector(".password");
let errRePass= document.querySelector(".rePassword");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    //objetivo de esta práctica es validar completamente el formulario presente en el archivo html.

    //limpiar los mensajes de error
    msgError.forEach(msg => msg.style.display = "none");
    errName.innerHTML= '';
    errEmail.innerHTML= '';
    errCelu.innerHTML= '';
    errPass.innerHTML= '';
    errRePass.innerHTML= '';

    let errors= false;

    //validar que los campos esten llenos
    if(fullName.value === ""){
        errName.innerHTML= "El nombre es obligatorio"
        errName.style.display= "block";
        errors= true;
    }
    if(email.value == ""){
        errEmail.innerHTML="El mail es obligatorio"
        errEmail.style.display= "block";
        errors= true;
    }
    if((cellphone.value == ""))  {
        errCelu.innerHTML="Falta tu numero de cell"
        errCelu.style.display= "block";
        errors= true;
    }else if (cellphone.value.length < 8) {  //validar que el número de celular tenga al menos 8 caracteres
        errCelu.innerHTML= `El numero de celular debe tener al menos 8 caracteres`;
        errCelu.style.display= "block";
        errors= true;
    }
    if (password.value == "") {
        errPass.innerHTML+= `La password es necesaria`;
        errPass.style.display= "block";
        errors= true;
    }else if(password.value.lenght < 3){
        errPass.innerHTML+= `<p>La contraseña debe ser mayor a 3 caracteres.</p>`
        errPass.style.display= "block";
        errors= true;    
    }
    if (rePassword.value == ""){
        errRePass.style.display= "block";
        errors= true;
        errRePass.innerHTML = `Repeti la password`;
    } else if(rePassword.value !== password.value){
        errRePass.innerHTML+= `<p>Las contrasenas no coinciden</p>`
        errRePass.style.display="block";
        errors= true
    }

    if(!errors){
        let formData= {
            fullName: fullName.value,
            email: email.value,
            phone: cellphone.value,
            password: password.value,
            rePassword: rePassword.value
        };
    let existingData= localStorage.getItem("arrayDeData")
    let arrayDeData= [];
    //arrayDeData.push(formData)
        //esto para solo nueva info de cada users sin "concatenar"
    //localStorage.setItem("arraDeData", JSON.stringify(arrayDeData))
    //console.log(localStorage)
    
        //ahora yo quiero ir acumulando la info ingresada.
    //let existingData= localStorage.getItem("arrayDeData");
    
    //chequeamos si esta existe, es de cir, ya hay info dentro 
    if (existingData !== null && existingData!== "" ){
                //es diferente de/ y a su vez
        arrayDeData= JSON.parse(existingData); //las juntamos 
    }   
    arrayDeData.push(formData); //agregamos nueva data del array
    //despues de cada agregado, volvemos a ponerlo en el local storage para tenerlo guardado.  //es como si lo almacenamos en una bd.  //lo pasamos de objeto a string con JSON.stringify y luego de nuevo a objeto con JSON.parse.  //es como si lo almacenamos en una bd.  //lo pasamos de objeto a string con JSON.stringify y luego de nuevo a objeto con JSON.parse
    localStorage.setItem("arrayDeData", JSON.stringify(arrayDeData))
    //si no hay errores, enviar el formulario
    if (!errors){
        form.submit()
    }
}
})