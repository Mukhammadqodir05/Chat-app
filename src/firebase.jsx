// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_vItLpe6km80qc7fPBYIzVpPKqwlxPjM",
  authDomain: "chatting-app-d2f81.firebaseapp.com",
  projectId: "chatting-app-d2f81",
  storageBucket: "chatting-app-d2f81.appspot.com",
  messagingSenderId: "1001505711657",
  appId: "1:1001505711657:web:06ff61ef155332009ade38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
