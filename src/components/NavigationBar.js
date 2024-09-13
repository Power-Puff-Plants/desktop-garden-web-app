import { useState } from 'react';
import styles from "./NavigationBar.module.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.NavigationBar}>
      <img className={styles.pppLogo} src="/assets/images/ppp-logo.png" />
      <div className={`${styles.rightNavContainer} ${isOpen ? styles.showMenu : ""}`}>
        <div className={styles.routesContainer}>
          <Link to='/' className={styles.link}>Home</Link>
          <Link to='/product-detail' className={styles.link}>Product Detail</Link>
          <Link to='/data' className={styles.link}>Analysis</Link>
          <Link to='/login' className={styles.link}>Log in</Link>
        </div>
        <img className={styles.profileImg} src="/assets/images/profile-img.png" />
      </div>
      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </button>
    </div>
  );
};

export default NavigationBar;
