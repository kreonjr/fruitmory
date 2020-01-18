import React, { useState } from 'react';
import './Card.css';

const Card = ({ backSide = null, isFlipped = false, onClick = () => { } }) => {
    const [flipped, setFlipped] = useState(isFlipped)

    const flipCard = () => {
        //setFlipped(!flipped)
        // Timing out the onClick to allow for the animation to complete
        setTimeout(onClick, 800)
    }

    return (
        <div className="card-container" onClick={flipCard}>
            <div className={"card-body" + (flipped ? " flip" : "")}>
                <div className="card-side side-back" >{backSide}</div>
                <div className="card-side side-front" >
                    <div className="side-front-content" />
                </div>
            </div>
        </div>
    );
}

export default Card;
