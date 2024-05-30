import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAzf-fbxdIbQUZL6FPUzHRPFOFdcXlwsNk",
  authDomain: "vehiculehub.firebaseapp.com",
  projectId: "vehiculehub",
  storageBucket: "vehiculehub.appspot.com",
  messagingSenderId: "121418176230",
  appId: "1:121418176230:web:741d400482003326568d27",
  measurementId: "G-LME2S944SB",
  databaseURL: "https://vehiculehub-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut };