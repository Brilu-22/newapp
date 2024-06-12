import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import "./compare.scss";
import videoheader from "../../H.video/Compare Header video.MOV";
import Nba from "../../Components/Nba";
import logo from "../../Components/sidebar/logo/logo.png.png";
import Win from "../../Components/Win.loss";
import HorizontalBarChart from "../../Components/ComBar";
import VerticalBarChart from "../../Components/ComBar2";
import Logo from "../../Components/sidebar/logo/logo.png.png";

const Compare = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />

        <div className="Header">
          <h1>
            <img src={logo} alt="logo" />
            NBA Compare Standings
          </h1>
          <video src={videoheader} autoPlay loop />
        </div>
        <div className="Teams teams-container">
          <div className="charts">
            <div className="chart-container">
              <HorizontalBarChart />
            </div>
            <div className="chart-container">
              <VerticalBarChart />
            </div>
            <div style={{ clear: "both" }}></div> {/* Clear the floats */}
          </div>
          <div className="other">
            <Nba />
            <Win />
          </div>
        </div>
        <footer>
          <img src={Logo} alt="Logo" />© 2024 NBA Media Ventures, LLC. All
          rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Compare;
