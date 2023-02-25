import { Component } from 'react'

// SCSS
import './SidebarBtn.scss'

class SidebarBtn extends Component {
  render() {
    const { icon, title, active, onClick } = this.props

    return (
      <div>
        <button
          className={`sidebar-btn ${active ? "active" : ""}`}
          onClick={onClick}
        >
          <div className="btn-icon">{icon}</div>
          <span className="title">{title}</span>
        </button>
      </div>
    );
  }
}

export default SidebarBtn
