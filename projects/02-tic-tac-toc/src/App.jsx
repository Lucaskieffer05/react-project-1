import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O',
}

const Square = ({children, isSelected ,updateBoard, index}) => {

  const className = 'square' + (isSelected ? ' is-selected' : '')

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className = {className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2], //horizontal
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], //vertical
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], //diagonal
  [2, 4, 6],
]

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null) //null no hay ganador, false hay empate

  const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((square) => square != null)
  }

  const updateBoard = (index) => {

    if (board[index] || winner) return

    // actualizar board
    const newBord = [...board]
    newBord[index] = turn
    setBoard(newBord)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // verificar ganador
    const newWinner = checkWinner(newBord)
    if (newWinner) {
      setWinner(newWinner)
    }
    else if (checkEndGame(newBord)) {
      setWinner(false)
    }
  }

  const checkWinner = (boarToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (boarToCheck[a] && boarToCheck[a] === boarToCheck[b] && boarToCheck[a] === boarToCheck[c]) {
        return boarToCheck[a]
      }
    }
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='board'>
      <h1>Ta Te Ti </h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square 
                key={index} 
                index={index}
                updateBoard={updateBoard}>
                
                {board[index]}

              </Square>
            )
            
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>

      <button onClick={resetGame}> Reiniciar </button>

      {
        winner != null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {winner ? `Ganador:` : 'Empate'}
              </h2>

              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>
                  Volver a jugar
                </button>
              </footer>
            </div>
          </section>
        )
      } 

    </main>

       

  )
}

export default App
