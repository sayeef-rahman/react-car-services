// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCegYiGvCeRl8U83bqG-a0DIo3XBTYxUd0",
  authDomain: "react-car-services-7741d.firebaseapp.com",
  projectId: "react-car-services-7741d",
  storageBucket: "react-car-services-7741d.appspot.com",
  messagingSenderId: "1076330674577",
  appId: "1:1076330674577:web:3d072519a874e5d71a8230"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;