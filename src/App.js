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

  const reset = () => {
    setShowReset(false);
    startGame(difficulty);
  };

  const startGame = difficultyLevel => {
    let ids = [];
    for (let i = 1; i <= difficultyLevel; i++) {
      ids.push(i);
    }
    setDifficulty(difficultyLevel);
    setFruit(shuffle(ids));
  };

  return (
    <div className="App">
      <div>
        <center id="title">fruitmory</center>
      </div>
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
