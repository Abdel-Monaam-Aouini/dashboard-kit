import React from "react";

// Images
import soon from "../../assets/images/soon.jpeg";
// SCSS
import "./Agents.scss";

const Agents = () => {
  return (
    <div>
      <h1>Agents</h1>
      <img className="soon" src={soon} alt="Coming Soon!" />
    </div>
  );
};

export default Agents;
