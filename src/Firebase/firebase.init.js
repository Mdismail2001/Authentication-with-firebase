// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH24d5ecgs45BP2IsDuJb2rWu0bF8hBWw",
  authDomain: "authentication-e5459.firebaseapp.com",
  projectId: "authentication-e5459",
  storageBucket: "authentication-e5459.firebasestorage.app",
  messagingSenderId: "545948533665",
  appId: "1:545948533665:web:74bb86ac805fb46c3641e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);