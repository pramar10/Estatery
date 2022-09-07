import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBVOenNr6YGpGj2vALNtlWaFgAmU-LGLc",
  authDomain: "rent-app-f3e41.firebaseapp.com",
  projectId: "rent-app-f3e41",
  storageBucket: "rent-app-f3e41.appspot.com",
  messagingSenderId: "78667628310",
  appId: "1:78667628310:web:092821e53397af4482da37",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };
