// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Configuration de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA6C3exQnnGp9joqpp8elO6xL4To1bct04",
  authDomain: "oniriz.firebaseapp.com",
  projectId: "oniriz",
  storageBucket: "oniriz.appspot.com",
  messagingSenderId: "262832721613",
  appId: "1:262832721613:web:e217f7a7315ad4dd57a384",
  measurementId: "G-RSYG5JK5P7"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Initialisation de Firebase Analytics
const analytics = getAnalytics(app);

// Initialisation de l'authentification
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
