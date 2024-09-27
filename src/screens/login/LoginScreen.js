import { useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import styles from "./LoginScreen.module.css";
import LoginInput from "../../components/login/LoginInput";
import LoginButton from "../../components/login/LogButton";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { AuthContext } from "../../context/AuthContext";

const LoginScreen = () => {
  const { isLogin } = useParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoginBool = isLogin === "true";
  const title = isLoginBool ? "LOG IN" : "SIGN UP";

  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  console.log("The email is -> ", email);

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      const user = { email: auth.currentUser.email, profileImage: null };
      dispatch({ type: "LOGIN", payload: user });
      navigate('/')
    } catch (err) {
      console.error(err);
    }
  };

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = { email: auth.currentUser.email, profileImage: null };
      dispatch({ type: "LOGIN", payload: user });
      navigate('/')
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      const user = {
        email: auth.currentUser.email,
        profileImage: auth.currentUser.photoURL,
      };
      dispatch({ type: "LOGIN", payload: user });
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const LoginSection = () => {
    return (
      <div>
        <LoginButton text={"Log in"} onClick={signIn} />
        <LoginButton text={"Login with Google"} onClick={signInWithGoogle} />
        <Link to="/login/false" style={{ marginTop: 20 }}>
          Don't have an account? Sign up here
        </Link>
      </div>
    );
  };

  const SignUpSection = () => {
    return (
      <div>
        <LoginButton text={"Sign up"} onClick={signUp} />
        <LoginButton text={"Login with Google"} onClick={signInWithGoogle} />
        <Link to="/login/true" style={{ marginTop: 20 }}>
          Already have an account? Log in here
        </Link>
      </div>
    );
  };

  return (
    <div className={styles.loginScreen}>
      <img
        className={styles.background}
        src="/assets/images/loginbackground2.jpg"
      ></img>
      <div className={styles.title}>
        <p>{title}</p>
      </div>
      <LoginInput title={"Email:"} setLogin={setEmail} />
      <LoginInput
        title={"Password:"}
        type={"password"}
        setLogin={setPassword}
      />
      {isLoginBool ? <LoginSection /> : <SignUpSection />}
    </div>
  );
};

export default LoginScreen;
