
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx56lGTypXvEvbiL35uFLdwyEB9bqY3Ic",
  authDomain: "artpainting-82c83.firebaseapp.com",
  databaseURL: "https://artpainting-82c83-default-rtdb.firebaseio.com",
  projectId: "artpainting-82c83",
  storageBucket: "artpainting-82c83.firebasestorage.app",
  messagingSenderId: "379537171414",
  appId: "1:379537171414:web:e1ca2edfc7f013fa3c3a77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
