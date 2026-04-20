import { useState } from 'react'
import './App.css'

import HexButton from './components/HexButton'
import { getRandomHexes, sampleRandomHex } from './randomHex'

function App() {
  const [guessStatus, setGuessStatus] = useState('Oh what could it be?')
  const [guess, setGuess] = useState(null)
  const [hexList, setHexList] = useState(getRandomHexes())
  const [chosenHex, setChosenHex] = useState(sampleRandomHex(hexList))

  function reset() {
    const newHexList = getRandomHexes()
    const newChosenHex = sampleRandomHex(newHexList)

    setHexList(newHexList)
    setChosenHex(newChosenHex)
    setGuessStatus('Oh what could it be?')
    setGuess(null)
  }

  return (
    <div className="App">

      <h2 className="chosenHex"><strong>{chosenHex}</strong></h2>

      <div className="hexButtons">
        {hexList.map(hex =>
          <HexButton
            key={hex}
            hex={hex}
            chosenHex={chosenHex}
            setGuessStatus={setGuessStatus}
            setGuess={setGuess}
          />
        )}
      </div>

      <h3 className="guess">{guess && `You picked: ${guess}`}</h3>
      <h2 className="guessStatus">{guessStatus}</h2>

      <button
        className="resetButton"
        onClick={reset}>
        reset
      </button>
    </div>
  )
}

export default App
