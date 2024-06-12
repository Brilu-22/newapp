import "./featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"; // Import buildStyles
import "react-circular-progressbar/dist/styles.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Celticslogo from "../logo/CL.png";

const Featured = () => {
  // Define custom styles for the circular progress bar
  const customStyles = buildStyles({
    // Change color to dark green
    pathColor: "#006400", // Dark green color code
    textColor: "#006400", // Text color also set to dark green
  });

  return (
    <div className="featured">
      <div className="top">
        <div className="h1">Standings</div>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featureChart">
          {/* Apply custom styles to the CircularProgressbar */}
          <CircularProgressbar
            value={75}
            text={"75%"}
            strokeWidth={3}
            styles={customStyles} // Apply custom styles here
          />
        </div>
        <p className="title">Team Name:</p>
        <p className="Team">
          <img src={Celticslogo} alt="celticslogo" />
          Celtics
        </p>
        <p className="desc">‘Different Here’</p>

        <div className="summary">
          <div className="items">
            <div className="itemTitle">Points</div>
            <div className="itemResult positive">
              <ArrowDropUpIcon fontSize="small" />
              <div className="resultAmount">121.3</div>
            </div>
          </div>

          <div className="items">
            <div className="itemTitle">Rebounds</div>
            <div className="itemResult positive">
              <ArrowDropUpIcon fontSize="small" />
              <div className="resultAmount">121.3</div>
            </div>
          </div>

          <div className="items">
            <div className="itemTitle">Assists</div>
            <div className="itemResult negative">
              <ArrowDropDownIcon fontSize="small" />
              <div className="resultAmount">121.3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
