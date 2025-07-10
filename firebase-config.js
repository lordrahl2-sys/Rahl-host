import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export {
  auth,
  storage,
  ref,
  uploadBytes,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
};
