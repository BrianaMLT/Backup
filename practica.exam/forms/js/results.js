//obtener datos de la URL.
const urlParams= new URLSearchParams(window.location.search); 
const nombre = urlParams.get('nombre');
const email = urlParams.get('email');

//mostrar datos en la página

document.querySelector('#r-nombre').textContent = nombre;
document.querySelector('#r-email').textContent = email;