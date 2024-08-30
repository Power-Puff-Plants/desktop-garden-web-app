import DataContainer from "../components/DataContainer";
import styles from "./DataAnalysis.module.css";

const DataAnalysisScreen = () => {
  const postureScoreDesc =
    "This score shows the percentage of time you maintained good posture.";
  const postureMonitorDesc =
    "Track your posture in real-time. This monitor provides instant feedback, helping you stay aware of your posture and make adjustments as needed.";
  return (
    <div className={styles.DataAnalysisScreen}>
      <div className={styles.dataAnalysisTitle}>
        <p>Data Analysis</p>
      </div>
      <div className={styles.dataContainerHolder}>
        <DataContainer title={"Overall Posture Score"} description={postureScoreDesc} scoreOrMonitor={true}/> 
        <DataContainer title={"Real Time Posture Monitor"} description={postureMonitorDesc} scoreOrMonitor={false}/>
      </div>
    </div>
  );
};

export default DataAnalysisScreen;
