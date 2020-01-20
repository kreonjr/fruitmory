import React, { useState, useEffect } from "react";
import "./App.css";
import Gameboard from "./components/gameboard/Gameboard";
import GameMenu from "./components/gameMenu/GameMenu";
import { shuffle, Difficulty } from "./utils";
import Info from "./components/info/Info";

function App() {
  const [fruit, setFruit] = useState([]);
  const [showReset, setShowReset] = useState(false);
  const [difficulty, setDifficulty] = useState(Difficulty.easy);

  useEffect(() => {
    startGame(Difficulty.easy);
  }, []);

  const startGame = difficultyLevel => {
    let ids = [];
    for (let i = 1; i <= difficultyLevel; i++) {
      ids.push(i);
    }
    setDifficulty(difficultyLevel);
    setShowReset(false);
    setFruit(shuffle(ids));
  };

  const reset = () => {
    setShowReset(false);
    startGame(difficulty);
  };

  return (
    <div className="App">
      <Info />
      <Gameboard
        onWin={() => setShowReset(true)}
        fruit={fruit}
        difficulty={difficulty}
      />
      <GameMenu
        setDifficulty={startGame}
        showReset={showReset}
        onReset={reset}
      />
    </div>
  );
}

export default App;
