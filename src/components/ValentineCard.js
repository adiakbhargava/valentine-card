// src/components/ValentineCard.js
import { useState } from 'react';
import valentineImage from './asset01.jpg';
import './ValentineCard.css';

const ValentineCard = () => {
  const [heartsVisible, setHeartsVisible] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState(null);
  const [accepted, setAccepted] = useState(false);

  const handleNoButtonHover = () => {
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 40;
    
    setNoButtonPosition({
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY)
    });
  };

  const createHearts = () => {
    const hearts = [];
    for (let i = 0; i < 50; i++) {
      hearts.push({
        id: i,
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        fontSize: `${Math.random() * 20 + 10}px`,
        animationDuration: `${Math.random() * 3 + 2}s`
      });
    }
    return hearts;
  };

  const handleYesClick = () => {
    setHeartsVisible(true);
    setAccepted(true);
  };

  return (
    <div className="valentine-container">
      {/* Hearts Animation Container */}
      <div className={`hearts-container ${heartsVisible ? 'visible' : ''}`}>
        {heartsVisible && createHearts().map(heart => (
          <div
            key={heart.id}
            className="heart"
            style={{
              left: heart.left,
              top: heart.top,
              fontSize: heart.fontSize,
              animationDuration: heart.animationDuration
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Main Container */}
      <div className="main-container">
        {/* Image Container */}
        <div className="image-container">
          <img
            src= {valentineImage}
            alt="Dashing Gentleman"
            className="profile-image"
          />
        </div>

        {/* Card */}
        <div className="card">
          <h1 className="card-title">
            {accepted ? "ts." : "Will you be my Valentuzz? ❤️"}
          </h1>

          {/* Buttons Container */}
          {!accepted && (
            <div className="button-container">
              <button
                onClick={handleYesClick}
                className="yes-button"
              >
                ts
              </button>
              
              {noButtonPosition ? (
                <button
                  onMouseEnter={handleNoButtonHover}
                  style={{
                    position: 'fixed',
                    left: noButtonPosition.x,
                    top: noButtonPosition.y,
                  }}
                  className="no-button"
                >
                  pmo
                </button>
              ) : (
                <button
                  onMouseEnter={handleNoButtonHover}
                  className="no-button"
                >
                  pmo
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ValentineCard;