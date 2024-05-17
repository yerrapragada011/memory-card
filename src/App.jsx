import { useState, useEffect } from 'react'
import Cards from './Cards'
import './App.css'

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
      <div className='game'>
        <h1>Memory Card</h1>
        <div className='card-grid'>
          {cards.map((card, index) => (
            <img src={card.image} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
