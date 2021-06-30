let canvas = document.getElementById("snake")
let content = canvas.getContext("2d")
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

funcion criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(==0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

criarBG();