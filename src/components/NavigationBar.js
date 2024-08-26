import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <div className={styles.NavigationBar}>
      <img className={styles.pppLogo} src="/assets/images/ppp-logo.png"/>
      <div className={styles.rightNavContainer}>
        <div className={styles.routesContainer}>
          <strong>Product Detail</strong>
          <strong>Analysis</strong>
          <strong>Rewards</strong>
          <strong>Log in</strong>
        </div>
        <img className={styles.profileImg} src="/assets/images/profile-img.png"/>
      </div>
     </div>
  );
};

export default NavigationBar;