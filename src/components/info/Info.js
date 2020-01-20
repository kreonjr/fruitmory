import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div id="info-container">
      <label>
        <center id="title">fruitmory</center>
      </label>
      <p>
        <label id="instructions-title">Instructions:</label>
        <ul id="instructions">
          <li>Notice the different fruit pairs on the fruit cards</li>
          <li>Try to remember which fruit card matches its pair</li>
          <li>Master fruitmory by increasing the difficulty once you win</li>
          <li>Have fun and eat your fruit!!!</li>
        </ul>
      </p>
    </div>
  );
};

export default Info;
