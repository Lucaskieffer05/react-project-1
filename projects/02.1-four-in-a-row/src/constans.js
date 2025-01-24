export const TURNS = {
  X: '❌',
  O: '⚪',
}

export const WINNER_COMBOS = [
  //Grilla 4x4
  [0, 1, 2], //horizontal
  [1, 2, 3], //horizontal
  [4, 5, 6], //horizontal
  [5, 6, 7], //horizontal
  [8, 9, 10], //horizontal
  [9, 10, 11], //horizontal
  [12, 13, 14], //horizontal
  [13, 14, 15], //horizontal
  [0, 4, 8], //vertical
  [4, 8, 12], //vertical
  [1, 5, 9], //vertical
  [5, 9, 13], //vertical
  [2, 6, 10], //vertical
  [6, 10, 14], //vertical
  [3, 7, 11], //vertical
  [7, 11, 15], //vertical
  [0, 5, 10], //diagonal
  [5, 10, 15], //diagonal
  [3, 6, 9], //diagonal
  [6, 9, 12], //diagonal
  [4, 9, 14], //diagonal
  [1, 6, 11], //diagonal
  [2, 5, 8], //diagonal
  [7, 10, 13], //diagonal
  
]