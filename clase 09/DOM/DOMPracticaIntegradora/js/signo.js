let resp= document.querySelector(".respuesta")
let num1= prompt("Ingrese un numero");

if(num1 < 0 ){
    resp.innerText= `El número ${num1} es negativo`;
}else if( num1 == 0){
    resp.innerText= `El número ${num1} es cero`;
}else{
    resp.innerText= `El número ${num1} es positivo`;
}

console.log(num1);