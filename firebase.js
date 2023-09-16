// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBL7tBhU05vWlwMnGoBIQTEN-7igVX8mCU",

  authDomain: "health-datacenter.firebaseapp.com",

  projectId: "health-datacenter",

  storageBucket: "health-datacenter.appspot.com",

  messagingSenderId: "730208734542",

  appId: "1:730208734542:web:69b8e4e8c0128c8051a21f",

  measurementId: "G-3J12NVV53B"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const firestore = app.firestore();
export default firestore;