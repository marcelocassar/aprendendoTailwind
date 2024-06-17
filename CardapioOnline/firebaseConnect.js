// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhL3U4dPkNxqjYDidF2rsikdNQSEeyMuI",
  authDomain: "marcelorichtercassar.firebaseapp.com",
  projectId: "marcelorichtercassar",
  storageBucket: "marcelorichtercassar.appspot.com",
  messagingSenderId: "738972820140",
  appId: "1:738972820140:web:be4edfd7522a07248df509",
  measurementId: "G-122VF3955L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);