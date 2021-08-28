import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

const config = {
  apiKey: "AIzaSyCYn3YdITKxvqhKboCVDnmtlwk51goxmfE",
  authDomain: "xorchat-54949.firebaseapp.com",
  projectId: "xorchat-54949",
  storageBucket: "xorchat-54949.appspot.com",
  messagingSenderId: "618368464210",
  appId: "1:618368464210:web:7baa07a5defa5764b8b68b",
  measurementId: "G-W66YYCTV9M",
};
initializeApp(config);
export const auth = getAuth();
export const database = getDatabase();
