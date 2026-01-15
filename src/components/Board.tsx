import { useGame } from '../context/useGame';
import Square from './Square';

const Board = () => {
  const { board } = useGame();

  // The board size - 500x500 pixels
  const boardSize = { width: '500px', height: '500px' };

  return (
    <div className="inline-block">
      <div 
        className="grid grid-cols-3 gap-4 p-6 bg-gray-900 rounded-lg border-2 border-blue-400"
        style={boardSize}
      >
        {/* Create all 9 squares */}
        {board.map((_, squareIndex) => (
          <Square key={squareIndex} index={squareIndex} />
        ))}
      </div>
    </div>
  );
};

export default Board;
