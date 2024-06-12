import React, { useState } from "react";
import "./widgets.scss";
import player1 from "./players/lebron James.png";
import Modal from "../Modal";

const Widget = () => {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <div className="widget">
      <div className="left">
        <span className="title">PLAYER:</span>
        <span className="counter">LAKERS</span>
        <div className="player-name" onClick={handleImageClick}>
          <span className="name">LeBron James</span>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            imgSrc={player1}
          />
        </div>
      </div>
      <div className="right">
        <span className="player">
          <img src={player1} alt="player" />
        </span>
      </div>
    </div>
  );
};

export default Widget;
