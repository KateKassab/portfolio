// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkKG5SRWtK-g3124QjXXCHWXiMLm31_wU",
  authDomain: "firstproject-67c25.firebaseapp.com",
  projectId: "firstproject-67c25",
  storageBucket: "firstproject-67c25.firebasestorage.app",
  messagingSenderId: "549089694796",
  appId: "1:549089694796:web:5838ba7fb06150de7050e9",
  measurementId: "G-0WG9LXP89S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);