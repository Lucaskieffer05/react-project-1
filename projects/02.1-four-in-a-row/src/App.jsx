import { useEffect } from 'react';
import { Square } from './components/Square.jsx';
import { TURNS } from './constans.js';
import { WinnerModal } from './components/WinnerModal.jsx';
import { saveGameToStorage, resetGameFromStorage } from './logic/Storage/index.js';
import { useWinner } from './Hooks/useWinner.js';
import { useUpdateBoard } from './Hooks/useUpdateBoard.js';

function App() {

  const { board, turn, updateBoard, resetBoard } = useUpdateBoard();
  const { winner, resetWinner } = useWinner({ board });

  const resetGame = () => {
    resetBoard()
    resetWinner();
    resetGameFromStorage();
  }

  // useEffect para guardar el estado del juego en localStorage
  useEffect(() => {
    console.log('guardando en localStorage');
    saveGameToStorage({ board, turn });
  }, [board, turn]);

  return (
    <main className='board'>
      <h1>Four in a row</h1>
      <section className='game'>
        {board.map((_, index) => (
          <Square key={index} index={index} updateBoard={() =>{if (!winner) updateBoard(index)}}>
            {board[index]}
          </Square>
        ))}
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <button onClick={resetGame}>Reiniciar</button>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
