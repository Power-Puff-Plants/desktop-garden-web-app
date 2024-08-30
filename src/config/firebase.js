import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDeRekH8_lC9wUlZhXLfTOv2FJ3fyu1Wxw",
  authDomain: "posture-plant-pal.firebaseapp.com",
  projectId: "posture-plant-pal",
  storageBucket: "posture-plant-pal.appspot.com",
  messagingSenderId: "1072833348744",
  appId: "1:1072833348744:web:4d1b1d9d88e806392fcb3d",
  measurementId: "G-FSJJWLVQ1Q"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
