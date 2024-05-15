for (let i = 1; i < 6; i++) {
    console.log(i + 'Practicando con el bucle for');
}

for (let i = 1; i < 11; i++) {
    console.log(i +  'La variable i tiene el valor valor De i');
}

for (let i = 1; i < 10; i++) {
    console.log(2 * i);
}
//para que i varie de 2 en 2 se deberia de:
for (let i = 2; i <= 20; i+= 2) {
    console.log(i);    
}

for (let i = 0; i < 50; i++) {
    console.log(i * 5); 
}
//para que i varie de 5 en 5 se deberia de: 
for (let i = 5; i <= 250; i+=5) {
    console.log(i);
}

for (let i = 100; i >= 0; i--) {
    console.log(i);    
}

///////////////////////////////////////////////////////////////

let base =100
let resultados=[]
for (let i = 1; i < 10; i++) {
    resultados.push(base * i)
}

console.log(resultados);

const ganancias = [5,7,-9,-12,0,9,43,-555,90,-1]
let suma =0
for (let i = 0; i < ganancias.length; i++) {
    suma += ganancias[i]
}

console.log(suma);

let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
    ]
    
for (let i = 0; i < healingIsDifficult.length; i++) {
    console.log(healingIsDifficult [i]);
}

//con modificacion
for (let i = 0; i < healingIsDifficult.length; i++) {
    console.log(`${i + 1}. ${healingIsDifficult[i]}`);    
}