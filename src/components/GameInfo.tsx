import { useGame } from '../context/useGame';

const GameInfo = () => {
  const { currentPlayer, winner, isDraw, resetGame } = useGame();

  // Determine what message to show
  let statusMessage;
  
  if (winner) {
    // Someone won!
    statusMessage = (
      <p className="text-green-400">
        🎉 Player {winner} Wins! 🎉
      </p>
    );
  } else if (isDraw) {
    // It's a tie
    statusMessage = (
      <p className="text-yellow-400">
        It's a Draw! 🤝
      </p>
    );
  } else {
    // Game is still going - show whose turn it is
    const playerColor = currentPlayer === 'X' ? 'text-blue-400' : 'text-red-400';
    statusMessage = (
      <p className="text-gray-400">
        Current Turn: 
        <span className={`ml-3 ${playerColor}`}>
          Player {currentPlayer}
        </span>
      </p>
    );
  }

  return (
    <div className="text-center space-y-6">
      {/* Game Title */}
      <h1 className="text-6xl font-black text-gray-300 mb-8">
        Tic-Tac-Toe
      </h1>

      {/* Game Status */}
      <div className="text-2xl font-bold min-h-[3rem] flex items-center justify-center">
        {statusMessage}
      </div>

      {/* New Game Button */}
      <button
        onClick={resetGame}
        className="px-16 py-6 text-2xl font-bold text-white rounded-full 
                   bg-blue-400 hover:bg-blue-500
                   transform hover:scale-105 transition-all duration-300"
      >
        New Game
      </button>
    </div>
  );
};

export default GameInfo;
