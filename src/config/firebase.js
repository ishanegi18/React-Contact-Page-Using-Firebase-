// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCshKDjBekL62OEdNeC13CtFOCLGaQJaHc",
  authDomain: "vite-contact-16d06.firebaseapp.com",
  projectId: "vite-contact-16d06",
  storageBucket: "vite-contact-16d06.firebasestorage.app",
  messagingSenderId: "565161873115",
  appId: "1:565161873115:web:08fe7ef22f920672a506fe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);