import { Component } from 'react'

// SVG icons
import { TicketsNotificationIcon } from '../../assets/Icons/Icons'
// Images
import UserImg from '../../assets/images/UserPngImg/user-img-6.png'
// SCSS
import './Toolbar.scss'

class Toolbar extends Component {
  render() {
    const { activePage } = this.props

    return (
      <div className="toolbar-wrap">
        <div className="left-side">
          <h2>{activePage}</h2>
        </div>
        <div className="right-side">
          <div class="search">
            <div class="search-bar-wrap">
              <div class="search-bar">
                <input type="text" placeholder="Search..." required />
                <div class="search-icon"></div>
              </div>
            </div>
            <button className="notification-btn">{<TicketsNotificationIcon/>}</button>
          </div>
          <button className="profile-btn">
            <h4>Jones Ferdinand</h4>
            <img width="50" src={UserImg} alt="User img" />
          </button>
        </div>
      </div>
    )
  }
}

export default Toolbar
