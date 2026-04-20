import './HexButton.css'

function HexButton({ hex, chosenHex, setGuessStatus, setGuess }) {
  return (
    <button
      className="HexButton"
      onClick={() => {
        setGuessStatus(hex === chosenHex ? 'correct' : 'incorrect')
        setGuess(hex)
      }}
      style={{ backgroundColor: hex }}
    />
  )
}

export default HexButton