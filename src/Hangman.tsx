import "./stylesheets/Hangman.css";

function Hangman() {
  const hangmanHead = <div className='hangmanHead'></div>;
  const hangmanBody = <div className='hangmanBody'></div>;
  const hangmanRightArm = <div className='hangmanRightArm'></div>;
  const hangmanLeftArm = <div className='hangmanLeftArm'></div>;
  const hangmanRightLeg = <div className='hangmanRightLeg'></div>;
  const hangmanLeftLeg = <div className='hangmanLeftLeg'></div>;

  return (
    <div className='container'>
      {hangmanHead}
      {hangmanBody}
      {hangmanRightArm}
      {hangmanLeftArm}
      {hangmanRightLeg}
      {hangmanLeftLeg}
      <div className='noose'></div>
      <div className='tophorizontal'></div>
      <div className='vertical'></div>
      <div className='base'></div>
    </div>
  );
}

export default Hangman;
