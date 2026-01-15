import { useGame } from '../context/useGame';

interface SquareProps {
  index: number;
}

const Square = ({ index }: SquareProps) => {
  const { board, makeMove, winner } = useGame();
  
  // What's in this square? (X, O, or nothing)
  const value = board[index];
  
  // Can the player click this square?
  const isClickable = !value && !winner;

  // Handle when someone clicks this square
  const handleClick = () => {
    if (isClickable) {
      makeMove(index);
    }
  };

  // Determine the square's appearance based on its state
  let squareStyle = 'w-full h-full text-6xl font-black rounded-lg ';
  squareStyle += 'transition-all duration-300 transform ';
  squareStyle += 'flex items-center justify-center ';
  squareStyle += 'border border-gray-700 ';
  
  // Style based on what's in the square
  if (value === 'X') {
    squareStyle += 'text-blue-400 bg-gray-800';
  } else if (value === 'O') {
    squareStyle += 'text-red-400 bg-gray-800';
  } else {
    squareStyle += 'bg-gray-800';
    if (isClickable) {
      squareStyle += ' hover:bg-gray-700 hover:scale-105 cursor-pointer';
    }
  }
  
  if (!isClickable) {
    squareStyle += ' cursor-not-allowed';
  }

  return (
    <button
      onClick={handleClick}
      className={squareStyle}
      disabled={!isClickable}
    >
      <span className="drop-shadow-lg">{value}</span>
    </button>
  );
};

export default Square;