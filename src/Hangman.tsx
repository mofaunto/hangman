import "./stylesheets/Hangman.css";
const hangmanHead = <div className='hangmanHead'></div>;
const hangmanBody = <div className='hangmanBody'></div>;
const hangmanRightArm = <div className='hangmanRightArm'></div>;
const hangmanLeftArm = <div className='hangmanLeftArm'></div>;
const hangmanRightLeg = <div className='hangmanRightLeg'></div>;
const hangmanLeftLeg = <div className='hangmanLeftLeg'></div>;

const bodyParts = [
  hangmanHead,
  hangmanBody,
  hangmanRightArm,
  hangmanLeftArm,
  hangmanRightLeg,
  hangmanLeftLeg,
];

type HangmanProps = {
  numberOfGuesses: number;
};

function Hangman({ numberOfGuesses }: HangmanProps) {
  return (
    <div className='container'>
      {bodyParts.slice(0, numberOfGuesses)}
      <div className='noose'></div>
      <div className='tophorizontal'></div>
      <div className='vertical'></div>
      <div className='base'></div>
    </div>
  );
}

export default Hangman;
