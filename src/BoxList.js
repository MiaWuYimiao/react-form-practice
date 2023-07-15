import React, { useState } from "react";
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from "uuid";

const BoxList = () => {
    const initialBoxes = [{
        id: uuid(),
        backgroundColor: "blue",
        width: 100,
        height: 50
    }, {
        id: uuid(),
        backgroundColor: "red",
        width: 20,
        height: 60
    }]

    const [boxes, setBoxes] = useState([]);

    const addBox = (box) => {
        let newBox = { ...box, id:uuid() };
        setBoxes(oldBoxes => [...oldBoxes, newBox]);
    };

    const deleteBox = (id) => {
        setBoxes(oldBoxes => (
            oldBoxes.filter(box => box.id != id)
        ))
    };

    return (
        <div>
            {boxes.map(box => (
                <Box backgroundColor={box.backgroundColor}
                    id={box.id}
                    height={box.height}
                    width={box.width}
                    key={box.id}
                    deleteBox={deleteBox}
                />
            ))}
            {<NewBoxForm addBox={addBox}/>}
        </div>
    )
}

export default BoxList;