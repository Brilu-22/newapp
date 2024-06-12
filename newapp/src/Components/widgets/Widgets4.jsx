import "./widgets4.scss";
import player1 from "./players/Steph Curry.png";

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">PLAYER:</span>
        <span className="counter4">GOLDEN STATE WARRIORS</span>
        <span className="link">Steph Curry</span>
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
