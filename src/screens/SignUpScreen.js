import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import styles from "./LoginScreen.module.css";
import LoginInput from "../components/login/LoginInput";
import LoginButton from "../components/login/LogButton";

const SignUpScreen = () => {
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
      <img className={styles.background} src="/assets/images/loginbackground2.jpg"></img>
      <div className={styles.title}>
        <p>SIGN UP</p>
        {/* <p>PUFF</p> */}
        {/* <p>PLANTS</p> */}
      </div>
      <LoginInput title={'Email:'} setLogin={setEmail}/>
      <LoginInput title={'Password:'} type={'password'} setLogin={setPassword}/>
      <LoginButton text={'Sign up'} onClick={signIn}/>
      <LoginButton text={'Login with Google'} onClick={signInWithGoogle}/>
      <Link to='/login' style={{ marginTop: 20}}>Already have an account? Login here</Link>

      {/* <LoginButton text={'Log out'} onClick={logOut}/> */}
    </div>
  );
};

export default SignUpScreen;
