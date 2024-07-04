//con PROMPT
//dos instancias, una el mensaje y otra lo que quiero que me respondan. 
//segunda parte, es modificable x el user. 

let res= window.prompt("Ya estas mejor Briana?", "Si bo, es una instancia mas")

alert ("Esto pusiste Bri " + res)

//CONFIM, cuadro de configuracion con aceptar o cancel
//dos posibles escenarios y dependiendo de lo dicho, se hacea algo

let confirm= window.confirm("Vamos al cheboli?")

if (confirm == true){
    alert("Genia pana")
}else{
    alert("Sos bolu eh")
}