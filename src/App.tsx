import { useState } from "react";
import words from "./wordList.json";
import "./stylesheets/App.css";
import Hangman from "./Hangman";
import Keyword from "./Keyword";
import Keyboard from "./Keyboard";

function App() {
  const [guessWord, setGuessWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  console.log(guessWord);

  return (
    <div className='main'>
      <div className='topText'>Win or Lose</div>
      <Hangman />
      <Keyword />
      <div className='keyboard'>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
