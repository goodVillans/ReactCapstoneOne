import React, { useEffect } from 'react'
import { checkWin } from '../helperFunctions';
import '../App.css';

const PopUp = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playReset }) => {
  let message = '';
  let reveal = '';
  let playable = true;

  if(checkWin(correctLetters, wrongLetters, selectedWord) === 'win'){
    message = 'you win!';
    playable = false;
  // Invoke the checkWin function correctly
  } else if(checkWin(correctLetters, wrongLetters, selectedWord) === 'loss'){
    message = 'you lose :(';
    reveal = `the word is ${selectedWord}`;
    playable = false;
  }

  useEffect(() => setPlayable(playable));

  return (
    <div className='pop-up-container' 
    style={message !== '' ? {display: 'flex'} : {} }>
      <h2>{message}</h2>
      <h3>{reveal}</h3>
      <button onClick= {playReset}>Play Again</button>
    </div>
  )
}

export default PopUp
