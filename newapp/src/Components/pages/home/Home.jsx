import Navbar from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./home.scss";
import Widget from "../../Components/widgets/Widgets";
import Widget2 from "../../Components/widgets/Widgets2";
import Widget3 from "../../Components/widgets/Widgets3";
import Widget4 from "../../Components/widgets/Widgets4";
import Featured from "../../Components/featured/Featured";
import Chart from "../../Components/chart/Chart";
import Info from "../../Components/Info/Info";
import logo from "../../Components/sidebar/logo/logo.png.png";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget />
          <Widget2 />
          <Widget3 />
          <Widget4 />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>

        <div className="info">
          <Info />
        </div>
        <footer>
          <img src={logo} alt="Logo" />© 2024 NBA Media Ventures, LLC. All
          rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Home;
