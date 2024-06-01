// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgRkkKZKXOhvnXiH5BHwN1hJl7ghR2HuE",
  authDomain: "crud-reactjs-17e42.firebaseapp.com",
  projectId: "crud-reactjs-17e42",
  storageBucket: "crud-reactjs-17e42.appspot.com",
  messagingSenderId: "992825095708",
  appId: "1:992825095708:web:b110028de5ccea02a6d1d9",
  measurementId: "G-RN8FBFSPXQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
