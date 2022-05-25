// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1sI6cTCcO0ufAIDqIAkN1H7xVw5Cwg08",
  authDomain: "libraryapp-af4be.firebaseapp.com",
  projectId: "libraryapp-af4be",
  storageBucket: "libraryapp-af4be.appspot.com",
  messagingSenderId: "11574585640",
  appId: "1:11574585640:web:f193e776d6dc3a47a2c81d",
  measurementId: "G-X0GCYYN5HT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics;
