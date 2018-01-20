const prompt = require('prompt')

// TIC TAC TOE BOARD
//   1  |  2  |  3
// -----------------
//   4  |  5  |  6
// -----------------
//   7  |  8  |  9

const board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const winCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [3, 4, 6]
]

const printBoard = () => {
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

const validateMove = pos => !(isNaN(pos)) && (pos >= 0 && pos <= 9)

const checkWin = player => {
  let count
  for (let row of winCombos) {
    count = 0
    row.forEach(item => {
      if (board[item] === player) count++
      if (count === 3) return true
    })
  }
  return false
}

const play = player => {
  console.log(`Your move player: ${player}`)
  prompt.start()
  prompt.get(['position'], (err, result) => {
    if (err) console.error(err)
    if (validateMove(result.position)) {
      markMove(result.position, player)
      printBoard()
      if (checkWin(player)) {
        console.log('WIN!')
        return
      }
      if (player === 'X') play('O')
      else play('X')
    } else {
      console.log('Invalid move. ):')
      play(player)
    }
  })
}

printBoard()
play('X')
