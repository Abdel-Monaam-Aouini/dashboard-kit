import React from "react";
// SCSS
import "./SidebarBtn.scss";

const SidebarBtn = ({ icon, title, active, onClick }) => {
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
};

export default SidebarBtn;
