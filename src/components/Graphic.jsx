import React, { useState } from 'react';
import Chart from 'chart.js';
import { fetchGraph } from './fetch';

export const ChartComponent = ({graphic}) => {
    const [chart, setChart] = useState(null);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const graphData = await fetchGraph(graphic);
        setData(graphData);
    };

    if (data.length === 0) {
        fetchData();
    }

    const createChart = () => {
        const ctx = document.getElementById('myChart').getContext('2d');
        const newChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Array.from({ length: data.length }, (_, i) => `Posición ${i + 1}`),
            datasets: [
            {
                label: 'Dataset',
                data: data,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
            ]
        },
        options: {
            scales: {
            y: {
                beginAtZero: true
            }
            }
        }
        });

        setChart(newChart);
    };

    if (chart === null) {
        createChart();
    }

    return (
        <div>
        <canvas id="myChart" />
        </div>
    );
};
