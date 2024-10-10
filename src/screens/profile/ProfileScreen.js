import LoginButton from "../../components/login/LogButton";
import { useAuthContext } from "../../hooks/useAuthContext";
import styles from "./ProfileScreen.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate, Link } from "react-router-dom"; // Import Link for navigation
import { useState } from "react";

const ProfileScreen = () => {
  const { user, dispatch } = useAuthContext(); // Assuming 'user' comes from AuthContext
  const navigate = useNavigate();

  console.log();

  // State for input fields
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const logOut = async () => {
    try {
      await signOut(auth);
      const emptyUser = { email: null, profileImage: null };
      dispatch({ type: "LOGIN", payload: emptyUser });
      navigate("/login/true");
    } catch (err) {
      console.error(err);
    }
  };

  const profileImageUrl = user?.profileImage || '/assets/images/profile-img.png'; 

  return (
    <div className={styles.ProfileScreen}>
      <div className={styles.ProfileScreenTitle}>
        <p>Account Setting</p>
      </div>
      <div className={styles.content}>
        {user?.email && (
          <Link to={"/profile"}>
            <img
              className={styles.profileImgcontent}
              src={profileImageUrl}
              alt="Profile"
            />
          </Link>
        )}

        {/* Input Fields */}
        <form className={styles.form}>
          <label className={styles.label}>Username:</label>
          <input
            type="text"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* <label className={styles.label}>Height:</label>
          <input
            type="text"
            className={styles.input}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          /> */}

          <label className={styles.label}>Reset password:</label>
          <input
            type="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className={styles.saveButton}>
            Save
          </button>
        </form>
      </div>
      <div className={styles.logout}>
        <LoginButton text={"log out"} onClick={logOut} />
      </div>
    </div>
  );
};

export default ProfileScreen;
