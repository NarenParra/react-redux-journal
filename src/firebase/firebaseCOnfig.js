import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_TZPS6392kX8-CZ5GKZEeH3OavWeB274",
  authDomain: "react-app-auth-6437d.firebaseapp.com",
  databaseURL: "https://react-app-auth-6437d.firebaseio.com",
  projectId: "react-app-auth-6437d",
  storageBucket: "react-app-auth-6437d.appspot.com",
  messagingSenderId: "24901529493",
  appId: "1:24901529493:web:e83382c5e30b1e6fe3909c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
