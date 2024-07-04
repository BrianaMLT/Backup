let estilo= document.querySelector(".respuesta")
let resp= confirm("¿Querés aplicar dark mode en el sitio?")
let body= document.querySelector(".body")

if (resp == true) {
    body.style.background= `#444`;
    estilo.style.color= `#fff`;
    estilo.innerText= `Dark Mode activado`
}else{
    estilo.innerText= `Ok. Lo activo en otro momento.`;
}