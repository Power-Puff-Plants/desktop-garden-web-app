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

  // Convert Firestore timestamp (seconds + nanoseconds) to JavaScript Date
  const convertTimestampToDate = (timestamp) => {
    return new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
  };

  // Helper function to format a JavaScript Date to "YYYY-MM-DD"
  const formatDate = (date) => {
    return date.toISOString().split('T')[0];  // Returns date in YYYY-MM-DD format
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

    const labels = Object.keys(aggregatedData);  // Date labels (YYYY-MM-DD)
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
    <div style={{ width: '600px', height: '300px' }}>  {/* Adjust width and height here */}
    <Line data={chartData} />
  </div>
  );
};

export default PostureMonitor;
