import React from 'react';

function WrongLetters({ wrongLetters }) {
  return (
    <div>
      <div className='wrong-letters-contianer'>
        <div id='wrong-letters'>
          {wrongLetters.length > 0 && <p>wrong</p>}
          {wrongLetters
            .map((letter, index) => <span key={index}>{letter}</span>)
            .reduce((prev, current) => (prev === null ? [current] : [prev, ', ', current]), null)}
        </div>
      </div>
    </div>
  );
}

export default WrongLetters;
