import { Component } from 'react'

// Images
import soon from '../../assets/images/soon.jpeg'
// SCSS
import './Agents.scss'

class Agents extends Component {
  render() {
    return (
      <div>
        <h1>Agents</h1>
        <img className="soon" src={soon} alt="Coming Soon!"/>
      </div>
    )
  }
}

export default Agents
