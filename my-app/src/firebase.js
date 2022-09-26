// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDCDmyR1f4Vf-gxjYiwirkTQJ2UQzOvZE",
  authDomain: "rng--dev.firebaseapp.com",
  projectId: "rng--dev",
  storageBucket: "rng--dev.appspot.com",
  messagingSenderId: "678474626525",
  appId: "1:678474626525:web:347d98b23bd00ab2a73234"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app 