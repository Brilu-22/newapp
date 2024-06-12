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
        url: "https://api-nba-v1.p.rapidapi.com/standings",
        params: {
          league: "standard",
          season: "2021",
          conference: "east",
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
    if (!data.length || !chartRef.current) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext("2d");

    const teams = data.map((team) => team.team.nickname);
    const ranks = data.map((team) => team.conference.rank);

    chartInstance.current = new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: teams,
        datasets: [
          {
            label: "Conference Rank",
            data: ranks,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Conference Ranks for Teams in the 2021 Eastern Conference",
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
