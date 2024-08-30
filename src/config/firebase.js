// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeRekH8_lC9wUlZhXLfTOv2FJ3fyu1Wxw",
  authDomain: "posture-plant-pal.firebaseapp.com",
  projectId: "posture-plant-pal",
  storageBucket: "posture-plant-pal.appspot.com",
  messagingSenderId: "1072833348744",
  appId: "1:1072833348744:web:4d1b1d9d88e806392fcb3d",
  measurementId: "G-FSJJWLVQ1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);