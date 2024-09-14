import { useState } from 'react';
import { useAuthContext } from "../hooks/useAuthContext";
import styles from "./NavigationBar.module.css";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useEffect, useState, useLayoutEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const NavigationBar = () => {
  const { user, dispatch } = useAuthContext();

  const [ profileImageUrl, setProfileImageUrl ] = useState('/assets/images/profile-img.png');

  useLayoutEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("I'm logged in: ", currentUser.email);
        // console.log("this is the user's photo URL", currentUser.photoURL);
        const user = { email: currentUser.email, profileImage: currentUser?.photoURL }
        if (currentUser?.photoURL) {
          setProfileImageUrl(currentUser?.photoURL)
        }

        dispatch({type: 'LOGIN', payload: user})
      } else {
        console.log("I'm not logged in");
      }
    })
  }, [])

  // const profileImage = <Link><img className={styles.profileImg} src={profileImageUrl}/></Link>
 
  const [isOpen, setIsOpen] = useState(false); // State to handle menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.NavigationBar}>
      <img className={styles.pppLogo} src="/assets/images/ppp-logo.png"  />
      <div className={`${styles.rightNavContainer} ${isOpen ? styles.showMenu : ""}`}>
        <div className={styles.routesContainer}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/product-detail" className={styles.link}>
            Product Detail
          </Link>
          <Link to="/data" className={styles.link}>
            Analysis
          </Link>
          {!user?.email && <Link to="/login/true" className={styles.link}>
            Log in/Sign up
          </Link>}
        </div>
        {user?.email && <Link to={'/profile'}><img className={styles.profileImg} src={profileImageUrl}/></Link>}
      </div>
      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </button>
    </div>
  );
};

export default NavigationBar;
