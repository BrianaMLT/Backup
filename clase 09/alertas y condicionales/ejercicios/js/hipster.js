let nacionalidad=prompt ("Ingrese su nacionalidad")
let profesion= prompt("Cual es su profesion?")
let kms= prompt("Ciantos kms camina por dias?")

function filosofoHipster( nacionalidad, profesion, kms) {
    if ((nacionalidad="argentino") && (profesion="Musico") && (kms > 2)) {//preguntar
        //una super concatenacion de condiciones x cumplirse.
        console.log(`Soy un filósofo hipster`);
    }else{
        console.log(`Aun no soy filósofo hipster`);
    }
}

filosofoHipster(nacionalidad,profesion, kms);