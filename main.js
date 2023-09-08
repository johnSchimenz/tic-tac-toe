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

// playRound function
const playRound = (player, openArray) => {
    // Randomly pick an open cell on gameBoard
    let randomOpenSpacePosition = Math.floor(Math.random() * openArray.length); // get position of open space
    console.log(randomOpenSpacePosition);
    let randomOpenSpaceValue = openArray[randomOpenSpacePosition]; // get value at chosen open space position
    console.log(randomOpenSpaceValue);

    // Replace gameBoard value with playerOne's marker
    gameBoard[randomOpenSpaceValue] = player.marker;
    console.log(gameBoard);

    // Remove selected cell from openArray
    openArray.splice(randomOpenSpacePosition, 1);
    console.log(openArray);

    // Check if winner
    checkWinner(player, player.marker);
}

// Check whether you have 3-in-a-row (logic good, but details aren't good) /////////////////////////////
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
                player.winner = true;
                console.log(player);
                return console.log(player.name + " wins. Play again?");
           }
});

// Game-flow object
const gameFlow = (() => {
    // 1. Create players and round counter
    const playerOne = Player("Alice", "O");
    const playerTwo = Player("Bob", "X");
    const arrayPlayers = [playerOne, playerTwo];
    const possibleRounds = 9;
    let roundCounter = 1;

    // 2. Create open array
    let openArray = [];
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] !== playerOne.marker || gameBoard[i] !== playerTwo.marker) {
            openArray.push(i);
        }
    }

    // 3. Play up to 9 rounds until winner or tie game
    do {
        console.log("Round " + roundCounter);
        if (roundCounter % 2 === 1) {
                playRound(playerOne, openArray);
        }
        if (roundCounter % 2 === 0) {
                playRound(playerTwo, openArray);
        }
        roundCounter++;
    } while (roundCounter <= possibleRounds && playerOne.winner === false && playerTwo.winner === false);

    if (roundCounter > possibleRounds && playerOne.winner === false && playerTwo.winner === false) {
        console.log("Tie game");
    }
})();

