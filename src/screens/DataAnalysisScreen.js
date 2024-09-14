import { useEffect, useState } from "react";
import DataContainer from "../components/DataContainer";
import styles from "./DataAnalysis.module.css";
import { firestore } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

const DataAnalysisScreen = () => {
  const postureScoreDesc =
    "This score shows the percentage of time you maintained good posture.";
  const postureMonitorDesc =
    "Track your posture in real-time. This monitor provides instant feedback, helping you stay aware of your posture and make adjustments as needed.";

  const [postureData, setPostureData] = useState([]);
  const postureCollectionRef = collection(firestore, "PostureData");

  useEffect(() => {
    const calculatePercentage = () => {
      const goodPosture = 0;
      const totalPosture = 0;

      postureData.forEach((postureEntry) => {
        console.log(postureEntry);
      });
    }

    const getPostureData = async () => {
      try {
        const data = await getDocs(postureCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPostureData(filteredData)
      } catch (err) {
        console.error(err);
      }
    };
    getPostureData();

    calculatePercentage();

  }, []);

  return (
    <div className={styles.DataAnalysisScreen}>
      <div className={styles.dataAnalysisTitle}>
        <p>Data Analysis</p>
      </div>
      <div className={styles.dataContainerHolder}>
        <DataContainer
          title={"Overall Posture Score"}
          description={postureScoreDesc}
          scoreOrMonitor={true}
        />
        <DataContainer
          title={"Real Time Posture Monitor"}
          description={postureMonitorDesc}
          scoreOrMonitor={false}
        />
      </div>
    </div>
  );
};

export default DataAnalysisScreen;
