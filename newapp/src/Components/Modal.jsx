import React from "react";
import "./modal.scss";
import lakers from "../Components/logo/LAKE.png";
import nba from "../../src/Components/sidebar/logo/logo.png.png";

const Modal = ({ showModal, setShowModal, imgSrc }) => {
  if (!showModal) return null;

  const closeModal = () => {
    //console.log("Closing modal...");
    setShowModal(true);
  };

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-contents">
        <div className="image-container">
          <img src={imgSrc} alt="player" />
        </div>
        <div className="additional-info">
          <div className="nba">
            <img src={nba} alt="logo" />
          </div>
          <h3>Team:</h3>
          <h2>Lakers</h2>
          <p>Position: Forward</p>
          <p>Number: 23</p>
          <p>Height: 6'9"</p>
          <p>Weight: 250 lbs</p>
          <button onClick={closeModal} className="close-button">
            Close
          </button>
          <div className="logo">
            <img src={lakers} alt="logo" />
          </div>
        </div>
      </div>
      <div className="close-overlay" onClick={() => setShowModal(false)}></div>
    </div>
  );
};

export default Modal;
