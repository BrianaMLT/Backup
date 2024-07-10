//set up canvas
const canvas= document.querySelector("canvas");
const ctx= canvas.getContext("2d");//definir un contexto en el cual se pueda comenzar a dibujar

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

//function to generate random number
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}//Esta función recibe dos números como argumentos de entrada (valor mínimo y maximo) y devuelve un número aleatorio entre ellos.

//function to generate random color
function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

function ball(x,y,velX,velY, color, size){
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
}
