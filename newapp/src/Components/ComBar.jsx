import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

const HorizontalBarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://api-nba-v1.p.rapidapi.com/players/statistics",
        params: {
          team: "1",
          season: "2020",
        },
        headers: {
          "X-RapidAPI-Key":
            "f06f40ef69msh9a275bf1e8c1ed7p111651jsnd4715759e2ee",
          "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!data.length) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext("2d");

    const players = data.map(
      (player) => player.player.firstname + " " + player.player.lastname
    );
    const points = data.map((game) => game.points);

    chartInstance.current = new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: players,
        datasets: [
          {
            label: "Game Points",
            data: points,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Game Points for Players in the 2020 Season",
            font: {
              size: 18,
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
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default HorizontalBarChart;
