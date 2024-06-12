import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Nba.scss";

const options = {
  method: "GET",
  url: "https://api-nba-v1.p.rapidapi.com/standings",
  params: { league: "standard", season: "2021" },
  headers: {
    "X-RapidAPI-Key": "f06f40ef69msh9a275bf1e8c1ed7p111651jsnd4715759e2ee",
    "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
  },
};

const Conference = ({ title, teams }) => {
  return (
    <div className="conference">
      <h1>{title}</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Logo</th>
            <th>Team</th>
            <th>Win</th>
            <th>Loss</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.team.id}>
              <td>{team.conference.rank}</td>
              <td>
                <img
                  src={team.team.logo}
                  alt={team.team.name}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>{team.team.name}</td>
              <td>{team.win.total}</td>
              <td>{team.loss.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Nba = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const unsortedData = await axios.request(options);
        const sortedData = unsortedData.data.response.sort(
          (a, b) => a.conference.rank - b.conference.rank
        );
        setData(sortedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="conference-container">
      <Conference
        title="Eastern Conference"
        teams={data.filter((team) => team.conference.name === "east")}
      />
      <Conference
        title="Western Conference"
        teams={data.filter((team) => team.conference.name === "west")}
      />
    </div>
  );
};

export default Nba;
