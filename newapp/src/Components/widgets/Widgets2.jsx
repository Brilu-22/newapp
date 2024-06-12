// Importing required modules and components
import React, { useState } from "react";
import "./widgets2.scss";
import player2 from "./players/James Harden.png";
import Modal2 from "../Modal2";

const Widget = () => {
  // Using useState hook for modal state management
  const [showModal, setShowModal] = useState(false);

  // Function to handle modal visibility
  const handleImageClick = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <div className="widget">
      <div className="left">
        <span className="title">PLAYER:</span>
        <span className="counter2">LA CLIPPERS</span>

        <div className="players-name" onClick={handleImageClick}>
          <span className="name">James Harden</span>
        </div>

        <Modal2
          showModal={showModal}
          setShowModal={setShowModal}
          imgSrc={player2}
        />
      </div>
      <div className="right">
        <span className="player2">
          <img src={player2} alt="player2" />
        </span>
      </div>
    </div>
  );
};

export default Widget;
