import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6wGclmz6VBRfU1zvohcBVxfWCh1Z1sYs",
  authDomain: "greendot-8aab4.firebaseapp.com",
  projectId: "greendot-8aab4",
  storageBucket: "greendot-8aab4.appspot.com",
  messagingSenderId: "29302993419",
  appId: "1:29302993419:web:9e1b04b7633822fcc9cd0e",
  measurementId: "G-PE5BWKSM71",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
