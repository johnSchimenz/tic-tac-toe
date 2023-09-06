"use strict";

// Gameboard object
const gameBoard = (() => {
    const arrayGameBoard = ["", "", "", "", "", "", "", "", ""];
    return arrayGameBoard;
})();

// Players objects
const Player = (name, marker) => {
    return {name, marker};
}

// Game-flow object
const gameFlow = (() => {
    // 1. Player X randomly selects an empty cell
    const openSpaces = [];
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === "") {
            openSpaces.push(i);
        }
    }
    let randomOpenSpace = Math.floor(Math.random() * openSpaces.length);
    gameBoard[randomOpenSpace] = "X";
    console.log(gameBoard);
})();

// 2. Check whether you have 3-in-a-row (logic good, but details aren't good)
const checkWinner = (() => {
     // 2a. If yes:
            // print "Player X wins"
            // prompt whether to play again
            if (gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X" ||
            gameBoard[3] === "X" && gameBoard[4] === "X" && gameBoard[5] === "X" ||
            gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard[8] === "X" ||
            gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard[6] === "X" ||
            gameBoard[1] === "X" && gameBoard[4] === "X" && gameBoard[7] === "X" ||
            gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard[8] === "X" ||
            gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard[8] === "X" ||
            gameBoard[2] === "X" && gameBoard[4] === "X" && gameBoard[6] === "X") {
                return console.log("Player X wins. Play again?");
            // 2b. If no:
                // Player Y starts turn (repeat from Step 1)
            } else {
                return console.log("Player Y's turn");
            }
})();