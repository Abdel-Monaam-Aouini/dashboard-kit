import React from 'react'

// Images
import soon from '../../assets/images/soon.jpeg'
// SCSS
import './Articles.scss'

const Articles = () => {
  return (
    <div>
      <h1>Articles</h1>
      <img className='soon' src={soon} alt='Coming Soon!' />
    </div>
  )
}

export default Articles
