// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuWNVLCXY5foq_NCkdhn1DvyIqvHsRn_8",
  authDomain: "revisao-808c7.firebaseapp.com",
  projectId: "revisao-808c7",
  storageBucket: "revisao-808c7.appspot.com",
  messagingSenderId: "744205128568",
  appId: "1:744205128568:web:b15d823366cf9550afae8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
