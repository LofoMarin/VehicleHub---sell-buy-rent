// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzf-fbxdIbQUZL6FPUzHRPFOFdcXlwsNk",
  authDomain: "vehiculehub.firebaseapp.com",
  projectId: "vehiculehub",
  storageBucket: "vehiculehub.appspot.com",
  messagingSenderId: "121418176230",
  appId: "1:121418176230:web:741d400482003326568d27",
  measurementId: "G-LME2S944SB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

