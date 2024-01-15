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

        let clearCells = document.querySelectorAll('.cell')
        clearCells.forEach((cell) => {
            cell.textContent = ''
        }); 

        gameController()
       
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
    playerOneDisplay.textContent = `Player: ${players[0].name} | Mark: ${players[0].mark}`
    playerTwoDisplay.textContent = `Player: ${players[1].name} | Mark: ${players[1].mark}`
    
    //Setting the active player i.e whose turn it is.
    let activePlayer = players[0]
    console.log(`This is the active player before switch runs: ${activePlayer.name}`)

    let activePlayerDisplay = document.querySelector('.activePlayerDisplay')
    activePlayerDisplay.textContent = `The active player is: ${activePlayer.name}`

    let winMessage = document.querySelector('.winMessage')

    //Switching between the active player i.e next persons turn.
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    const playRound = () => {
        //And then switch new active player after this is called
        switchPlayerTurn()
        activePlayerDisplay.textContent = `The active player is: ${players[0].name}`
        winMessage.textContent = ''
    };

    const checkBoard = () => {
        let currentBoard = board.getBoard()

        //Check rows
        for (let i = 0; i < rows; i++) {
            if (currentBoard[i].every(mark => mark === activePlayer.mark)) {
                console.log(`${activePlayer.name} wins horizontally`);
                board.resetBoard();
                winMessage.textContent = `${activePlayer.name} has won!`
                switchPlayerTurn()
                return;
            }
        }

        //Check columns
        for (let j = 0; j < columns; j++) {
            if (currentBoard.every(row => row[j] === activePlayer.mark)) {
                console.log(`${activePlayer.name} wins vertically!`);
                board.resetBoard();
                winMessage.textContent = `${activePlayer.name} has won!`
                switchPlayerTurn()
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
            winMessage.textContent = `${activePlayer.name} has won!`
            switchPlayerTurn()
            return;
        }

        // Check for a tie
        if (currentBoard.every(row => row.every(mark => mark !== ""))) {
            console.log("The game is a tie!");
            board.resetBoard();
            winMessage.textContent = `The game is a tie!`
            switchPlayerTurn()
            return;
        }
    };

    const makeMark = (row, col) => {
        let currentBoard = board.getBoard();
        if (currentBoard[row][col] === "") {
            currentBoard[row][col] = activePlayer.mark;
            checkBoard();
            switchPlayerTurn();
            activePlayerDisplay.textContent = `The active player is: ${activePlayer.name}`
            console.log(currentBoard)
            console.log(`The active player is: ${activePlayer.name}`)
        } else {
            console.log("Cell already taken. Try again.");
        }
    }

    //Links for UI:
    //rowOneCellOne
    function tickedOneCellOne() {
        rowOneCellOne.textContent = activePlayer.mark
        makeMark(0,0)
    } 
    let rowOneCellOne = document.querySelector('#rowOneCellOne')
    rowOneCellOne.addEventListener('click', tickedOneCellOne)

    //rowOneCellTwo
    function tickedOneCellTwo() {
        rowOneCellTwo.textContent = activePlayer.mark
        makeMark(0,1)
    }
    let rowOneCellTwo = document.querySelector('#rowOneCellTwo')
    rowOneCellTwo.addEventListener('click', tickedOneCellTwo)

    //rowOneCellThree
    function tickedOneCellThree() {
        rowOneCellThree.textContent = activePlayer.mark
        makeMark(0,2)
    }
    let rowOneCellThree = document.querySelector('#rowOneCellThree')
    rowOneCellThree.addEventListener('click', tickedOneCellThree)

    //rowTwoCellOne
    function tickedTwoCellOne() {
        rowTwoCellOne.textContent = activePlayer.mark
        makeMark(1,0)
    }
    let rowTwoCellOne = document.querySelector('#rowTwoCellOne')
    rowTwoCellOne.addEventListener('click', tickedTwoCellOne)

    //rowTwoCellTwo
    function tickedTwoCellTwo() {
        rowTwoCellTwo.textContent = activePlayer.mark
        makeMark(1,1)
    }
    let rowTwoCellTwo = document.querySelector('#rowTwoCellTwo')
    rowTwoCellTwo.addEventListener('click', tickedTwoCellTwo)

    //rowTwoCellThree
    function tickedTwoCellThree() {
        rowTwoCellThree.textContent = activePlayer.mark
        makeMark(1,2)
    }
    let rowTwoCellThree = document.querySelector('#rowTwoCellThree')
    rowTwoCellThree.addEventListener('click', tickedTwoCellThree)

    //rowThreeCellOne
    function tickedThreeCellOne() {
        rowThreeCellOne.textContent = activePlayer.mark
        makeMark(2,0)
    }
    let rowThreeCellOne = document.querySelector('#rowThreeCellOne')
    rowThreeCellOne.addEventListener('click', tickedThreeCellOne)

    //rowThreeCellTwo
    function tickedThreeCellTwo() {
        rowThreeCellTwo.textContent = activePlayer.mark
        makeMark(2,1)
    }
    let rowThreeCellTwo = document.querySelector('#rowThreeCellTwo')
    rowThreeCellTwo.addEventListener('click', tickedThreeCellTwo)

    //rowThreeCellThree
    function tickedThreeCellThree() {
        rowThreeCellThree.textContent = activePlayer.mark
        makeMark(2,2)
    }
    let rowThreeCellThree = document.querySelector('#rowThreeCellThree')
    rowThreeCellThree.addEventListener('click', tickedThreeCellThree)

    return {getActivePlayer, playRound, makeMark};
}

const game = gameController();


