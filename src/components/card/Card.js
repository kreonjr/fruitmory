import React from "react";
import "./Card.css";

const Card = ({
  backSide = null,
  flipped = false,
  onClick = () => {},
  matched = false
}) => {
  return (
    <div
      className={`card-container ${matched ? "matched" : ""}`}
      onClick={onClick}
    >
      <div id="cardBody" className={`card-body ${flipped ? "flip" : ""}`}>
        <div className="card-side side-back">
          <img src={backSide} className="image" alt={`fruit${backSide}`} />
        </div>
        <div className="card-side">
          <div className="side-front-content" />
        </div>
      </div>
    </div>
  );
};

export default Card;
