import { Component } from 'react'

// Images
import soon from '../../assets/images/soon.jpeg'
// SCSS
import './Contacts.scss'

class Contacts extends Component {
  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <img className="soon" src={soon} alt="Coming Soon!"/>
      </div>
    )
  }
}

export default Contacts
