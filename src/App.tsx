import { GameProvider } from './context/GameContext';
import Board from './components/Board';
import GameInfo from './components/GameInfo';

function App() {
  return (
    <GameProvider>
      <div className="min-h-screen w-screen bg-black flex items-center justify-center relative">
        
        {/* Instructions Panel - Fixed on the left side */}
        <aside className="fixed left-10 top-1/2 -translate-y-1/2 p-6 bg-gray-900 rounded-lg border border-gray-700 w-64">
          <h2 className="text-xl font-bold text-gray-300 mb-4">
            How to Play:
          </h2>
          <ul className="text-left text-gray-400 space-y-2">
            <li>• Player X goes first (blue)</li>
            <li>• Player O goes second (red)</li>
            <li>• Get 3 in a row to win!</li>
            <li>• Click "New Game" to restart</li>
          </ul>
        </aside>

        {/* Main Game Area */}
        <main className="max-w-4xl w-full space-y-10">
          {/* Game status and controls */}
          <GameInfo />
          
          {/* The game board */}
          <div className="flex justify-center">
            <Board />
          </div>
        </main>
        
      </div>
    </GameProvider>
  );
}

export default App;