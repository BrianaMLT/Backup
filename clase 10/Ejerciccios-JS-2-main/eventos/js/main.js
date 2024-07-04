// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    const titulo= document.querySelector("#titulo")
    let saludo = document.querySelector("#saludo")
    const mensajeBienvenida= document.querySelector("#mensajeBienvenida")
    const sectionBienvenida= document.querySelector(".bienvenida")
    const sectionPersonajes= document.querySelector(".personajes")
    
    function mostrarPrompt() {
        const nombre= prompt("¿CÓMO TE LLAMÁS?")
        if (nombre === null || nombre.trim() === '') {
            saludo.textContent = 'BIENVENID@';
        }else{
            saludo.textContent = `BIENVENID@ ${nombre}`;
        }
        saludo.style.textTransform = 'uppercase'
        titulo.removeEventListener("mouseover", mostrarPrompt);
        titulo.style.display = `none`;
        mensajeBienvenida.style.display = `inline`
    }
    titulo.addEventListener(`mouseover`, mostrarPrompt)

    mensajeBienvenida.addEventListener(`click`, function () {
        sectionBienvenida.style.display = `none`
        sectionPersonajes.style.display = `flex`
        
    })

    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    
    const bart= document.getElementById("bart");
    const homero= document.getElementById("homero");
    const lisa= document.getElementById("lisa");
    const maggie= document.getElementById("maggie");
    const marge= document.getElementById("marge");
    const milhouse= document.getElementById("milhouse");
    const burns= document.getElementById("burns");
    const bobPatinio= document.getElementById("bobPatinio");
    const flanders= document.getElementById("flanders");
    const duffman= document.getElementById("duffman");
    const gorgory= document.getElementById("gorgory");
    const nelson= document.getElementById("nelson");

    function toggleSeccion(event) {
        event.target.classList.add ("personaje-seleccionado");
    }

    bart.addEventListener('click', toggleSeccion)
    homero.addEventListener('click', toggleSeccion)
    lisa.addEventListener('dblclick', toggleSeccion)
    maggie.addEventListener('mouseout', toggleSeccion)
    marge.addEventListener('mouseover', toggleSeccion)
    milhouse.addEventListener('click', toggleSeccion)
    burns.addEventListener('mouseover', toggleSeccion)
    bobPatinio.addEventListener('dblclick', toggleSeccion)
    flanders.addEventListener('mouseover', toggleSeccion)
    duffman.addEventListener('dblclick', toggleSeccion)
    gorgory.addEventListener('mouseover', toggleSeccion)
    nelson.addEventListener('click', toggleSeccion)
    
    //NO SE COMO CONTINUAR, CREERIA QUE DE AQUI SE APLICARIAN LOS PUNTOS 7 Y 8.
    //Aclaro: si entiendo el codigo, pero no me estaria funcionaando.

    /* Asignarle evento a la variable boton */
    let boton =document.querySelector(".boton")
    boton.addEventListener("click", function () {
        let sleccionados= document.querySelectorAll(".personaje-seleccionado")
        console.log(boton, sleccionados);
    })
});


