// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    const titulo= document.querySelector("#titulo")
    let saludo = document.querySelector("#saludo")
    const mensajeBienvenida= this.document.querySelector("#mensajeBienvenida")
    const sectionBienvenida= this.document.querySelector(".bienvenida")
    const sectionPersonajes= this.document.querySelector(".personajes")
    
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
    
    const bart= document.querySelector(".fas fa-mouse-pointer");
    const homero= document.querySelector(".fas fa-mouse-pointer");
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
        const personaje= event.target;
        personaje.classList.toggle('personaje-seleccionado')
        //if(personaje.classList.contains(".personaje-seleccionado")){
            //personaje.classList.remove(`personaje-seleccionado`);
        //}else{
            //personaje.classList.add(`personaje-seccionado`)
        //}
    }

    bart.addEventListener('click', toggleSeccion)
    homero.addEventListener('click', toggleSeccion)
    lisa.addEventListener('dbclick', toggleSeccion)
    maggie.addEventListener('mouseout', toggleSeccion)
    marge.addEventListener('mouseover', toggleSeccion)
    milhouse.addEventListener('click', toggleSeccion)
    burns.addEventListener('mouseover', toggleSeccion)
    bobPatinio.addEventListener('dbclick', toggleSeccion)
    flanders.addEventListener('mouseover', toggleSeccion)
    duffman.addEventListener('dbclick', toggleSeccion)
    gorgory.addEventListener('mouseover', toggleSeccion)
    nelson.addEventListener('click', toggleSeccion)
    
    //NO SE COMO CONTINUAR, CREERIA QUE DE AQUI SE APLICARIAN LOS PUNTOS 7 Y 8.
    //Aclaro: si entiendo el codigo, pero no me estaria funcionaando.

    /* Asignarle evento a la variable boton */
    //let boton = //; 
});


