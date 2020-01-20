import React, { useState, useEffect } from "react";
import "./App.css";
import Gameboard from "./components/gameboard/Gameboard";
import DifficutySelector from "./components/difficultySelector/DifficultySelector";
import { shuffle, Difficulty } from "./utils";

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
      <label>
        <center id="title">fruitmory</center>
      </label>
      <Gameboard
        onWin={() => setShowReset(true)}
        fruit={fruit}
        difficulty={difficulty}
      />
      <DifficutySelector
        setDifficulty={startGame}
        showReset={showReset}
        onReset={reset}
      />
    </div>
  );
}

export default App;
