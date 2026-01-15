# Tic-Tac-Toe Game

A simple, beautiful tic-tac-toe game built with React, TypeScript, Tailwind CSS, and Context API.

## 🎮 How to Play

1. The game is played on a 3x3 grid
2. Player X (blue) always goes first
3. Player O (red) goes second
4. Click on any empty square to place your mark
5. Get three in a row (horizontally, vertically, or diagonally) to win!
6. If all squares are filled and no one has won, it's a draw
7. Click "New Game" to start over anytime

## 🚀 Running the Game

### First Time Setup
1. Make sure you have [Node.js](https://nodejs.org/) installed on your computer
2. Open a terminal/command prompt in this folder
3. Run: `npm install` (this installs all the needed files)

### Starting the Game
1. Open a terminal/command prompt in this folder
2. Run: `npm run dev`
3. Open your web browser and go to: http://localhost:5173
4. Enjoy playing!

### Stopping the Game
Press `Ctrl + C` in the terminal where the game is running

## 📁 Project Structure (For Learning)

```
src/
├── components/          # All the visual parts of the game
│   ├── Board.tsx       # The 3x3 game grid
│   ├── Square.tsx      # A single square on the board
│   └── GameInfo.tsx    # Game status and instructions
│
├── context/            # Game state management
│   ├── GameContext.tsx # Stores and manages game data
│   └── useGame.ts      # Easy way to access game data
│
├── App.tsx             # Main app component (brings everything together)
└── index.css           # Tailwind CSS setup
```

## 🎨 Technologies Used

- **React** - Makes the website interactive
- **TypeScript** - Helps catch errors while coding
- **Tailwind CSS** - Makes everything look pretty
- **Context API** - Shares game data between components
- **Vite** - Fast development tool

## 📚 What You Can Learn

This project is perfect for learning:
- How to build a React application from scratch
- How to use TypeScript for type safety
- How to manage app state with Context API
- How to style components with Tailwind CSS
- How to handle user interactions (clicks)
- How to implement game logic (winner detection)

## 🔧 Key Concepts Explained

### Context API
Think of it like a "central storage box" where we keep:
- The game board (who played where)
- Whose turn it is
- Who won (if anyone)
- Whether it's a draw

Any component can look into this box to get or change information.

### Components
Each component is like a Lego piece:
- **Square**: One clickable box on the grid
- **Board**: 9 squares arranged in a 3x3 grid
- **GameInfo**: Shows who's winning and game instructions
- **App**: Combines everything together

### Game Logic
The game checks for a winner by looking at 8 possible winning combinations:
- 3 rows (top, middle, bottom)
- 3 columns (left, middle, right)
- 2 diagonals (top-left to bottom-right, top-right to bottom-left)

## 🎯 Future Ideas

Want to make it better? Try adding:
- Score tracking across multiple games
- Player names instead of just X and O
- Different board sizes (4x4, 5x5)
- Sound effects when you click or win
- Animations when someone wins
- Two-player mode online

## 📝 License

Feel free to use this project to learn and have fun!
