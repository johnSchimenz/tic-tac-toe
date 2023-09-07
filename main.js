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

    // 2. Create open array
    let openArray = [];

//////////////////////////////////////////////////////////////////

    // playerOne's 1st Turn
    // 3. Figure out which cells are open on gameBoard
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] !== playerOne.marker || gameBoard[i] !== playerTwo.marker) {
            openArray.push(i);
        }
    }
    console.log(openArray);

    // 4. Randomly pick an open cell on gameBoard
    let randomOpenSpacePosition = Math.floor(Math.random() * openArray.length); // get position of open space
    console.log(randomOpenSpacePosition);
    let randomOpenSpaceValue = openArray[randomOpenSpacePosition]; // get value at chosen open space position
    console.log(randomOpenSpaceValue);

    // 5. Replace gameBoard value with playerOne's marker
    gameBoard[randomOpenSpaceValue] = playerOne.marker;
    console.log(gameBoard);

    // 6. Reset openArray
    openArray = [];

    // playerTwo's 1st Turn
    // 3. Figure out which cells are open on gameBoard
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] !== playerOne.marker || gameBoard[i] !== playerTwo.marker) {
            openArray.push(i);
        }
    }
    console.log(openArray);

    // 4. Randomly pick an open cell on gameBoard
    randomOpenSpacePosition = Math.floor(Math.random() * openArray.length); // get position of open space
    console.log(randomOpenSpacePosition);
    randomOpenSpaceValue = openArray[randomOpenSpacePosition]; // get value at chosen open space position
    console.log(randomOpenSpaceValue);

    // 5. Replace gameBoard value with playerTwo's marker
    gameBoard[randomOpenSpaceValue] = playerTwo.marker;
    console.log(gameBoard);

   // 6. Reset openArray
   openArray = [];

//////////////////////////////////////////////////////////////////////////






    /* 2. Create array to store empty cells
    const openSpaces = [];
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === "") {
            openSpaces.push(i);
        }
    }

    // 3. playerOne randomly selects an empty cell
    gameBoard[randomOpenSpace] = playerOne.marker; // put marker on digit location
    console.log(randomOpenSpace);
    openSpaces.splice(randomOpenSpace, 1, "Closed"); // 
    console.log(openSpaces);
    console.log(gameBoard);
    */


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