import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import { KEYS } from '../Keys';

const firebaseConfig = {
    apiKey: KEYS.FIREBASE_KEY,
    authDomain: "onewallmedia-99915.firebaseapp.com",
    projectId: "onewallmedia-99915",
    storageBucket: "onewallmedia-99915.appspot.com",
    messagingSenderId: "464734111480",
    appId: "1:464734111480:web:e2863b303fa981ebf91d0d",
    measurementId: "G-HJ7G73L21R"
  };

  firebase.initializeApp(firebaseConfig);

  const firebaseApp = initializeApp(firebaseConfig);

  export const portfolioStorage = getStorage(firebaseApp);
  export const db = getFirestore();

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  export default firebase;