import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBLB5nE8GazRgRHpdonnHXY0ST7MUFAr2c",
  authDomain: "twitter-app-72416.firebaseapp.com",
  databaseURL:"https://twitter-app-72416.firebaseio.com",
  projectId: "twitter-app-72416",
  storageBucket: "twitter-app-72416.appspot.com",
  messagingSenderId: "238853733724",
  appId: "1:238853733724:web:dcdce34deb2455781c5599"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)


export const db = firebaseApp.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()
export const provider = new firebase.auth.GithubAuthProvider()
