import { createContext, useState } from 'react';
import type { ReactNode } from 'react';

// Define what each square can be: either 'X', 'O', or empty (null)
type Player = 'X' | 'O' | null;

// The board is just an array of 9 squares
type Board = Player[];

// This is what our game will share with all components
interface GameContextType {
  board: Board;
  currentPlayer: Player;
  winner: Player;
  isDraw: boolean;
  makeMove: (index: number) => void;
  resetGame: () => void;
}

// Create the context that will hold our game state
export const GameContext = createContext<GameContextType | undefined>(undefined);

// This component manages all the game logic and state
export const GameProvider = ({ children }: { children: ReactNode }) => {
  // Game state - these track everything happening in the game
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player>(null);
  const [isDraw, setIsDraw] = useState(false);

  // All the ways you can win at tic-tac-toe
  // These are the positions [0-8] that form a winning line
  const winningLines = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal \\
    [2, 4, 6], // Diagonal /
  ];

  // Check if there's a winner
  const checkForWinner = (squares: Board): Player => {
    // Look through each possible winning line
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      
      // If all three squares in this line have the same player, that player wins!
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    
    // No winner found
    return null;
  };

  // Check if the game is a draw (all squares filled, no winner)
  const checkForDraw = (squares: Board): boolean => {
    // If every square is filled...
    const allSquaresFilled = squares.every(square => square !== null);
    
    // ...and there's no winner, it's a draw
    return allSquaresFilled && !checkForWinner(squares);
  };

  // Handle when a player clicks a square
  const makeMove = (squareIndex: number) => {
    // Don't allow moves if:
    // - The square is already taken
    // - Someone already won
    // - The game is a draw
    if (board[squareIndex] || winner || isDraw) {
      return;
    }

    // Make a copy of the board and add the current player's mark
    const newBoard = [...board];
    newBoard[squareIndex] = currentPlayer;
    setBoard(newBoard);

    // Check if this move won the game
    const gameWinner = checkForWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      return;
    }

    // Check if this move resulted in a draw
    if (checkForDraw(newBoard)) {
      setIsDraw(true);
      return;
    }

    // No winner or draw, so switch to the other player
    const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
    setCurrentPlayer(nextPlayer);
  };

  // Start a new game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setIsDraw(false);
  };

  // Share everything with child components
  return (
    <GameContext.Provider
      value={{
        board,
        currentPlayer,
        winner,
        isDraw,
        makeMove,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};