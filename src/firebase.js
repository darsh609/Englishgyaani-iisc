// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkhfFpAZmwUiRopgbQwONXIRsxp1GoP-Y",
  authDomain: "imprint2024.firebaseapp.com",
  databaseURL: "https://imprint2024-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "imprint2024",
  storageBucket: "imprint2024.appspot.com",
  messagingSenderId: "7107950993",
  appId: "1:7107950993:web:48c8f399fe2132864e8230",
  measurementId: "G-F5VEPRL0PJ"
};

// Initialize Firebase
 export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
export const database=getFirestore(firebaseApp);