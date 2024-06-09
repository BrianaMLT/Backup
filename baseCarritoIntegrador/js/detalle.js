//Pasos para QS
let qs = location.search; //Obtener la qs de la url
let qsto = new URLSearchParams(qs); //Transformar la qs en un Objeto Literal
let id = qsto.get('id'); //Obtener el dato de id del objeto literal

//Armar un nuevo fetch
let url = `https://rickandmortyapi.com/api/character/${id}`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(data);

        //Paso 1: capturar DOM.
        let title = document.querySelector('h1');
        let image = document.querySelector('img');
        let status = document.querySelector('.status');
        let especie = document.querySelector('.especie');

        //Paso 2 y 3: actualizar datos y actualizar DOM;
        title.innerText = data.name;
        image.src=data.image;
        status.innerText += data.status;
        especie.innerText += data.species;      

    })
    .catch(function(error){
        console.log(error);
    })

    let carrito = [];

    // Cargar el array del localStorage al iniciar la página
    window.onload = function() {
        // Verificar si hay algo en localStorage
        const carritoGuardado = localStorage.getItem('carrito');
        if (carritoGuardado) {
            // Parsear el JSON string a un array
            carrito = JSON.parse(carritoGuardado);
        }
    }
    
    // Función para agregar un id al carrito y guardar en localStorage
    function agregarAlCarrito(idPersonaje) {
        // Verificar si el id ya está en el carrito para evitar duplicados
        if (!carrito.includes(idPersonaje)) {
            // Agregar el id al array
            carrito.push(idPersonaje);
            
            // Guardar el array actualizado en localStorage
            localStorage.setItem('carrito', JSON.stringify(carrito));
        }
    }