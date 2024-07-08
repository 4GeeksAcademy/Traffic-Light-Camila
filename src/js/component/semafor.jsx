import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const TrafficLight = () => {
  const [color, setColor] = useState('red');

  const handleClick = (newColor) => {
    setColor(newColor);
  };

  const toggleColor = () => {
    switch (color) {
      case 'red':
        setColor('yellow');
        break;
      case 'yellow':
        setColor('green');
        break;
      case 'green':
        setColor('red');
        break;
      default:
        setColor('red');
    }
  };

  return (
    <div>
    <div className=' card text-center bg-dark mt-5 p-3  mb-5'>
      <div className='bg-danger rounded-pill'
        onClick={() => handleClick('red')}
        style={{
          height: '60px',
          width: '60px',
          margin: '10px auto',
          cursor: 'pointer',
          boxShadow: color === 'red' ? '0 0 20px white' : 'none', 
        }}
      ></div>
      <div className='bg-warning rounded-pill'
        onClick={() => handleClick('yellow')}
        style={{
          height: '60px',
          width: '60px',
          margin: '10px auto',
          cursor: 'pointer',
          boxShadow: color === 'yellow' ? '0 0 20px white' : 'none', 
        }}
      ></div>
      <div className='bg-success rounded-pill '
        onClick={() => handleClick('green')}
        style={{
          height: '60px',
          width: '60px',
          margin: '10px auto',
          cursor: 'pointer',
          boxShadow: color === 'green' ? '0 0 20px white' : 'none', 
        }}
      ></div>
      <br />
      
      
    </div>
    <button className='btn btn-success mb-2' onClick={toggleColor}>Cambiar color</button>
   
    </div>
  );
};


export default TrafficLight;
