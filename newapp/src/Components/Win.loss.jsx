import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import "./win.loss.scss";

const colors = [
  "rgba(54, 162, 235, 0.5)", // Blue color with opacity
  "rgba(255, 99, 132, 0.5)", // Red color with opacity
  "rgba(75, 192, 192, 0.5)", // Green color with opacity
  "rgba(153, 102, 255, 0.5)", // Purple color with opacity
  "rgba(255, 206, 86, 0.5)", // Yellow color with opacity
];

const winColors = [
  "rgba(54, 162, 235, 0.5)",
  "rgba(255, 99, 132, 0.5)",
  "rgba(255, 206, 86, 0.5)",
  "rgba(153, 102, 255, 0.5)",
];
const lossColors = [
  "rgba(75, 192, 192, 0.5)",
  "rgba(153, 102, 255, 0.5)",
  "rgba(54, 162, 235, 0.5)",
  "rgba(255, 99, 132, 0.5)",
];

const options = {
  method: "GET",
  url: "https://api-nba-v1.p.rapidapi.com/standings",
  params: { league: "standard", season: "2021" },
  headers: {
    "X-RapidAPI-Key": "f06f40ef69msh9a275bf1e8c1ed7p111651jsnd4715759e2ee",
    "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
  },
};

const Nba = () => {
  const [data, setData] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const chartRef = React.createRef();

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

  useEffect(() => {
    if (!selectedTeam) return;

    const selectedTeamData = data.find(
      (team) => team.team.name === selectedTeam
    );

    if (!selectedTeamData) return;

    const ctx = chartRef.current.getContext("2d");

    const chartInstance = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Wins", "Losses"],
        datasets: [
          {
            data: [selectedTeamData.win.total, selectedTeamData.loss.total],
            backgroundColor: [
              winColors[selectedTeamData.conference.rank % winColors.length],
              lossColors[selectedTeamData.conference.rank % lossColors.length],
            ],
          },
        ],
      },
      options: {
        plugins: {
          legend: { position: "bottom" },
          tooltip: {
            callbacks: {
              label: (context) =>
                `${context.label}: ${context.parsed.toFixed(2)}%`,
            },
          },
          datalabels: {
            formatter: (value, context) => {
              const sum = context.dataset.data.reduce(
                (acc, val) => acc + val,
                0
              );
              const percentage = ((value / sum) * 100).toFixed(2);
              return `${percentage}%`;
            },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1, // You can adjust this value to control the aspect ratio
        width: 200,
        height: 150,
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, [selectedTeam, data]);

  const handleTeamSelect = (event) => {
    const selectedTeamName = event.target.value;
    setSelectedTeam(selectedTeamName);
  };

  return (
    <div className="container">
      <select value={selectedTeam} onChange={handleTeamSelect}>
        <option value="">Select a team</option>
        {data.map((team) => (
          <option key={team.team.name} value={team.team.name}>
            {team.team.name}
          </option>
        ))}
      </select>
      <div className="chart-container">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default Nba;
