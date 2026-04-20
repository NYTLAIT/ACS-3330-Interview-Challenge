import './HexButton.css'

function HexButton({ hex, chosenHex, setCorrect }) {
  return (
    <button
      className="HexButton"
      onClick={() => setCorrect(hex === chosenHex ? 'correct' : 'incorrect')}
      style={{ backgroundColor: hex }}
    />
  )
}

export default HexButton