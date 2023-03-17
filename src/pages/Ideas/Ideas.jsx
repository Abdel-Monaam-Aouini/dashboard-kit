import React, { useState } from 'react'

// Images
import soon from '../../assets/images/soon.jpeg'
// SCSS
import './Ideas.scss'

const Ideas = () => {
  const [count, setCount] = useState(0)

  // 📌 Factory function | Need to bind, otherwise it will not working
  const decrement = () => {
    if (count > 0) {
      setCount((count) => count - 1)
    }
  }
  // 📌 Arrow function | Without bind
  const increment = () => {
    if (count < 10) {
      setCount((count) => count + 1)
    }
  }

  return (
    <div>
      <h1>Ideas</h1>

      <div className='count-holder'>
        <h1>Count: {count}</h1>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <img className='soon' src={soon} alt='Coming Soon!' />
    </div>
  )
}

export default Ideas
