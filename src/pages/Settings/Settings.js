import { Component } from 'react'

// Images
import soon from '../../assets/images/soon.jpeg'
// SCSS
import './Settings.scss'

class Settings extends Component {
  render() {
    return (
      <div>
        <h1>Settings</h1>
        <img className="soon" src={soon} alt="Coming Soon!"/>
      </div>
    )
  }
}

export default Settings
