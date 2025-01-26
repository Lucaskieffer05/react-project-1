import { WINNER_COMBOS } from '../constans.js'

export const checkWinner = (boarToCheck) => {
for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (boarToCheck[a] && boarToCheck[a] === boarToCheck[b] && boarToCheck[a] === boarToCheck[c]) {
    return boarToCheck[a]
    }
}
return null
}

export const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((square) => square != null)
  }

export const checkSquare = (board, index) => {
    const column = index % 4
    const ColumnElemnts = board.filter((_, index) => index % 4 === column)
    const indexNull = ColumnElemnts.reverse().findIndex((element) => element === null)
    if (indexNull === -1) return -1
    const indexColumElements = (3-indexNull)*4+column
    return indexColumElements
}