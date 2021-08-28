import { auth } from "../Services/firebase";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getPerformance } from "firebase/performance";

export async function signInWithGoogle() {
  try {
    var provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  } catch (error) {
    this.setState({ error: error.message });
  }
}

export async function signInWithGitHub() {
  try {
    var provider = new GithubAuthProvider();
    await signInWithPopup(auth, provider);
  } catch (error) {
    this.setState({ error: error.message });
  }
}

// Signs-out of Friendly Chat.
export function signOutUser() {
  // Sign out of Firebase.
  signOut(auth);
}
