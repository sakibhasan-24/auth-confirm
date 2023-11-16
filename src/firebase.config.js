// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv2J2_To5Is4-4wEjm_xi0od9b3E5mn24",
  authDomain: "auth-confirm.firebaseapp.com",
  projectId: "auth-confirm",
  storageBucket: "auth-confirm.appspot.com",
  messagingSenderId: "917382022066",
  appId: "1:917382022066:web:21f9ab792f2f03ae771aab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
