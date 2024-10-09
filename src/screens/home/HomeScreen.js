import styles from "./HomeScreen.module.css";

const HomeScreen = () => {
  return (
    <div className={styles.HomeScreen}>
      <div>
        <img className={styles.image} src="/assets/images/homepage.jpg" />
      </div>
      <div className={styles.content}>
        <div className={styles.projectDescriptionContainer}>
          <p className={styles.projectDescription}>
            The project as s to create an innovative flowerpot with an
            integrated camera for posture detection, a feedback mechanism for
            slightly vibrating the cushion, and a reward system featuring custom
            fragrances and growing artificial plants. This project helps the
            users develop and maintain good sitting habits while reducing
            interruptions and other negative effects during work or study.
          </p>
          <div className={styles.problemStatementContainer}>
            <img
              className={styles.backPain}
              src="/assets/images/backpain.png"
            />
            <div className={styles.problemStatement}>
              <p className={styles.problemTitle}>Problem of back pain?</p>
              <p>
                According to the scientific research, postural issues are often
                linked to lumbar discomfort, with prolonged poor posture being a
                significant risk factor for lumbar spine injuries. These
                injuries and discomfort can, in turn, lead to an increase in
                postural problems, such as weakened muscles, poor deep core
                stability, maintaining the same position for extended periods,
                and reduced muscle flexibility. Poor posture adds mechanical
                stress to the lower back, which can result in low back pain.
                Common postures associated with low back pain include lumbar
                lordosis, sway-back, round back, flat back, and scoliosis (Du,
                Zhang,et.al, 2023).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
