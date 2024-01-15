console.log('WELCOME! Tic-Tac-Toe:')

//Setting up a 3x3 gameboard
const rows = 3;
const columns = 3;

function Gameboard() {
    const board = [];

    for (let i=0; i<rows; i++) {
        board[i] = [];
        for (let j=0; j<columns; j++) {
            board[i].push("");
        }
    }
    console.log(board)

    //This is used to return the board object to the DOM.
    const getBoard = () => board;

    // Reset the board to empty strings
    const resetBoard = () => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                board[i][j] = "";
            }
        }
    };

    return {getBoard, resetBoard};
}

function gameController(
    playerOne = "Kevin", 
    playerTwo = "Computer"
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
    let playerOneDisplay = document.querySelector('.playerOneDisplay')
    let playerTwoDisplay = document.querySelector('.playerTwoDisplay')
    playerOneDisplay.textContent = `Player X: ${players[0].name}`
    playerTwoDisplay.textContent = `Player O: ${players[1].name}`
    
    //Setting the active player i.e whose turn it is.
    let activePlayer = players[0]
    console.log(`This is the active player before switch runs: ${activePlayer.name}`)

    let activePlayerDisplay = document.querySelector('.activePlayerDisplay')
    activePlayerDisplay.textContent = `The active player is: ${activePlayer.name}`

    //Switching between the active player i.e next persons turn.
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    const playRound = () => {
        //And then switch new active player after this is called
        switchPlayerTurn()
        activePlayerDisplay.textContent = `The active player is: ${activePlayer.name}`
    };

    const checkBoard = () => {
        let currentBoard = board.getBoard()

        //Check rows
        for (let i = 0; i < rows; i++) {
            if (currentBoard[i].every(mark => mark === activePlayer.mark)) {
                console.log(`${activePlayer.name} wins horizontally`);
                board.resetBoard();
                return;
            }
        }

        //Check columns
        for (let j = 0; j < columns; j++) {
            if (currentBoard.every(row => row[j] === activePlayer.mark)) {
                console.log(`${activePlayer.name} wins vertically!`);
                board.resetBoard();
                return;
            }
        }

        // Check diagonals
        if (
            (currentBoard[0][0] === activePlayer.mark &&
            currentBoard[1][1] === activePlayer.mark &&
            currentBoard[2][2] === activePlayer.mark) ||
            (currentBoard[0][2] === activePlayer.mark &&
            currentBoard[1][1] === activePlayer.mark &&
            currentBoard[2][0] === activePlayer.mark)
        ) {
            console.log(`${activePlayer.name} wins diagonally!`);
            board.resetBoard();
            return;
        }

        // Check for a tie
        if (currentBoard.every(row => row.every(mark => mark !== ""))) {
            console.log("The game is a tie!");
            board.resetBoard();
            return;
        }
    };

    const makeMark = (row, col) => {
        let currentBoard = board.getBoard();
        if (currentBoard[row][col] === "") {
            currentBoard[row][col] = activePlayer.mark;
            checkBoard();
            switchPlayerTurn();
            console.log(currentBoard)
            console.log(`The active player is: ${activePlayer.name}`)
        } else {
            console.log("Cell already taken. Try again.");
        }
    }

    return {getActivePlayer, playRound, makeMark};
}

const game = gameController();


