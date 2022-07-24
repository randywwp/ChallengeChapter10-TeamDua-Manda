const { initializeApp } = require("firebase/app");
const { doc, setDoc, getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDSX1iEMNN-zZH95onuurY9vh0wGjdCnc0",
  authDomain: "test-app-2d759.firebaseapp.com",
  projectId: "test-app-2d759",
  storageBucket: "test-app-2d759.appspot.com",
  messagingSenderId: "654518546577",
  appId: "1:654518546577:web:b59dbbc2ca29f57381cf30",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function userDoc() {
  const user = await setDoc(doc(db, "users", "BB"), {
    name: "Jake",
    state: "CA",
    country: "US",
  });

  console.log(user);
}

userDoc();
