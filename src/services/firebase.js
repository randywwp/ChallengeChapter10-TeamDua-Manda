import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArSl-v-KqBaEXNw3RkY68ft_z7ruIagHI",
  authDomain: "challenge-c9.firebaseapp.com",
  projectId: "challenge-c9",
  storageBucket: "challenge-c9.appspot.com",
  messagingSenderId: "546197271681",
  appId: "1:546197271681:web:95f89416f610c796254980",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
