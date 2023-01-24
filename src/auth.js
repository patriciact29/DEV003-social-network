import {
  getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,
} from 'firebase/auth';
import { app as firebase } from './firebase-config.js';

const auth = getAuth(firebase);
const googleAuthProvider = new GoogleAuthProvider();

export function login() {
  signInWithPopup(auth, googleAuthProvider)
    .then(() => console.log(auth));
}