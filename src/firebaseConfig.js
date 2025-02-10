// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQHLE5WEXtyRbSqImfsXig5N6Y9H-jUQo",
  authDomain: "whatsapp-f8252.firebaseapp.com",
  projectId: "whatsapp-f8252",
  storageBucket: "whatsapp-f8252.firebasestorage.app",
  messagingSenderId: "448154166908",
  appId: "1:448154166908:web:2e6c8b7122aa2b77718bf9",
  measurementId: "G-YYX69PJZCX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
