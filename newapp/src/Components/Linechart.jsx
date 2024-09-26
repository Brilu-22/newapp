import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

export default function StockPriceChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [standings, setStandings] = useState([]);
  const [selectedConference, setSelectedConference] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api-nba-v1.p.rapidapi.com/standings",
          {
            params: {
              league: "standard",
              season: 2021,
            },
            headers: {
              "X-RapidAPI-Key":
                "f06f40ef69msh9a275bf1e8c1ed7p111651jsnd4715759e2ee",
              "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
            },
          }
        );
        setStandings(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    const selectedStandings = standings.filter(
      (team) => team.conference.name === selectedConference
    );
    const teamNames = selectedStandings.map((team) => team.team.name);
    const conferenceRanks = selectedStandings.map(
      (team) => team.conference.rank
    );

    chartInstance.current = new Chart(myChartRef, {
      type: "line",
      data: {
        labels: teamNames,
        datasets: [
          {
            label: "Conference Rank",
            data: conferenceRanks,
            fill: false, // Do not fill area under the line
            tension: 0.5, // Adjust tension for curve
            backgroundColor: "rgba(75, 192, 192, 0.2)", // Light blue color with opacity
            borderColor: "rgb(75, 192, 192)", // Solid line color
            borderWidth: 2,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: `Conference Ranks of NBA Teams (${selectedConference})`,
            font: {
              size: 18,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Rank",
            },
          },
          x: {
            title: {
              display: true,
              text: "Team",
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [standings, selectedConference]);

  const handleConferenceChange = (e) => {
    setSelectedConference(e.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="conference">Select Conference:</label>

        <select
          id="conference"
          value={selectedConference}
          onChange={handleConferenceChange}
        >
          <option value="">All</option>
          <option value="east">Eastern Conference</option>
          <option value="west">Western Conference</option>
        </select>
      </div>
      <canvas ref={chartRef} style={{ width: "400px", height: "300px" }} />
    </>
  );
}
