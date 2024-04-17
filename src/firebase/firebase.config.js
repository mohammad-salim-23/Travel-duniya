// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKr8ZTz80iWd71XNKtDAqDCs6Y4V8dzyI",
  authDomain: "travel-duniya-5caa4.firebaseapp.com",
  projectId: "travel-duniya-5caa4",
  storageBucket: "travel-duniya-5caa4.appspot.com",
  messagingSenderId: "241273216410",
  appId: "1:241273216410:web:e3256b2d56ff517f68ee23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;