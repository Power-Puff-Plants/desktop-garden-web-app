import { useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import styles from "./LoginScreen.module.css";
import LoginInput from "../components/LoginInput";
import LoginButton from "../components/LogButton";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useAuthContext();

  const navigate = useNavigate();

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = { email: auth.currentUser.email, profileImage: null }
      dispatch({type: 'LOGIN', payload: user})

    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      const user = { email: auth.currentUser.email, profileImage: auth.currentUser.photoURL}
      dispatch({type: 'LOGIN', payload: user})
      navigate('/')
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      const user = { email: null, profileImage: null }
      dispatch({type: 'LOGIN', payload: user})
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.loginScreen}>
      <img className={styles.background} src="/assets/images/loginbackground2.jpg"></img>
      <div className={styles.title}>
        <p>LOG IN</p>
        {/* <p>POWER</p> */}
        {/* <p>PUFF</p> */}
        {/* <p>PLANTS</p> */}
      </div>
      <LoginInput title={'Email:'} setLogin={setEmail}/>
      <LoginInput title={'Password:'} type={'password'} setLogin={setPassword}/>
      <LoginButton text={'Login'} onClick={signIn}/>
      <LoginButton text={'Login with Google'} onClick={signInWithGoogle}/>
      <Link to='/sign-up' style={{marginTop: 20}}>Already have an account? Sign up here</Link>
      <LoginButton text={'Log out'} onClick={logOut}/>

      {/* <button onClick={signIn}>Login</button>
      <button onClick={signInWithGoogle}> Login with Google</button>
      <button onClick={logOut}>Log out</button> */}
    </div>
  );
};

export default LoginScreen;             