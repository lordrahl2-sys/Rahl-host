// Firebase SDK imports (hosted version)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAkDLjFGnGudVZXqMmvTAxs72mwDD3hDks",
  authDomain: "rahl-host.firebaseapp.com",
  projectId: "rahl-host",
  storageBucket: "rahl-host.appspot.com",
  messagingSenderId: "98638028534",
  appId: "1:98638028534:web:1f9ad66a58bd1af52d56d7",
  measurementId: "G-5SD4095M7R"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export everything needed
export {
  auth,
  db,
  doc,
  setDoc,
  getDoc,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
};
