import { useEffect, useState } from "react";
import DataContainer from "../../components/data/DataContainer";
import styles from "./DataAnalysis.module.css";
import { firestore } from "../../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";

const DataAnalysisScreen = () => {
  const postureScoreDesc =
    "This score shows the percentage of time you maintained good posture.";
  const postureMonitorDesc =
    "Track your posture in real-time. This monitor provides instant feedback, helping you stay aware of your posture and make adjustments as needed.";

  const [postureData, setPostureData] = useState([]);
  const postureCollectionRef = collection(firestore, "PostureData");
  const [posturePercentage, setPosturePercentage] = useState(0);

  useEffect(() => {
    const unsubscribe = onSnapshot(postureCollectionRef, (snapshot) => {
      const filteredData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPostureData(filteredData);
    }, (err) => {
      console.error(err);
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (postureData.length > 0) {
      console.log("Calculating posture percentage");
      let goodPosture = 0;
      let totalPosture = 0;

      postureData.forEach((postureEntry) => {
        if (postureEntry.isPostureGood) {
          goodPosture++;
        }
        totalPosture++;
      });

      const percentage = (goodPosture / totalPosture) * 100;
      setPosturePercentage(Math.round(percentage)); // Set the calculated percentage
    }
    console.log(postureData);
  }, [postureData]); // Depend on postureData

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
          percentageScore={posturePercentage}
        />
        <DataContainer
          title={"Real Time Posture Monitor"}
          description={postureMonitorDesc}
          scoreOrMonitor={false}
          postureDataActual={postureData}
        />
      </div>
    </div>
  );
};

export default DataAnalysisScreen;
