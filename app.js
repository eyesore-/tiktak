const prompt = require('prompt')

//   1  |  2  |  3
// -----------------
//   4  |  5  |  6
// -----------------
//   7  |  8  |  9

let board = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function printBoard () {
  console.log(
    `\n
      ${board[0]}  |  ${board[1]}  |  ${board[2]}  \n
    -----------------\n
      ${board[3]}  |  ${board[4]}  |  ${board[5]}  \n
    -----------------\n
      ${board[6]}  |  ${board[7]}  |  ${board[8]}  \n`
  )
}

printBoard()
