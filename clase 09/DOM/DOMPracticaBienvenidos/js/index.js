alert("Bienvenidos a mi sitio.")

let sure= confirm("¿Está seguro de querer avanzar?")

let saludoElement= document.querySelector("h2.saludo")
let bienvenida= document.querySelector("h1")
let general= document.querySelector(".general")
let access= document.getElementById("accesoDenegado")
let imgDiv= document.querySelector(".back-img")

if (sure){
    let edad= prompt ("¿Cuántos años tenés?")
    edad = parseInt(edad)

    if (edad >= 18){
        let datos= prompt("Por favor, ingrese su nombre:")

        if (datos){
            bienvenida.textContent = `Bienvenido ${datos}`
        }else{
            bienvenida.textContent= "Bienvenido"
        }

        saludoElement.textContent= "Qué alegría que quieras continuar tu visita";
        
        let likeprograming=confirm("¿Te gusta la programación?")

        if(likeprograming){
            imgDiv.innerHTML = '<img src="img/programmer.jpeg" alt="Programmer">';
        }else{
            imgDiv.innerHTML = '<img src="img/gatito.jpeg" alt="Gatito">';
        }
    }else{
    general.style.display = "none";
    access.style.display= "block"
    }
}else{
    saludoElement.textContent= "Lamentamos que no quieras continuar tu visita"
}

