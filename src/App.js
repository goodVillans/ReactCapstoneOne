import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Figure from './components/Figure';
import Notification from './components/Notification';
import PopUp from './components/PopUp';
import { showNotification as show } from './helperFunctions';

const words = [
  "javascript",
  "react",
  "hangman",
  "game",
  "computer",
  "keyboard",
  "mouse",
  "monitor",
  "developer",
  "debugger",
  "algorithm",
  "variable",
  "function",
  "component",
  "interface",
  "library",
  "stylesheet",
  "boilerplate",
  "dependency",
  "optimization"
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = e => {
      const {key, keyCode} = e;
      if(playable && keyCode >= 65 && keyCode <= 90){
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if(!correctLetters.includes(letter)){
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          }else{
           show(setShowNotification);
          }
        }else{
          if (!wrongLetters.includes(letter)){
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          }else{
            show(setShowNotification);
          }
        }
      }
    } 
    window.addEventListener('keydown', handleKeydown);
    // event listener clean up(ensure only one event listener is running at a time.
    return () => window.removeEventListener('keydown', handleKeydown);
  // call function everytime the below dependencies are updated
  }, [correctLetters, wrongLetters, playable]);

  function playReset() {
    setPlayable(true);
    // reset arrays
    setCorrectLetters([]);
    setWrongLetters([]);
    // get new random word fro words array
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <div className='App'>
      <Header/>
      <div className='game-container'>
        <Figure wrongLetters= {wrongLetters} />
        <WrongLetters wrongLetters= {wrongLetters} />
        <Word selectedWord= {selectedWord} correctLetters= {correctLetters} />
      </div>
      <Notification showNotification= {showNotification} />
      <PopUp correctLetters= {correctLetters} wrongLetters= {wrongLetters} selectedWord= {selectedWord} setPlayable= {setPlayable} playReset={playReset}/>
    </div>
  );
}

export default App;
