import "./widgets3.scss";
import player1 from "./players/Kevin Love.png";
import { useState } from "react";
import Modal3 from "../Modal3";

const Widget = () => {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <div className="widget">
      <div className="left">
        <span className="title">PLAYER:</span>
        <span className="counter3">MIAMI HEAT</span>

        <div className="players3-name" onClick={handleImageClick}>
          <span className="name">Kevin Love</span>
        </div>
      </div>
      <Modal3
        showModal={showModal}
        setShowModal={setShowModal}
        imgSrc={player1}
      />
      <div className="right">
        <span className="player">
          <img src={player1} alt="player" />
        </span>
      </div>
    </div>
  );
};

export default Widget;
