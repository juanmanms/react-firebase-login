// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpKy133cEmORyhxac_b3UGRDQ_G-UD7aI",
  authDomain: "flutter-varios-ee792.firebaseapp.com",
  databaseURL: "https://flutter-varios-ee792-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "flutter-varios-ee792",
  storageBucket: "flutter-varios-ee792.appspot.com",
  messagingSenderId: "924282890061",
  appId: "1:924282890061:web:c90065c2960a9e3ae33904",
  measurementId: "G-2C8V8WHNPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
