import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//firebase brandon
// const firebaseConfig = {
//   apiKey: "AIzaSyArSl-v-KqBaEXNw3RkY68ft_z7ruIagHI",
//   authDomain: "challenge-c9.firebaseapp.com",
//   projectId: "challenge-c9",
//   storageBucket: "challenge-c9.appspot.com",
//   messagingSenderId: "546197271681",
//   appId: "1:546197271681:web:95f89416f610c796254980",
// };

//firebase fahmi
const firebaseConfig = {
  apiKey: "AIzaSyBlTjwi_2Bh10DW41laQaUc9Jmt45n732A",
  authDomain: "fsw-binar-fahmi-chapter9.firebaseapp.com",
  projectId: "fsw-binar-fahmi-chapter9",
  storageBucket: "fsw-binar-fahmi-chapter9.appspot.com",
  messagingSenderId: "52154749890",
  appId: "1:52154749890:web:b1bc50bda257855575bc5b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
