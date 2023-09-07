"use strict";

// Gameboard object
const gameBoard = (() => {
    const arrayGameBoard = ["", "", "", "", "", "", "", "", ""];
    return arrayGameBoard;
})();

// Players objects
const Player = (name, marker) => {
    const winner = false;
    return {name, marker, winner};
}

// Game-flow object
const gameFlow = (() => {
    // 1. Create players
    const playerOne = Player("Alice", "O");
    const playerTwo = Player("Bob", "X");
    const arrayPlayers = [playerOne, playerTwo];

    // 2. Create array to store empty cells
    const openSpaces = [];

    // 3. playerOne randomly selects an empty cell
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === "") {
            openSpaces.push(i);
        }
    }
    let randomOpenSpace = Math.floor(Math.random() * openSpaces.length);
    gameBoard[randomOpenSpace] = playerOne.marker;
    console.log(gameBoard);

    // 4. playerTwo randomly selects an empty cell
    randomOpenSpace = Math.floor(Math.random() * openSpaces.length);
    gameBoard[randomOpenSpace] = playerTwo.marker;
    console.log(gameBoard);

    // 5. Alternate turns back and forth

    randomOpenSpace = Math.floor(Math.random() * openSpaces.length);
    gameBoard[randomOpenSpace] = playerOne.marker;
    console.log(gameBoard);

    // 4. playerTwo randomly selects an empty cell
    randomOpenSpace = Math.floor(Math.random() * openSpaces.length);
    gameBoard[randomOpenSpace] = playerTwo.marker;
    console.log(gameBoard);

    // **6. check if current player wins



})();

// 2. Check whether you have 3-in-a-row (logic good, but details aren't good)
const checkWinner = ((player, marker) => {
     // 2a. If yes:
            // print "Player X wins"
            // prompt whether to play again
            if (gameBoard[0] === marker && gameBoard[1] === marker && gameBoard[2] === marker ||
            gameBoard[3] === marker && gameBoard[4] === marker && gameBoard[5] === marker ||
            gameBoard[6] === marker && gameBoard[7] === marker && gameBoard[8] === marker ||
            gameBoard[0] === marker && gameBoard[3] === marker && gameBoard[6] === marker ||
            gameBoard[1] === marker && gameBoard[4] === marker && gameBoard[7] === marker ||
            gameBoard[2] === marker && gameBoard[5] === marker && gameBoard[8] === marker ||
            gameBoard[0] === marker && gameBoard[4] === marker && gameBoard[8] === marker ||
            gameBoard[2] === marker && gameBoard[4] === marker && gameBoard[6] === marker) {
                return console.log(player + "wins. Play again?");
            // 2b. If no:
                // Player Y starts turn (repeat from Step 1)
            } else {
                return console.log("Next player's turn");
            }
})();