// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'

import { useState, useEffect } from "react"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZhj2D3qC0PPVloQZF4WzcJuETOEsubNc",
  authDomain: "auth-production-b0892.firebaseapp.com",
  projectId: "auth-production-b0892",
  storageBucket: "auth-production-b0892.appspot.com",
  messagingSenderId: "1041853150208",
  appId: "1:1041853150208:web:bd98a6d8f0c0c89e0e94e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

/* 直接在firebase.js裡輸出signup函數 */
export function signup(email, password){
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password){
  return signInWithEmailAndPassword(auth, email, password);
}


export function logout(){
  return signOut(auth)
}

export function useAuth(){
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));/* 如果mounted 會記錄，沒有不會記錄(回傳null)，所以不確定有沒有東西輸入一律用unsub */
    return unsub;
  }, [])
  return currentUser;
}







