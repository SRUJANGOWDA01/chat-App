// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA0swWmeXiQ-EACD0Z6x6JlNXzQWfH4GQ",
  authDomain: "react-chat-app-26875.firebaseapp.com",
  projectId: "react-chat-app-26875",
  storageBucket: "react-chat-app-26875.appspot.com",
  messagingSenderId: "625925723482",
  appId: "1:625925723482:web:9ed17d089008853694cf63",
  measurementId: "G-DQ263F39G8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); // main app config
export const auth = getAuth()//authentication (register,login,logout,userinfo,reset,sendingmail)
export const storage = getStorage() //file storage (files)
export const db = getFirestore() //database (database)


  