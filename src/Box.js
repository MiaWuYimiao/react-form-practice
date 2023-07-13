import React, { useState } from "react";

const Box = ({id, backgroundColor, height, width, deleteBox}) => {
    const handleClick = evt => {
        deleteBox(id);
    };

    return (
        <div>
            <div style={{ backgroundColor:backgroundColor, height:+height, width:+width}}>
            </div>
            <button onClick={handleClick}>X</button>
        </div>
    )
}

export default Box;