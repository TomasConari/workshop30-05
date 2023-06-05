import React, { useState, useEffect } from 'react';
import { fetchGraph } from '../helper/fetch';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler);

export const ChartComponent = ({ graphic = "bitcoin" }) => {
  const [price, setPrice] = useState([]);
  const [dates, setDates] = useState([]);

  const fetchData = async () => {
    const graphData = await fetchGraph(graphic);
    if (graphData.price && Array.isArray(graphData.price)) {
      const filledPrice = fillArray(graphData.price, 10, 0);
      setPrice(filledPrice);
    }
    if (graphData.dates && Array.isArray(graphData.dates)) {
      setDates(graphData.dates);
    }
  };

  useEffect(() => {
    if (price.length === 0) {
      fetchData();
    }
  }, []);

  const fillArray = (arr, length, defaultValue) => {
    if (arr.length < length) {
      const filledArr = [...arr];
      while (filledArr.length < length) {
        filledArr.push(defaultValue);
      }
      return filledArr;
    }
    return arr.slice(0, length);
  };

  const options = {
    indexAxis: 'y',
    scales: {
      y: {
        display: false,
      },
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  function BarChart() {
    const data = {
      labels: dates,
      datasets: [
        {
          data: price,
          backgroundColor: "#595d6f",
        },
      ],
    };

    return (
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    );
  }

  return <BarChart />;
};
