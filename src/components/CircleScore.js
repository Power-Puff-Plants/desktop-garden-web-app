import { useEffect } from "react";
import styles from "./CircleScore.module.css";

const CircleScore = ({ percentageScore }) => {
  // const size = 200;
  // const radius = (size - 10) / 2;
  // const circumference = 2 * Math.PI * radius;
  // const strokeDashoffset = circumference - (percentageScore / 100) * circumference
  return (
    <div className={styles.outerCircle}>
      <div className={styles.innerCircle}>
        <p className={styles.postureScore}>{percentageScore * 100}%</p>
        </div>
    </div>
    // <div>
    //   <svg>
    //     <circle />
    //   </svg>
    //   <svg className="progress-ring" width={size} height={size}>
    //     <circle
    //       className="progress-ring__background"
    //       cx={size / 2}
    //       cy={size / 2}
    //       r={radius}
    //       strokeWidth="10"
    //     />
    //     <circle
    //       className="progress-ring__circle"
    //       cx={size / 2}
    //       cy={size / 2}
    //       r={radius}
    //       strokeWidth="10"
    //       strokeDasharray={circumference}
    //       strokeDashoffset={strokeDashoffset}
    //     />
    //   </svg>
    // </div>
  );
};

export default CircleScore;
