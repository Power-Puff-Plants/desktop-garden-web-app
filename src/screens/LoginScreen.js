import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import styles from "./LoginScreen.module.css";
import LoginInput from "../components/LoginInput";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.loginScreen}>
      <div className={styles.title}>
        <p>POWER</p>
        <p>PUFF</p>
        <p>PLANTS</p>
      </div>
      <LoginInput title={'Email:'} setLogin={setEmail}/>
      <LoginInput title={'Password:'} type={'password'} setLogin={setPassword}/>

      <button onClick={signIn}>Login</button>
      <button onClick={signInWithGoogle}> Login with Google</button>
      <button onClick={logOut}>Log out</button>
    </div>
  );
};

export default LoginScreen;
