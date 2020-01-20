import React, { Fragment } from "react";
import "./GameMenu.css";
import { Difficulty } from "../../utils";

const GameMenu = ({
  setDifficulty = () => {},
  onReset,
  showReset
}) => {
  const valueChange = option => {
    setDifficulty(option.target.value);
  };

  return (
    <div id="menu-container">
      <label id="difficulty-title">Select a difficulty:</label>
      <select name="difficulty" id="difficulty-select" onChange={valueChange}>
        <option value={Difficulty.easy}>Easy</option>
        <option value={Difficulty.medium}>Medium</option>
        <option value={Difficulty.hard}>Hard</option>
      </select>
      {showReset && (
        <Fragment>
          <div id="separator" />
          <label id="win-label" className="bounce">
            Great Job! Try again?
          </label>
          <div id="reset-button" onClick={onReset}>
            <label>Restart</label>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default GameMenu;
