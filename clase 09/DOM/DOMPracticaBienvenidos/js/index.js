alert("Bienvenidos a mi sitio.")

let sure= confirm("¿Está seguro de querer avanzar?")

let saludoElement= document.querySelector("h2.saludo")
let bienvenida= document.querySelector("h1")
let general= document.querySelector(".general")
let access= document.getElementById("accesoDenegado")
let imgDiv= document.querySelector(".back-img")
let miFoto= document.querySelector(".avatar")
let divPeliculas= document.querySelector("#pelicula")

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

        let img= prompt("Ingresa ruta de foto de perfil: ")
        if(img){
            miFoto.src= img;
        }else{
            alert("No new pick")
        }
        console.log(img);
    }else{
    general.style.display = "none";
    access.style.display= "block"
    }
}else{
    saludoElement.textContent= "Lamentamos que no quieras continuar tu visita"
}

        let nombre= prompt("Ingrese el nombre de su pelicula favorita:")
        let director= prompt("Ingrese el nombre del director de la pelicula:")
        let duracion= prompt("Cuanto tiempo dura esta?")
        let actor= prompt("Quienes participan?")

        let pelicula={
            nombre,
            director,
            duracion,
            actor
        }

        document.querySelector('#nombre').textContent = `Nombre: ${pelicula.nombre}`
        document.querySelector('#director').textContent = `Director: ${pelicula.director}`
        document.querySelector('#duracion').textContent = `Duracion: ${pelicula.duracion}`
        document.querySelector('#actor').textContent = `Actor: ${pelicula.actor}`

        document.querySelector('.contenido-bloqueado').style.display = "block";