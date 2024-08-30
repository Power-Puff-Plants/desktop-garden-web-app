import styles from './CircleScore.module.css'

const CircleScore = () => {
  return (
    <div className={styles.outerCircle}>
      <div className={styles.innerCircle}>
        <p className={styles.postureScore}>70%</p>
        </div> 
    </div>
  );
};

export default CircleScore;
