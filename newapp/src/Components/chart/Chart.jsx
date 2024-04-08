import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import "./chart.scss";

export default function BarChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    // Monthly sales data for RedBull Energy Drink (made-up data)
    const monthlySalesData = [
      200, 600, 700, 500, 900, 900, 1100, 1200, 1300, 1400, 1500, 1600,
    ];

    // Monthly sales data for Monster Energy Drink (made-up data)
    const monthlySalesDataMonster = [
      600, 300, 800, 900, 700, 1100, 1200, 1300, 1400, 1500, 1600, 1700,
    ];

    chartInstance.current = new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Monthly point per game",
            data: monthlySalesData,
            backgroundColor: "rgba(0, 117, 0, 0.2)", // Green color with opacity
            borderColor: "rgba(0, 117, 0, 1)", // Green color without opacity
            borderWidth: 1, // Border width for each bar
          },
          {
            label: "Monthly Assists per game",
            data: monthlySalesDataMonster,
            backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color with opacity
            borderColor: "rgba(255, 206, 86, 1)", // Yellow color without opacity
            borderWidth: 1, // Border width for each bar
          },
        ],
      },
      options: {
        layout: {
          padding: {
            left: 80, // adjusting the value when moving the chart to the left ( it's like margin-left )
            right: 80,
            bottom: 20,
            top: 20,
          },
        },
        scales: {
          y: {
            beginAtZero: true, // Start y-axis from zero
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Celtics monthly NBA points ",
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
  }, []);

  return <canvas className="chart" ref={chartRef} />;
}
