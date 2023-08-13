
import React, { useState } from 'react';
import './Wrapper.css';
import Theme from '../Theme/Theme';
import gear from "../Question/gear.png"

function ThemeWrapper() {
  const [isThemePopupOpen, setIsThemePopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsThemePopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsThemePopupOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenPopup} className="theme-btn"><img src={gear} alt="gear" />Theme Settings</button>
      {isThemePopupOpen && (
        <div className="theme-popup-overlay">
          <div className="theme-popup">
            <Theme onClose={handleClosePopup} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ThemeWrapper;
