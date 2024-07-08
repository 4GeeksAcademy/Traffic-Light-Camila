import React, { useState } from 'react';

const ChangeColor = () => {
    const [color, setColor] = useState("red");

    const handleChangeColor = () => {
        if (color === "red") {
            setColor("yellow");
        } else if (color === "yellow") {
            setColor("green");
        } else if (color === "green") {
            setColor("red");
        }
    };

    return (
        <button className='btn-sucess' onClick={handleChangeColor}>
            Cambiar Color
        </button>
    );
};

export default ChangeColor;
