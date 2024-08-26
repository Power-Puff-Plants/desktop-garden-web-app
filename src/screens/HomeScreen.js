import styles from "./HomeScreen.module.css";

const HomeScreen = () => {
  return (
    <div className={styles.HomeScreen}>
      <div className={styles.welcomeBanner}>
        <div>
          <img className={styles.image} src="/assets/images/homepage.jpg" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
