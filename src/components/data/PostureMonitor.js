import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PostureMonitor = ({ postureData }) => {
  const [chartData, setChartData] = useState({
    labels: [],  // Date labels
    datasets: [
      {
        label: 'Good Posture Percentage',
        data: [],  // Percentage of good posture per day
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  });

  const [chartOptions, setChartOptions] = useState({
    scales: {
      y: {
        min: 0,   // Set the minimum value of the y-axis
        max: 100, // Set the maximum value of the y-axis
        ticks: {
          // Show only specific ticks: 0, 20, 40, 60, 80, 100
          callback: function(value) {
            return value % 20 === 0 ? value + '%' : ''; // Only show labels that are multiples of 20
          },
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Good Posture Percentage Over Time',
      },
    },
  });

  // Convert Firestore timestamp (seconds + nanoseconds) to JavaScript Date
  const convertTimestampToDate = (timestamp) => {
    return new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
  };

  // Helper function to format a JavaScript Date to "MMM D, YYYY" (e.g., "Oct 3, 2024")
  const formatDate = (date) => {
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Aggregate posture data by day and calculate percentage of good posture
  const aggregatePostureByDay = (data) => {
    const groupedData = {};

    data.forEach((dataPoint) => {
      const date = formatDate(convertTimestampToDate(dataPoint.timeRecorded));
      
      if (!groupedData[date]) {
        groupedData[date] = { goodPostureCount: 0, totalCount: 0 };
      }

      groupedData[date].totalCount++;
      if (dataPoint.isPostureGood) {
        groupedData[date].goodPostureCount++;
      }
    });

    return groupedData;
  };

  // Update chart dynamically when postureData changes
  useEffect(() => {
    const aggregatedData = aggregatePostureByDay(postureData);

    const labels = Object.keys(aggregatedData);  // Date labels in "MMM D, YYYY" format
    const data = Object.values(aggregatedData).map(({ goodPostureCount, totalCount }) => 
      ((goodPostureCount / totalCount) * 100).toFixed(2)  // Calculate percentage and round to 2 decimals
    );

    setChartData({
      labels,
      datasets: [
        {
          label: 'Good Posture Percentage (%)',
          data,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
        },
      ],
    });
  }, [postureData]);

  return (
    <div style={{ width: '600px', height: '300px' }}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default PostureMonitor;
