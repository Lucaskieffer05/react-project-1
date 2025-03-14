import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { TURNS } from './constans.js'
import { checkWinner, checkEndGame } from './logic/Board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameToStorage, resetGameFromStorage } from './logic/Storage/index.js'


function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? turnFromStorage : TURNS.X
  })

  const [winner, setWinner] = useState(null) //null no hay ganador, false hay empate

  const updateBoard = (index) => {

    if (board[index] || winner) return

    // actualizar board
    const newBord = [...board]
    newBord[index] = turn
    setBoard(newBord)

    // cambiar de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // guardar partida
    saveGameToStorage({board: newBord, turn: newTurn})

    // verificar ganador
    const newWinner = checkWinner(newBord)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }
    else if (checkEndGame(newBord)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameFromStorage()
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

      <WinnerModal winner={winner} resetGame={resetGame}/>

    </main>

       

  )
}

export default App
