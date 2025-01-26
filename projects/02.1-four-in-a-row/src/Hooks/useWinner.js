import { checkWinner, checkEndGame } from '../logic/Board.js';
import confetti from 'canvas-confetti';
import { useEffect, useState } from 'react';

export function useWinner({board}){

    const [winner, setWinner] = useState(null); 

    // useEffect para verificar ganador o empate
    useEffect(() => {
        const newWinner = checkWinner(board);
        if (newWinner) {
            confetti();
            setWinner(newWinner);
        } else if (checkEndGame(board)) {
            setWinner(false);
        }
    }, [board]);

    const resetWinner = () => {
        setWinner(null);
    }

    return {winner, resetWinner};
}