import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC9L3xt5jX4UnBeASlfk7KmEphgmKt0FFo",
  authDomain: "coclothes-7eb54.firebaseapp.com",
  projectId: "coclothes-7eb54",
  storageBucket: "coclothes-7eb54.appspot.com",
  messagingSenderId: "186147027726",
  appId: "1:186147027726:web:b977660f9b5600d155b55f"
};


const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app);