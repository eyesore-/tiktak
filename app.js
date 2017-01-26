const prompt = require('prompt')

// TIC TAC TOE BOARD
//   1  |  2  |  3
// -----------------
//   4  |  5  |  6
// -----------------
//   7  |  8  |  9

let board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let winCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [3, 4, 6]
]

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

function markMove (pos, player) {
  board[pos - 1] = player
}

function validateMove (pos) {
  if (Number.isInteger(pos) && Number.isInteger(board[pos] && (pos >= 0 && pos < 9))) return true
  return false
}

function checkWin

printBoard()
