import React from "react";

// Images
import soon from "../../assets/images/soon.jpeg";
// SCSS
import "./Settings.scss";

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
      <img className="soon" src={soon} alt="Coming Soon!" />
    </div>
  );
};

export default Settings;
