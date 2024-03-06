// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHp5DGnOdGAeO7i5kUAxV_mDO9lVc7Krs",
  authDomain: "react-curso-d3727.firebaseapp.com",
  projectId: "react-curso-d3727",
  storageBucket: "react-curso-d3727.appspot.com",
  messagingSenderId: "587553940003",
  appId: "1:587553940003:web:18d0d2a4a492619ef84796"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

