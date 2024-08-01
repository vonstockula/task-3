import React, { useState } from 'react';
import './Popup.css';

const Popup = ({ show, onClose }) => {
  const [fontColor, setFontColor] = useState('#444444');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [buttonColor, setButtonColor] = useState('#2072EF');
  const [buttonBorderColor, setButtonBorderColor] = useState('#2072EF');
  const [buttonMouseoverColor, setButtonMouseoverColor] = useState('#444444');

  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Theme Color</h2>
        <div className="popup-content">
          <div className="color-option">
            <label>Font Color</label>
            <input
              type="color"
              value={fontColor}
              onChange={(e) => setFontColor(e.target.value)}
            />
          </div>
          <div className="color-option">
            <label>Background Color</label>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
            />
          </div>
          <div className="color-option">
            <label>Button Color</label>
            <input
              type="color"
              value={buttonColor}
              onChange={(e) => setButtonColor(e.target.value)}
            />
          </div>
          <div className="color-option">
            <label>Button Border Color</label>
            <input
              type="color"
              value={buttonBorderColor}
              onChange={(e) => setButtonBorderColor(e.target.value)}
            />
          </div>
          <div className="color-option">
            <label>Button Mouseover Color
            </label>
            <input
              type="color"
              value={buttonMouseoverColor}
              onChange={(e) => setButtonMouseoverColor(e.target.value)}
            />
          </div>
        </div>
        <div className="popup-buttons">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <button className="save-button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
