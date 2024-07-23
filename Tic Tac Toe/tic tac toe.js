let gameName = document.getElementById("gameName");
let playerTurn = document.getElementById("playerTurn");
let gameBox = document.getElementById("gameBox");
let gameWinner = document.getElementById("winner");
let playerCon = document.getElementById("playerCon");
let playerName = document.getElementById("playerName");
let btn = document.getElementById("restartBtn");
let box1 = document.getElementById("boxOne");
let box2 = document.getElementById("boxTwo");
let box3 = document.getElementById("boxThree");
let box4 = document.getElementById("boxFour");
let box5 = document.getElementById("boxFive");
let box6 = document.getElementById("boxSix");
let box7 = document.getElementById("boxSeven");
let box8 = document.getElementById("boxEight");
let box9 = document.getElementById("boxNine");

function declareWinner(winner, color) {
    gameBox.classList.add("hide");
    gameWinner.classList.remove("hide");
    gameName.classList.add("hide");
    if(winner==="X"){
        playerCon.classList.remove("hide");
        playerName.innerHTML = winner;
        playerCon.classList.add("players");
        playerCon.style.backgroundColor = color;
        playerName.classList.add("player");
    }
    if(winner==="O"){
        playerCon.classList.remove("hide");
        playerName.innerHTML = winner;
        playerCon.classList.add("players");
        playerCon.style.backgroundColor = color;
        playerName.classList.add("player");
    }
    gameWinner.innerHTML = `${winner} has won the game...!`;
    gameWinner.style.color = color;
    gameWinner.classList.add("winner");
    playerTurn.classList.add("hide");
    btn.classList.remove("hide");
}

function gameDraw() {
    gameBox.classList.add("hide");
    gameWinner.classList.remove("hide");
    gameWinner.innerHTML = "Game has completed with Draw...!";
    gameWinner.style.color = "#36b9c0";
    gameName.classList.add("hide");
    playerTurn.classList.add("hide");
    btn.classList.remove("hide");
}

function checkWinnerForX(box, gameOver) {
    if ((box[0].innerHTML === "X" && box[1].innerHTML === "X" && box[2].innerHTML === "X") || (box[3].innerHTML === "X" && box[4].innerHTML === "X" && box[5].innerHTML === "X") || (box[6].innerHTML === "X" && box[7].innerHTML === "X" && box[8].innerHTML === "X")) {
        gameOver = true;
        declareWinner("X", "rgb(65, 184, 195)");
        return gameOver;
    } else if ((box[0].innerHTML === "X" && box[3].innerHTML === "X" && box[6].innerHTML === "X") || (box[1].innerHTML === "X" && box[4].innerHTML === "X" && box[7].innerHTML === "X") || (box[2].innerHTML === "X" && box[5].innerHTML === "X" && box[8].innerHTML === "X")) {
        gameOver = true;
        declareWinner("X", "rgb(65, 184, 195)");
        return gameOver;
    } else if ((box[0].innerHTML === "X" && box[4].innerHTML === "X" && box[8].innerHTML === "X") || (box[2].innerHTML === "X" && box[4].innerHTML === "X" && box[6].innerHTML === "X")) {
        gameOver = true;
        declareWinner("X", "rgb(65, 184, 195)");
        return gameOver;
    }

    if ((box[0].innerHTML !== "" && box[1].innerHTML !== "" && box[2].innerHTML !== "" && box[3].innerHTML !== "" && box[4].innerHTML !== "" && box[5].innerHTML !== "" && box[6].innerHTML !== "" && box[7].innerHTML !== "" && box[8].innerHTML !== "") && (gameOver === false)) {
        gameOver = true;
        gameDraw();
        return gameOver;
    }
}

function checkWinnerForO(box, gameOver){
    if ((box[0].innerHTML === "O" && box[1].innerHTML === "O" && box[2].innerHTML === "O") || (box[3].innerHTML === "O" && box[4].innerHTML === "O" && box[5].innerHTML === "O") || (box[6].innerHTML === "O" && box[7].innerHTML === "O" && box[8].innerHTML === "O")) {
        gameOver = true;
        declareWinner("O", "orange");
        return gameOver;
    } else if ((box[0].innerHTML === "O" && box[3].innerHTML === "O" && box[6].innerHTML === "O") || (box[1].innerHTML === "O" && box[4].innerHTML === "O" && box[7].innerHTML === "O") || (box[2].innerHTML === "O" && box[5].innerHTML === "O" && box[8].innerHTML === "O")) {
        gameOver = true;
        declareWinner("O", "orange");
        return gameOver;
    } else if ((box[0].innerHTML === "O" && box[4].innerHTML === "O" && box[8].innerHTML === "O") || (box[2].innerHTML === "O" && box[4].innerHTML === "O" && box[6].innerHTML === "O")) {
         gameOver = true;
        declareWinner("O", "orange");
        return gameOver;
    }

    if ((box[0].innerHTML !== "" && box[1].innerHTML !== "" && box[2].innerHTML !== "" && box[3].innerHTML !== "" && box[4].innerHTML !== "" && box[5].innerHTML !== "" && box[6].innerHTML !== "" && box[7].innerHTML !== "" && box[8].innerHTML !== "") && (gameOver === false)) {
        gameOver = true;
        gameDraw();
        return gameOver;
    }
}

let boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

function startGame(gameOver){
    playerTurn.innerHTML = "Start with X's Turn";
    playerTurn.style.color = "rgb(65, 184, 195)";
    let turn = true;
    for (let i = 0; i < 9; i++) {
        let count = 0;
        boxes[i].addEventListener("click", () => {
            count++;
            if (count === 1) {
                if (turn === true) {
                    boxes[i].innerHTML = "X";
                    boxes[i].style.color = "rgb(65, 184, 195)";
                    turn = false;
                    playerTurn.innerHTML = "O's Turn";
                    playerTurn.style.color = "Orange";
                    checkWinnerForX(boxes, gameOver);
                } 
                else {
                    boxes[i].innerHTML = "O";
                    boxes[i].style.color = "orange";
                    turn = true;
                    playerTurn.innerHTML = "X's Turn";
                    playerTurn.style.color = "rgb(64, 184, 195)";
                    checkWinnerForO(boxes, gameOver);
                }
            }
        });
    }
}

function restart() {
    gameName.classList.remove("hide");
    gameBox.classList.remove("hide");
    playerCon.classList.add("hide");
    playerTurn.classList.remove("hide");
    btn.classList.add("hide");
    for (let box of boxes) {
        box.innerHTML = "";
    }
    gameWinner.classList.add("hide");
    startGame(isGameOver);
}
btn.addEventListener("click", restart);

let isGameOver = false;
if(isGameOver===false){
    startGame(isGameOver);
}