// components/ChessBoard.js
import React from 'react';
import './ChessBoard.css';

export default function ChessBoard() {
    const board = [];

    // 8x8 board banane ke liye nested loop
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            // Logic: Agar row + column ka sum even hai to white, warna black
            const isBlack = (row + col) % 2 === 1;
            
            board.push(
                <div 
                    key={`${row}-${col}`} 
                    className={`square ${isBlack ? 'black' : 'white'}`}
                ></div>
            );
        }
    }

    return (
        <div className="chessboard">
            {board}
        </div>
    );
}