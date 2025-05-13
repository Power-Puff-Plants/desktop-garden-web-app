import CircleScore from './CircleScore';
import styles from './DataContainer.module.css'
import PostureMonitor from './PostureMonitor';
import ProgressSpinner from './ProgressSpinner';

const DataContainer = ({ title, description, scoreOrMonitor, percentageScore, postureDataActual }) => {
  return (
    <div className={styles.dataContainer}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.description}>
        {description}
      </div>
      <div className={styles.figure}>
        {scoreOrMonitor ? <ProgressSpinner percentage={percentageScore}/> : <PostureMonitor postureData={postureDataActual}/>}
        {/* <ProgressSpinner percentage={percentageScore}/> */}
        
      </div>
    </div>
  )
}

export default DataContainer;