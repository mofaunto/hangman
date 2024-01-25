import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import "./stylesheets/App.css";
import Hangman from "./Hangman";
import Keyword from "./Keyword";
import Keyboard from "./Keyboard";

function getNewWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [guessWord, setGuessWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !guessWord.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = guessWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setGuessWord(getNewWord());
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div className='main'>
      <div className='topText'>
        {isWinner && "You won! - Refresh to play again"}
        {isLoser && "Nice Try! - Refresh to try again"}
      </div>
      <Hangman numberOfGuesses={incorrectLetters.length} />
      <Keyword
        guessedLetters={guessedLetters}
        guessWord={guessWord}
        reveal={isLoser}
      />
      <div className='keyboard'>
        <Keyboard
          activeLetters={guessedLetters.filter((letter) =>
            guessWord.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
          disabled={isWinner || isLoser}
        />
      </div>
    </div>
  );
}

export default App;
