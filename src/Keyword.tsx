type KeywordProps = {
  guessedLetters: string[];
  guessWord: string;
  reveal?: boolean;
};

function Keyword({ guessedLetters, guessWord, reveal = false }: KeywordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
        marginTop: "1rem",
        marginBottom: "2rem",
      }}
    >
      {guessWord.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default Keyword;
