import CircleScore from './CircleScore';
import styles from './DataContainer.module.css'
import PostureMonitor from './PostureMonitor';
import ProgressSpinner from './ProgressSpinner';

const DataContainer = ({ title, description, scoreOrMonitor, percentageScore }) => {
  return (
    <div className={styles.dataContainer}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.description}>
        {description}
      </div>
      <div className={styles.figure}>
        {/* {scoreOrMonitor ? <CircleScore percentageScore={percentageScore}/> : <PostureMonitor />} */}
        {scoreOrMonitor ? <ProgressSpinner percentage={percentageScore}/> : <PostureMonitor />}
      </div>
    </div>
  )
}

export default DataContainer;