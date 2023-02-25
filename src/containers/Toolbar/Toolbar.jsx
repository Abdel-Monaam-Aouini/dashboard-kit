import React from "react";

// SVG icons
import { TicketsNotificationIcon } from "../../assets/Icons/Icons";
// Images
import UserImg from "../../assets/images/UserPngImg/user-img-6.png";
// SCSS
import "./Toolbar.scss";

const Toolbar = ({ activePage }) => {
  return (
    <div className="toolbar-wrap">
      <div className="left-side">
        <h2>{activePage}</h2>
      </div>
      <div className="right-side">
        <div className="search">
          <div className="search-bar-wrap">
            <div className="search-bar">
              <input type="text" placeholder="Search..." required />
              <div className="search-icon"></div>
            </div>
          </div>
          <button className="notification-btn">
            {<TicketsNotificationIcon />}
          </button>
        </div>
        <button className="profile-btn">
          <h4>Jones Ferdinand</h4>
          <img width="50" src={UserImg} alt="User img" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
