// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgBNjI1ZvsRQvScBp3yE8ZsGqaDunRodY",
  authDomain: "netflix-gpt-47c79.firebaseapp.com",
  projectId: "netflix-gpt-47c79",
  storageBucket: "netflix-gpt-47c79.appspot.com",
  messagingSenderId: "1085727587629",
  appId: "1:1085727587629:web:0c0f25989fe76a79b627a4",
  measurementId: "G-B5S7JY7PE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
