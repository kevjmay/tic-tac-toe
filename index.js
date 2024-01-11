console.log('WELCOME! Tic-Tac-Toe:')

//Setting up a 3x3 gameboard
function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (i=0; i<rows; i++) {
        board[i] = [];
        for (j=0; j<columns; j++) {
            board[i].push("");
        }
    }
    console.log(board)

    //This is used to return the board object to the DOM.
    const getBoard = () => board;

    return {getBoard};
}
// Gameboard();
// console.log(typeof(Gameboard))

function gameController(
    playerOne = "Player One", 
    playerTwo = "Player Two"
) {
    const board = Gameboard()
    
    const players = [
        {
            name: playerOne,
            mark: 'X'
        },
        {
            name: playerTwo,
            mark: 'O'
        }
    ];
    console.log(players)
    let activePlayer = players[0]
    console.log(activePlayer)

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;
    console.log(getActivePlayer())

    const playRound = () => {
        console.log(`The current player is: ${getActivePlayer}`)
        //And then switch new active player after this is called
        switchPlayerTurn()
    }

    return {getActivePlayer, playRound};
}

const game = gameController();
