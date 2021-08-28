import { auth } from "../Services/firebase";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";

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