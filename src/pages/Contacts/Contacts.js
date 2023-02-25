import React from "react";

// Images
import soon from "../../assets/images/soon.jpeg";
// SCSS
import "./Contacts.scss";

const Contacts = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <img className="soon" src={soon} alt="Coming Soon!" />
    </div>
  );
};

export default Contacts;
