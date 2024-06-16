import { useState } from "react";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import Log from "./components/Log";
import Player from "./components/Player";
import { WINNING_COMBINATIONS } from "./winning-combination";
 
const PLAYERS = {
  X: "Player1",
  0: "Player2",
};
 
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
 
function deriveGameBoard(gameTurns) {
  // here we are doing deep copy
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];
  for (let turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}
function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "0";
  }
  return currentPlayer;
}
 
function deriveWinner(gameBoard, players) {
  let winner; // default value is undefined
  for (let combination of WINNING_COMBINATIONS) {
    const firstSquareCombination =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareCombination =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareCombination =
      gameBoard[combination[2].row][combination[2].column];
 
    const first = firstSquareCombination;
    const second = secondSquareCombination;
    const third = thirdSquareCombination;
 
    if (first && first === second && first === third) {
      winner = players[firstSquareCombination];
    }
  }
 
  return winner;
}
 
// App component starting point
function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
 
  let hasDraw = gameTurns.length === 9 && !winner;
 
  // function for handling the game turns
  function handleSelectSquare(rowIndex, columnIndex) {
    setGameTurns((previousTurns) => {
      let currentPlayer = deriveActivePlayer(previousTurns);
      let updatedTurns = [
        { square: { row: rowIndex, col: columnIndex }, player: currentPlayer },
        ...previousTurns,
      ];
      return updatedTurns;
    });
  }
 
  // Function for rematch again
  function handleRematch() {
    setGameTurns([]);
  }
 
  // Function for handling the player name change
  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayer) => {
      return {
        ...prevPlayer,
        [symbol]: newName, // this is a react feature learn more about it
      };
    });
  }
 
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onNameChange={handlePlayerNameChange}
          />
          <Player
            name={PLAYERS[0]}
            symbol="0"
            isActive={activePlayer === "0"}
            onNameChange={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver
            winner={
              winner && winner.charAt(0).toUpperCase() + winner.substring(1)
            }
            onRestart={handleRematch}
          />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} players={players} />
    </main>
  );
}
 
export default App;