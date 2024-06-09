alert("Welcome to Briana's Wordle V1.0")

let hi= prompt("Estas list@ para comenzar?")
let nombre= prompt("Dejanos tu nombre de usuario")
console.log(hi)
///////////////////////////////////////////////////

let word= "texto";
let wordArray= word.toUpperCase().split("");
console.log(wordArray);

let actualRow= document.querySelector(".row")

wordArray.forEach((item, index) =>{
    if (index === 0) {
        actualRow.innerHTML += `<input type="text" maxlength="1" class="square">`
    }else{
        actualRow.innerHTML += `<input type="text" maxlength="1" class="square">`
    }
})

let focusElement= document.querySelector(".focus")
focusElement.focus();

let squares= document.querySelectorAll(".square")
squares= [...squares];


let userInput= []

squares.forEach(Element =>{
    Element.addEventListener("input", event =>{
        userInput.push(event.target.value.toUpperCase())
        console.log(userInput);
        if (event.target.nextElementSibling) {
            event.target.nextElementSibling.focus();
        }else{
            let sameELements= compareArrays(wordArray, userInput)
            console.log(sameELements);
        }
    });
})

//FUNCIONES
function compareArrays(array1, array2){
    let iqualsIndex= []
    array1.forEach((Element, index)=>{
        if (element == array2[index]){
            console.log(`En la posicion ${index} SI son iguales`);
            iqualsIndex.push(index);
        }else{
            console.log(`En la posicion ${index} NO son iguales`)
        }
    });
    return iqualsIndex;
}