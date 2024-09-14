import { useEffect } from 'react';
import styles from './CircleScore.module.css'

const CircleScore = ({ percentageScore }) => {

  return (
    <div className={styles.outerCircle}>
      <div className={styles.innerCircle}>
        <p className={styles.postureScore}>{percentageScore * 100}%</p>
        </div> 
    </div>
  );
};

export default CircleScore;
