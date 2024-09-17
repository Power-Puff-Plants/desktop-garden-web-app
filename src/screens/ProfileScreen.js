import LoginButton from "../components/login/LogButton";
import { useAuthContext } from "../hooks/useAuthContext";
import styles from "./ProfileScreen.module.css"
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const ProfileScreen = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      const user = { email: null, profileImage: null }
      dispatch({type: 'LOGIN', payload: user})
      navigate('/login/true')
    } catch (err) {
      console.error(err);
    }
  };
  return (
  <div>
    <LoginButton text={"log out"} onClick={logOut}/>
  </div>)
}

export default ProfileScreen;