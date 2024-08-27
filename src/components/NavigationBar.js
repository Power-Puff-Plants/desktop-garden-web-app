import styles from "./NavigationBar.module.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className={styles.NavigationBar}>
      <img className={styles.pppLogo} src="/assets/images/ppp-logo.png"/>
      <div className={styles.rightNavContainer}>
        <div className={styles.routesContainer}>
          <Link to='/' className={styles.link}>Home</Link>
          <Link className={styles.link}>Product Detail</Link>
          <Link to='/data' className={styles.link}>Analysis</Link>
          <Link className={styles.link}>Log in</Link>
        </div>
        <img className={styles.profileImg} src="/assets/images/profile-img.png"/>
      </div>
     </div>
  );
};

export default NavigationBar;