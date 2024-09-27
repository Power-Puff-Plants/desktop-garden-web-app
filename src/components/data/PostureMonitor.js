import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PostureMonitor = ({ postureData }) => {
  const [chartData, setChartData] = useState({
    labels: [],  // Time labels
    datasets: [
      {
        label: 'Posture Detection',
        data: [],  // Posture detection values (0 for bad, 1 for good)
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  });

  // Update chart dynamically when postureData changes
  useEffect(() => {
    const labels = postureData.map(dataPoint => new Date(dataPoint.time).toLocaleTimeString());
    const data = postureData.map(dataPoint => (dataPoint.isGood ? 1 : 0));

    setChartData({
      labels,
      datasets: [
        {
          label: 'Posture Detection (1 = Good, 0 = Bad)',
          data,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
        },
      ],
    });
  }, [postureData]);

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default PostureMonitor;
