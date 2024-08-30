import CircleScore from './CircleScore';
import styles from './DataContainer.module.css'
import PostureMonitor from './PostureMonitor';

const DataContainer = ({ title, description, scoreOrMonitor }) => {
  return (
    <div className={styles.dataContainer}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.description}>
        {description}
      </div>
      <div className={styles.figure}>
        {scoreOrMonitor ? <CircleScore /> : <PostureMonitor />}
      </div>
    </div>
  )
}

export default DataContainer;