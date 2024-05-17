import { useState, useEffect } from 'react'
import Cards from './Cards'
import './App.css'

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5)
}

function App() {
  const [cards, setCards] = useState([])
  const [lastClickedCard, setLastClickedCard] = useState(null)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  useEffect(() => {
    const initializeGame = async () => {
      const images = await Cards()
      setCards(
        shuffleArray(images.map((image, index) => ({ id: index, image })))
      )
    }

    initializeGame()
  }, [])

  const handleClick = (index) => {
    const selectedCard = cards[index]

    if (lastClickedCard && lastClickedCard.image === selectedCard.image) {
      setScore(0)
      setLastClickedCard(null)
    } else {
      setScore(score + 1)
      if (score + 1 > bestScore) {
        setBestScore(score + 1)
      }
      setLastClickedCard(selectedCard)
    }

    setCards(shuffleArray([...cards]))
  }

  return (
    <>
      <div className='game'>
        <h1>Memory Card</h1>
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
        <div className='card-grid'>
          {cards.map((card, index) => (
            <button key={index} onClick={() => handleClick(index)}>
              <img src={card.image} />
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
