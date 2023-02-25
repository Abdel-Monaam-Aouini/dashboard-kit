import { Component } from 'react'

// Images
import soon from '../../assets/images/soon.jpeg'
// SCSS
import './Articles.scss'

class Articles extends Component {
  render() {
    return (
      <div>
        <h1>Articles</h1>
        <img className="soon" src={soon} alt="Coming Soon!"/>
      </div>
    )
  }
}

export default Articles
