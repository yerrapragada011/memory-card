import { useState, useEffect } from 'react'
import Cards from './Cards'

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5)
}

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    const initializeGame = async () => {
      const images = await Cards()
      setCards(
        shuffleArray(images.map((image, index) => ({ id: index, image })))
      )
    }

    initializeGame()
  }, [])

  return (
    <>
      <h1>Memory Card</h1>
      {cards.map((card, index) => (
        <img src={card.image} key={index} />
      ))}
    </>
  )
}

export default App
