// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAa6lPkCGbX56Thx3aXKmopns4XUsB3cEU",
    authDomain: "fyp-2023-3b870.firebaseapp.com",
    databaseURL: "https://fyp-2023-3b870-default-rtdb.firebaseio.com",
    projectId: "fyp-2023-3b870",
    storageBucket: "fyp-2023-3b870.appspot.com",
    messagingSenderId: "363344046860",
    appId: "1:363344046860:web:58f4d464a67c9d9556b729",
    measurementId: "G-VDCZHEY63G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);