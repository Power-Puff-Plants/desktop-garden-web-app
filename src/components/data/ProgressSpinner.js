import React, { useState, useEffect } from "react";
import "./ProgressSpinner.css"; // Import the styles

const ProgressSpinner = ({ percentage }) => {
  // console.log(percentage);
  const size = 170;
  const strokeWidth = 25;


  const radius = (size - strokeWidth) / 2; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const strokeDashoffset = circumference - (percentage / 100) * circumference; // Offset based on percentage

  return (
    <div>
      <svg className="progress-ring" width={size} height={size}>
        <circle
          className="progress-ring__background"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="progress-ring__circle"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
        <text x="50%" y="-50%" textAnchor="middle" dominantBaseline="middle" className="progress-ring__text">
          {percentage}%
        </text>
      </svg>
      {/* <text>Hello</text> */}
    </div>
  );
};

export default ProgressSpinner;
