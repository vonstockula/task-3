import React, { useState } from 'react';
import Popup from './Popup';
import './TaskThreeComponent.css';

const TaskThreeComponent = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="container">
      <button className="show-popup-button" onClick={togglePopup}>Show Popup</button>
      <Popup show={showPopup} onClose={togglePopup} />
    </div>
  );
};

export default TaskThreeComponent;
