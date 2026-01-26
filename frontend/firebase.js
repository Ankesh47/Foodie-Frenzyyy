// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "foodie-frenzy-67e55.firebaseapp.com",
  projectId: "foodie-frenzy-67e55",
  storageBucket: "foodie-frenzy-67e55.firebasestorage.app",
  messagingSenderId: "978980049208",
  appId: "1:978980049208:web:a3b2bf0e053d3dfaf6b1cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}

