import React, { useState, useEffect } from "react";
import "./Gameboard.css";
import Card from "../card/Card";
import { FruitImages, Difficulty } from "../../utils";

const Gameboard = ({
  onReset = () => {},
  fruit = [],
  onWin = () => {},
  difficulty = Difficulty.easy
}) => {
  const [matched, setMatched] = useState([]);
  const [match1, setMatch1] = useState({
    value: null,
    index: null
  });
  const [match2, setMatch2] = useState({
    value: null,
    index: null
  });
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    setMatched([]);
    //Give the player "difficulty" seconds to memorize the app
    setShowAll(true);
    setTimeout(() => setShowAll(false), difficulty * 1000);
  }, [fruit, difficulty]);

  useEffect(() => {
    setMatch1({});
    setMatch2({});
  }, [matched]);

  const cardSelected = ({ value, index }) => {
    if (!match1.value) {
      setMatch1({ value, index });
    } else if (match1.value && !match2.value) {
      setMatch2({ value, index });
      //Set timeout to allow for flip animation to complete
      setTimeout(() => {
        if (!matched.includes(value)) {
          if (match1.value === value) {
            const newMatched = [...matched, value];
            //Matched items length reaching half fruit length means play found all couples
            if (newMatched.length === fruit.length / 2) {
              onWin();
            } else {
              setMatched(newMatched);
            }
          } else {
            setMatch2({});
            setMatch1({});
          }
        }
      }, 700);
    }
  };

  const renderCard = (item, index) => {
    let flipped = false;
    if (
      index === match1.index ||
      index === match2.index ||
      matched.includes(item)
    ) {
      flipped = true;
    }

    return (
      <Card
        key={index}
        backSide={FruitImages[item]}
        flipped={flipped || showAll}
        onClick={() => !flipped && cardSelected({ value: item, index })}
      />
    );
  };

  return (
    <div id="game-board">
      <div id="cards-container">{fruit.map(renderCard)}</div>
    </div>
  );
};

export default Gameboard;
