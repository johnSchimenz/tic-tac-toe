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
    // 1. Player X selects an cell
    
    // 2. Check whether you have 3-in-a-row
        // 2a. If yes:
            // print "Player X wins"
            // prompt whether to play again
        // 2b. If no:
            // Player Y starts turn (repeat from Step 1)
})();