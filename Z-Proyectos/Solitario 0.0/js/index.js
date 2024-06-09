alert("Hola Briana! Welcome back!")

//Const and typos
const mazo=[]
let barajada= []
let pilas= []

const tipos=["corazon", "diamante", "trebol", "espada"]
const colours= {
    corazon: "red",
    diamante: "red",
    trebol: "black",
    espada:"black",
}

const crearMazo=() => {
    for (let i = 1; i <= 13; i++) {
        for (let j = 0; j < tipos.length; j++) {
            const carta ={
                numero:i,
                colour:colours[tipos[j]],
                type: tipos[j],
                img: `img/${i}_de_${tipos[j]}.png`
            }
            mazo.push(carta)
        }
    }
}
console.log(crearMazo);
//Elements for HTML

const botonStartGame= document.querySelector (".start")


//Funciones p/ crear el game

const barajearMazo= ()=> {
    barajada= mazo.map(cart => ({cart, sort: Math.random()}))
    . sort((a, b) => a.sort - b.sort)
    . map(({cart}) => cart)
}

const servir= () =>{
    for (let i = 0; i < 7; i++) {
        pilas.push([])
        for (let j = 0; j < i + 1; j++) {
            const primeracartBarajeada = barajada [0]
            barajada.shift()
            pilas[i].push(primeracartBarajeada)
        }
    }
}

const ponerCartasEnPilas= () =>{
    for (let i = 0; i < pilas.length; i++) {
        const pila= document.querySelector(`#pila-${i}`)
        for (let j = 0; j < pilas[i].length; j++) {
            const cart = pilas[i][j];
            const cartHTML = document.createElement("div")
            const image = document.createElement ("img")
            image.src = cart.img
            cartHTML.appendChild(image)
            pila.appendChild(cartHTML)
        }
    }
}
console.log(ponerCartasEnPilas);


botonStartGame.onclick = () =>{
    crearMazo()
    barajearMazo()
    servir()
    ponerCartasEnPilas()
    //PonerCartasEnPilaUno()
}