import React from "react";
import "./modal.scss";
import clippers from "../Components/logo/LAC.png";
import nba from "../../src/Components/sidebar/logo/logo.png.png";
import "./modal2.scss";
import pic1 from "../img/nba old 1.jpg";

const Modal = ({ showModal, setShowModal, imgSrc }) => {
  if (!showModal) return null;

  const closeModal = () => {
    //console.log("Closing modal...");
    setShowModal(false);
  };

  return (
    <div className="modal">
      <img src={pic1} alt="pic" />
      <div className="overlay"></div>
      <div className="modal-content">
        <div className="image-container">
          <img src={imgSrc} alt="player" />
        </div>
        <div className="additional-info">
          <div className="nba">
            <img src={nba} alt="logo" />
          </div>
          <h3>Team:</h3>
          <h2> LA Clippers</h2>
          <p>Position: Forward</p>
          <p>Number: 23</p>
          <p>Height: 6'9"</p>
          <p>Weight: 250 lbs</p>
          <button onClick={closeModal} className="close-button">
            Close
          </button>
          <div className="logo">
            <img src={clippers} alt="logo" />
          </div>
        </div>
      </div>
      <div className="close-overlay" onClick={() => setShowModal(false)}></div>
    </div>
  );
};

export default Modal;
