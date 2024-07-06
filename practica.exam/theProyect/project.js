//DEPOSIT SOME MONEY.
//const prompt= require ("prompt-sync")();
const ROWS= 3;
const COLS= 3;
const SYMBOLS_COUNT= {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}
const SYMBOL_VALUES={
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

function deposit(){//same as: const deposit= () => {
    //        }
    while (true) {
    let depositAmount= prompt("Enter a deposit Amount: ")
    let numberDepositAmount= parseFloat(depositAmount) //convertir el string into a number/validnumber. 

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
        console.log("Invalid deposit amount, try again");
    }else{
        return numberDepositAmount;
    }
    }  
};          

//DETERMINATE DE NNUMBER OF LINES TO BET ON
function determineNumberOfLinesToBetOn(){
    while (true) {
        
    let numberOfLinesToBetOn= prompt("Enter the number of lines to bet on (1-3): ")
    let numberNumberOfLinesToBetOn= parseFloat(numberOfLinesToBetOn) //convertir el string into a number/validnumber. 

    if (isNaN(numberNumberOfLinesToBetOn) || numberNumberOfLinesToBetOn <= 0 ||numberNumberOfLinesToBetOn > 3 ){
        console.log("Invalid number of lines, try again");
    }else{
        return numberNumberOfLinesToBetOn;
    }
}
}

//COLECT A BET AMOUNT
function getBet(balance, lines) {
    while (true) {
        let bet= prompt("Enter the bet per line: ")
        let numberBet= parseFloat(bet) 
    
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines ){
            console.log("Invalid bet, try again");
        }else{
            return numberBet;
        }
    }
}

//SPIN THE SLOT MACHINE
function spinTheSlotMachine(lines, bet) {
    let slots= [];
    for (let i = 0; i < lines; i++) {
        slots.push(Math.floor(Math.random() * 10));
    }
    console.log(slots);
    return slots;
}

let balance= deposit();
const numberOfLines= determineNumberOfLinesToBetOn();
const bet= getBet(balance, numberOfLines);