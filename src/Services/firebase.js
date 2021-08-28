import { getDatabase } from "firebase/database";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYn3YdITKxvqhKboCVDnmtlwk51goxmfE",
  authDomain: "xorchat-54949.firebaseapp.com",
  databaseURL:
    "https://xorchat-54949-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "xorchat-54949",
  storageBucket: "xorchat-54949.appspot.com",
  messagingSenderId: "618368464210",
  appId: "1:618368464210:web:7baa07a5defa5764b8b68b",
  measurementId: "G-W66YYCTV9M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const database = getDatabase();
