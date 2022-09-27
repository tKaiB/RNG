// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmFo6RxqNTx5t0mf5Vn7qHe8adYs-jc2U",
  authDomain: "rng-bbef4.firebaseapp.com",
  projectId: "rng-bbef4",
  storageBucket: "rng-bbef4.appspot.com",
  messagingSenderId: "939031468778",
  appId: "1:939031468778:web:fe33caf8a370e4edfdd593"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app 