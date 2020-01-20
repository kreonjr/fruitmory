import React from "react";
import "./DifficultySelector.css";
import { Difficulty } from "../../utils";

const DifficultySelector = ({
  setDifficulty = () => {},
  onReset,
  showReset
}) => {
  const valueChange = option => {
    setDifficulty(option.target.value);
  };

  return (
    <div id="difficulty-container">
      <label id="difficulty-title">Select a difficulty:</label>
      <select name="difficulty" id="difficulty-select" onChange={valueChange}>
        <option value={Difficulty.easy}>Easy</option>
        <option value={Difficulty.medium}>Medium</option>
        <option value={Difficulty.hard}>Hard</option>
      </select>
      {showReset && (
        <div id="reset-button" onClick={onReset}>
          Restart
        </div>
      )}
    </div>
  );
};

export default DifficultySelector;
