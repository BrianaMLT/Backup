//encarga de la valiudacion del form, antes dee ser enviado.
document.addEventListener("DOMContentLoaded", function () {
    let form= document.querySelector("#form")
    let nombre= document.querySelector("#nombre")
    let email= document.querySelector("#email")
    let msg= document.querySelector(".loco")

    console.log(form);
    form.addEventListener("submit", function (e) {
        e.preventDefault()
        if (nombre.value == "") {
            msg.innerHTML= "Complete su nombre"
        }else if (nombre.value.lenght < 5){
            msg.innerHTML= "Minimo un nombre de 5 letras"
        }else{
            msg.textContent= "Prosiga"
        }
        console.log(msg);
        if(email.value == ""){
            msg.innerHTML= "<strong>Complete su email </strong>"}
        else{
            form.submit()
        }
        console.log(msg);
    });
})