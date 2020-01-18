import React, {useState} from "react";
import Card from "../card/Card";

const Gameboard = ({}) => {
    const fruits = [0,1,2, 2,1,0]
    const [matched, setMatched] = useState([])
    const [match1, setMatch1] = useState({})

    const cardSelected = ({value, index, flipped}) => {
        if(!flipped) {
            checkMatched({value, index})
        }
    }

    const renderCard = (item, index) => {
        let flipped = false
        if(matched.includes(item)) {
            flipped = true
        } else if (match1.index === index) {
            flipped = true
        }

        return <Card backSide={<div>{item}</div>} isFlipped={flipped} onClick={() => cardSelected({value: item, index, flipped})}/>
    }

    const checkMatched = ({value, index}) => {
        if(!matched.includes(value)) {
            if(!match1.value) {
                setMatch1({value, index})
            } else {
                if (match1.value === value) {
                    setMatched([...matched, value])
                }
            }
        }
        setMatch1({})
    }

    return <div style={{display:"flex", flexWrap: "wrap", justifyContent: "center", alignItems:"center"}}>
        {fruits.map(renderCard)}
    </div>
}

export default Gameboard