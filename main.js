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
});

// Game-flow object
const gameFlow = (() => {
    // 1. Create players
    const playerOne = Player("Alice", "O");
    const playerTwo = Player("Bob", "X");
    const arrayPlayers = [playerOne, playerTwo];

    // 2. Create open array
    let openArray = [];
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] !== playerOne.marker || gameBoard[i] !== playerTwo.marker) {
            openArray.push(i);
        }
    }

//////////////////////////////////////////////////////////////////

    // playerOne's 1st Turn

    // 4. Randomly pick an open cell on gameBoard
    let randomOpenSpacePosition = Math.floor(Math.random() * openArray.length); // get position of open space
    console.log(randomOpenSpacePosition);
    let randomOpenSpaceValue = openArray[randomOpenSpacePosition]; // get value at chosen open space position
    console.log(randomOpenSpaceValue);

    // 5. Replace gameBoard value with playerOne's marker
    gameBoard[randomOpenSpaceValue] = playerOne.marker;
    console.log(gameBoard);

    // 6. Remove selected cell from openArray
    openArray.splice(randomOpenSpacePosition, 1);
    console.log(openArray);

    // 7. Check if winner
    checkWinner(playerOne, playerOne.marker);

    // playerTwo's 1st Turn

    // 4. Randomly pick an open cell on gameBoard
    randomOpenSpacePosition = Math.floor(Math.random() * openArray.length); // get position of open space
    console.log(randomOpenSpacePosition);
    randomOpenSpaceValue = openArray[randomOpenSpacePosition]; // get value at chosen open space position
    console.log(randomOpenSpaceValue);

    // 5. Replace gameBoard value with playerTwo's marker
    gameBoard[randomOpenSpaceValue] = playerTwo.marker;
    console.log(gameBoard);

    // 6. Remove selected cell from openArray
    openArray.splice(randomOpenSpacePosition, 1);
    console.log(openArray);

    // 7. Check if winner
    checkWinner(playerOne, playerOne.marker);

////////////////////////////////////////////////////////////////////////////

})();

