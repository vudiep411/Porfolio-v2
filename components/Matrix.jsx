import React, { useEffect, useState } from 'react';
import { Matrix, Char } from './MatrixComponent';


function MatrixBackground({ timeout }) {

    const amount = 250
 
  const [matrixChars, setMatrixChars] = useState([]);

  useEffect(() => {
    // Create the initial matrix characters
    createMatrixChars();
    // Re-create new matrix characters every 10 seconds
    const intervalId = setInterval(createMatrixChars, 100000);
    return () => clearInterval(intervalId);
  }, []);

  const createMatrixChars = () => {
    // Code to generate random matrix characters
    const characters = "01";
    const randomString = () => Array.from({length: Math.floor(Math.random() * 90) + 1}, () => characters[Math.floor(Math.random() * characters.length)]).join('');
    const matrixChars = Array(amount).fill().map(() => {
      return {
        string: randomString(),
        top: Math.random() * 100,
        left: Math.random() * 100,
        animationDelay: `${Math.random()}s`
      }
    });
    setMatrixChars(matrixChars);
  }


  return (
    <div style={{position: 'relative', zIndex: 0}}>
      <Matrix>
        {matrixChars.map((char, i) => (
          <Char key={i} animationDelay={char.animationDelay} top={char.top} left={char.left}>
            {char.string}
          </Char>
        ))}
      </Matrix>
    </div>
  );
}

export default MatrixBackground;