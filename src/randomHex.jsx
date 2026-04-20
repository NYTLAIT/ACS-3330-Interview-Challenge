export function getRandomHexes(numColors = 3) {
  const availableValues = '0123456789ABCDEF'
  const hexLength = 6
  const hexList = []

  for (let i = 0; i < numColors; i++) {
    let hex = '#'

    for (let j = 0; j < hexLength; j++) {
      const index = Math.floor(Math.random() * availableValues.length)
      hex += availableValues[index]
    }

    hexList.push(hex)
  }

  console.log(hexList)
  return hexList
}

export function sampleRandomHex(hexList) {
  const index = Math.floor(Math.random() * hexList.length)
  const chosenHex = hexList[index]

  console.log(chosenHex)
  return chosenHex
}