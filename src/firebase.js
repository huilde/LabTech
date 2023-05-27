import { initializeApp } from "firebase/app";
// import { getFireStore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAp-fDQ2WwrUW1AXjs5Lf8hwCdTJiKXde4",
  authDomain: "labtech-388017.firebaseapp.com",
  projectId: "labtech-388017",
  storageBucket: "labtech-388017.appspot.com",
  messagingSenderId: "5420198135",
  appId: "1:5420198135:web:04b5b4cc193d1bc77d4bf2",
  measurementId: "G-WJ8QCESL7X",
};

const app = initializeApp(firebaseConfig);
const db = true;
export { db };
