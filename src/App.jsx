import { use, useState } from 'react'
import './App.css'

import { getRandomHexes, sampleRandomHex } from './randomHex'
const hexList = getRandomHexes()
const chosenHex = sampleRandomHex(hexList)

function App() {
  const [correct, setCorrect] = useState('-')
  const [chosenHex, setChosenHex] = useState(null)

  return (
    <div className="App">

    </div>
  )
}

export default App
