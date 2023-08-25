// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS7A0eJlVPQQ5hEyqpo0dQGCSyTgUKtJQ",
  authDomain: "microblog-site.firebaseapp.com",
  projectId: "microblog-site",
  storageBucket: "microblog-site.appspot.com",
  messagingSenderId: "971316770529",
  appId: "1:971316770529:web:d060845a8a0b8a220e69a0",
  measurementId: "G-8JRWFETZQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();