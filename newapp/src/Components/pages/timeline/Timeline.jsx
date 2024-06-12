import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import "./timeline.scss";
import video from "../../H.video/lebron Video.MOV";
import Linechart from "../../Components/Linechart";
import Logo from "../../Components/sidebar/logo/logo.png.png";

const Timeline = () => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    const fetchStandings = async () => {
      const options = {
        method: "GET",
        url: "https://api-nba-v1.p.rapidapi.com/standings",
        params: {
          league: "standard",
          season: "2021",
        },
        headers: {
          "X-RapidAPI-Key":
            "f06f40ef69msh9a275bf1e8c1ed7p111651jsnd4715759e2ee",
          "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setStandings(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStandings();
  }, []);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="Header">
          <h1>NBA Timeline</h1>
          <video src={video} autoPlay loop />
        </div>

        <div className="line-container">
          <div className="line">
            <Linechart />
          </div>
        </div>

        <div className="timeline">
          <table className="logo-table">
            <thead>
              <tr>
                <th>Team</th>
                <th>Logo</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((team, index) => (
                <tr key={index}>
                  <td>{team.team.nickname}</td>
                  <td>
                    <img src={team.team.logo} alt={team.team.nickname} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <footer>
          <img src={Logo} alt="Logo" />© 2024 NBA Media Ventures, LLC. All
          rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Timeline;
