import React from 'react'

// Images
import soon from '../../assets/images/soon.jpeg'
// SCSS
import './Subscription.scss'

const Subscription = () => {
  return (
    <div>
      <h1>Subscription</h1>
      <img className='soon' src={soon} alt='Coming Soon!' />
    </div>
  )
}

export default Subscription
