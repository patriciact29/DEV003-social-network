import { app as firebase } from './firebase-config.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(firebase);
const googleAuthProvider = new GoogleAuthProvider();

const loginBtn = document.querySelector('#google-login');

loginBtn.addEventListener('click', () => {
  signInWithPopup(auth, googleAuthProvider)
    .then(auth => console.log(auth));
});