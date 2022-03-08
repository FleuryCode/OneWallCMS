import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { KEYS } from '../Keys';

export const firebaseConfig = {
  apiKey: KEYS.FIREBASE_KEY,
  authDomain: "onewallmedia-99915.firebaseapp.com",
  projectId: "onewallmedia-99915",
  storageBucket: "onewallmedia-99915.appspot.com",
  messagingSenderId: "464734111480",
  appId: "1:464734111480:web:e2863b303fa981ebf91d0d",
  measurementId: "G-HJ7G73L21R"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage();

export default firebaseApp;