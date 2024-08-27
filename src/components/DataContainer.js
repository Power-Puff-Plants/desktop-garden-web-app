import styles from './DataContainer.module.css'

const DataContainer = ({ title, description }) => {
  return (
    <div className={styles.dataContainer}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.description}>
        {description}
      </div>
      <div className={styles.figure}></div>
    </div>
  )
}

export default DataContainer;