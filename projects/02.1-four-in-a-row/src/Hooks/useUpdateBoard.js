import { TURNS } from '../constans';
import { checkSquare } from '../logic/Board';
import { useState } from 'react';

export function useUpdateBoard (){
    const [board, setBoard] = useState(() => {
        const boardFromStorage = window.localStorage.getItem('board');
        return boardFromStorage ? JSON.parse(boardFromStorage) : Array(16).fill(null);
    });
    
    const [turn, setTurn] = useState(() => {
        const turnFromStorage = window.localStorage.getItem('turn');
        return turnFromStorage ? turnFromStorage : TURNS.X;
    });
    
    
    const updateBoard = (index) => {

        const newBoard = [...board];
        const newIndex = checkSquare(newBoard, index);
        if (board[newIndex] || newIndex == -1) return;
        newBoard[newIndex] = turn;
        setBoard(newBoard);

        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        setTurn(newTurn);
    };

    const resetBoard = () => {
        setBoard(Array(16).fill(null));
        setTurn(TURNS.X);
    };

    return {board, turn, updateBoard, resetBoard};

}